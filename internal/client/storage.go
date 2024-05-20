package client

import (
	"fmt"
	"slices"

	"github.com/AdguardTeam/dnsproxy/proxy"
	"github.com/AdguardTeam/dnsproxy/upstream"
	"github.com/AdguardTeam/golibs/container"
	"github.com/AdguardTeam/golibs/errors"
)

// Storage contains information about persistent and runtime clients.
type Storage struct {
	// allTags is a set of all client tags.
	allTags *container.MapSet[string]

	// index contains information about persistent clients.
	index *Index
}

// NewStorage returns initialized client storage.
func NewStorage(clientTags []string) (s *Storage) {
	allTags := container.NewMapSet(clientTags...)

	return &Storage{
		allTags: allTags,
		index:   NewIndex(),
	}
}

// Add stores persistent client information or returns an error.
func (s *Storage) Add(p *Persistent) (err error) {
	err = s.check(p)
	if err != nil {
		return fmt.Errorf("adding client: %w", err)
	}

	s.index.Add(p)

	return nil
}

// check returns an error if persistent client information contains errors.
func (s *Storage) check(p *Persistent) (err error) {
	switch {
	case p == nil:
		return errors.Error("client is nil")
	case p.Name == "":
		return errors.Error("empty name")
	case p.IDsLen() == 0:
		return errors.Error("id required")
	}

	_, err = proxy.ParseUpstreamsConfig(p.Upstreams, &upstream.Options{})
	if err != nil {
		return fmt.Errorf("invalid upstream servers: %w", err)
	}

	for _, t := range p.Tags {
		if !s.allTags.Has(t) {
			return fmt.Errorf("invalid tag: %q", t)
		}
	}

	// TODO(s.chzhen):  Move to the constructor.
	slices.Sort(p.Tags)

	return nil
}

// RemoveByName removes persistent client information.  ok is false if no such
// client exists by that name.
func (s *Storage) RemoveByName(name string) (ok bool) {
	p, ok := s.index.FindByName(name)
	if !ok {
		return false
	}

	s.index.Delete(p)

	return true
}

// Update updates stored persistent client information p with new information n
// or returns an error.  p and n must have the same UID.
func (s *Storage) Update(p, n *Persistent) (err error) {
	defer func() { err = errors.Annotate(err, "updating client: %w") }()

	err = s.check(n)
	if err != nil {
		// Don't wrap the error since there is already an annotation deferred.
		return err
	}

	err = s.index.Clashes(n)
	if err != nil {
		// Don't wrap the error since there is already an annotation deferred.
		return err
	}

	s.index.Delete(p)
	s.index.Add(n)

	return nil
}
