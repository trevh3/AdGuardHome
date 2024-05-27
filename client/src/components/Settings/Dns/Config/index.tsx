// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
import { useTranslation } from 'react-i18next';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
// @ts-expect-error TS(6142): Module '../../../ui/Card' was resolved to '/Users/... Remove this comment to see the full error message
import Card from '../../../ui/Card';
// @ts-expect-error TS(6142): Module './Form' was resolved to '/Users/igorlobano... Remove this comment to see the full error message
import Form from './Form';
import { setDnsConfig } from '../../../../actions/dnsConfig';

const Config = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const {
        blocking_mode,
        ratelimit,
        ratelimit_subnet_len_ipv4,
        ratelimit_subnet_len_ipv6,
        ratelimit_whitelist,
        blocking_ipv4,
        blocking_ipv6,
        blocked_response_ttl,
        edns_cs_enabled,
        edns_cs_use_custom,
        edns_cs_custom_ip,
        dnssec_enabled,
        disable_ipv6,
        processingSetConfig,
    } = useSelector((state: any) => state.dnsConfig, shallowEqual);

    const handleFormSubmit = (values: any) => {
        dispatch(setDnsConfig(values));
    };

    return (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Card
            title={t('dns_config')}
            bodyType="card-body box-body--settings"
            id="dns-config"
        >
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <div className="form">
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Form
                    initialValues={{
                        ratelimit,
                        ratelimit_subnet_len_ipv4,
                        ratelimit_subnet_len_ipv6,
                        ratelimit_whitelist,
                        blocking_mode,
                        blocking_ipv4,
                        blocking_ipv6,
                        blocked_response_ttl,
                        edns_cs_enabled,
                        disable_ipv6,
                        dnssec_enabled,
                        edns_cs_use_custom,
                        edns_cs_custom_ip,
                    }}
                    onSubmit={handleFormSubmit}
                    processing={processingSetConfig}
                />
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </div>
        </Card>
    );
};

export default Config;
