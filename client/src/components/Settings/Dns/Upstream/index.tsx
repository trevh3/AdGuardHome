// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
import { useTranslation } from 'react-i18next';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
// @ts-expect-error TS(6142): Module './Form' was resolved to '/Users/igorlobano... Remove this comment to see the full error message
import Form from './Form';
// @ts-expect-error TS(6142): Module '../../../ui/Card' was resolved to '/Users/... Remove this comment to see the full error message
import Card from '../../../ui/Card';
import { setDnsConfig } from '../../../../actions/dnsConfig';

const Upstream = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const {
        upstream_dns,
        fallback_dns,
        bootstrap_dns,
        upstream_mode,
        resolve_clients,
        local_ptr_upstreams,
        use_private_ptr_resolvers,
    } = useSelector((state: any) => state.dnsConfig, shallowEqual);

    const upstream_dns_file = useSelector((state: any) => state.dnsConfig.upstream_dns_file);

    const handleSubmit = (values: any) => {
        const {
            fallback_dns,
            bootstrap_dns,
            upstream_dns,
            upstream_mode,
            resolve_clients,
            local_ptr_upstreams,
            use_private_ptr_resolvers,
        } = values;

        const dnsConfig = {
            fallback_dns,
            bootstrap_dns,
            upstream_mode,
            resolve_clients,
            local_ptr_upstreams,
            use_private_ptr_resolvers,
            ...(upstream_dns_file ? null : { upstream_dns }),
        };

        dispatch(setDnsConfig(dnsConfig));
    };

    const upstreamDns = upstream_dns_file ? t('upstream_dns_configured_in_file', { path: upstream_dns_file }) : upstream_dns;

    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    return <Card
        title={t('upstream_dns')}
        bodyType="card-body box-body--settings"
    >
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <div className="row">
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <div className="col">
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Form
                    initialValues={{
                        upstream_dns: upstreamDns,
                        fallback_dns,
                        bootstrap_dns,
                        upstream_mode,
                        resolve_clients,
                        local_ptr_upstreams,
                        use_private_ptr_resolvers,
                    }}
                    onSubmit={handleSubmit}
                />
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </div>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </div>
    </Card>;
};

export default Upstream;
