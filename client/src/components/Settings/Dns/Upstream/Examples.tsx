// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';
import { Trans, withTranslation } from 'react-i18next';
import { COMMENT_LINE_DEFAULT_TOKEN } from '../../../../helpers/constants';

// @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
const Examples = (props: any) => <div className="list leading-loose">
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Trans>examples_title</Trans>:
    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    <ol className="leading-loose">
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <li>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <code>94.140.14.140</code>, <code>2a10:50c0::1:ff</code>: {props.t('example_upstream_regular')}
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </li>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <li>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <code>94.140.14.140:53</code>, <code>[2a10:50c0::1:ff]:53</code>: {props.t('example_upstream_regular_port')}
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </li>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <li>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <code>udp://unfiltered.adguard-dns.com</code>: <Trans>example_upstream_udp</Trans>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </li>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <li>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <code>tcp://94.140.14.140</code>, <code>tcp://[2a10:50c0::1:ff]</code>: <Trans>example_upstream_tcp</Trans>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </li>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <li>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <code>tcp://94.140.14.140:53</code>, <code>tcp://[2a10:50c0::1:ff]:53</code>: <Trans>example_upstream_tcp_port</Trans>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </li>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <li>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <code>tcp://unfiltered.adguard-dns.com</code>: <Trans>example_upstream_tcp_hostname</Trans>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </li>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <li>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <code>tls://unfiltered.adguard-dns.com</code>: <Trans
                components={[
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <a
                        href="https://en.wikipedia.org/wiki/DNS_over_TLS"
                        target="_blank"
                        rel="noopener noreferrer"
                        key="0"
                    >
                        DNS-over-TLS
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </a>,
                ]}
            >
                example_upstream_dot
            </Trans>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </li>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <li>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <code>https://unfiltered.adguard-dns.com/dns-query</code>: <Trans
                components={[
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <a
                        href="https://en.wikipedia.org/wiki/DNS_over_HTTPS"
                        target="_blank"
                        rel="noopener noreferrer"
                        key="0"
                    >
                        DNS-over-HTTPS
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </a>,
                ]}
            >
                example_upstream_doh
            </Trans>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </li>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <li>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <code>h3://unfiltered.adguard-dns.com/dns-query</code>: <Trans
                components={[
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <a
                        href="https://en.wikipedia.org/wiki/HTTP/3"
                        target="_blank"
                        rel="noopener noreferrer"
                        key="0"
                    >
                        HTTP/3
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </a>,
                ]}
            >
                example_upstream_doh3
            </Trans>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </li>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <li>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <code>quic://unfiltered.adguard-dns.com</code>: <Trans
                components={[
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <a
                        href="https://datatracker.ietf.org/doc/html/rfc9250"
                        target="_blank"
                        rel="noopener noreferrer"
                        key="0"
                    >
                        DNS-over-QUIC
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </a>,
                ]}
            >
                example_upstream_doq
            </Trans>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </li>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <li>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <code>sdns://...</code>: <Trans
                components={[
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <a
                        href="https://dnscrypt.info/stamps/"
                        target="_blank"
                        rel="noopener noreferrer"
                        key="0"
                    >
                        DNS Stamps
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </a>,
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <a
                        href="https://dnscrypt.info/"
                        target="_blank"
                        rel="noopener noreferrer"
                        key="1"
                    >
                        DNSCrypt
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </a>,
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <a
                        href="https://en.wikipedia.org/wiki/DNS_over_HTTPS"
                        target="_blank"
                        rel="noopener noreferrer"
                        key="2"
                    >
                        DNS-over-HTTPS
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </a>,
                ]}
            >
                example_upstream_sdns
            </Trans>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </li>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <li>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <code>[/example.local/]94.140.14.140</code>: <Trans
                components={[
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <a
                        href="https://github.com/AdguardTeam/AdGuardHome/wiki/Configuration#upstreams-for-domains"
                        target="_blank"
                        rel="noopener noreferrer"
                        key="0"
                    >
                        Link
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </a>,
                ]}
            >
                example_upstream_reserved
            </Trans>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </li>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <li>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <code>[/example.local/]94.140.14.140 2a10:50c0::1:ff</code>: <Trans
                components={[
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <a
                        href="https://github.com/AdguardTeam/AdGuardHome/wiki/Configuration#upstreams-for-domains"
                        target="_blank"
                        rel="noopener noreferrer"
                        key="0"
                    >
                        Link
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </a>,
                ]}
            >
                example_multiple_upstreams_reserved
            </Trans>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </li>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <li>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <code>{COMMENT_LINE_DEFAULT_TOKEN} comment</code>: <Trans>
                example_upstream_comment
            </Trans>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </li>
    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    </ol>
// @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
</div>;

Examples.propTypes = {
    t: PropTypes.func.isRequired,
};

export default withTranslation()(Examples);
