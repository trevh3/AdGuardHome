// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { useDispatch, useSelector } from 'react-redux';
// @ts-expect-error TS(6142): Module './Upstream' was resolved to '/Users/igorlo... Remove this comment to see the full error message
import Upstream from './Upstream';
// @ts-expect-error TS(6142): Module './Access' was resolved to '/Users/igorloba... Remove this comment to see the full error message
import Access from './Access';
// @ts-expect-error TS(6142): Module './Config' was resolved to '/Users/igorloba... Remove this comment to see the full error message
import Config from './Config';
// @ts-expect-error TS(6142): Module '../../ui/PageTitle' was resolved to '/User... Remove this comment to see the full error message
import PageTitle from '../../ui/PageTitle';
// @ts-expect-error TS(6142): Module '../../ui/Loading' was resolved to '/Users/... Remove this comment to see the full error message
import Loading from '../../ui/Loading';
// @ts-expect-error TS(6142): Module './Cache' was resolved to '/Users/igorloban... Remove this comment to see the full error message
import CacheConfig from './Cache';
import { getDnsConfig } from '../../../actions/dnsConfig';
import { getAccessList } from '../../../actions/access';

const Dns = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const processing = useSelector((state: any) => state.access.processing);
    const processingGetConfig = useSelector((state: any) => state.dnsConfig.processingGetConfig);

    const isDataLoading = processing || processingGetConfig;

    useEffect(() => {
        dispatch(getAccessList());
        dispatch(getDnsConfig());
    }, []);

    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    return <>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <PageTitle title={t('dns_settings')} />
        {isDataLoading
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            ? <Loading />
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            : <>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Upstream />
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Config />
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <CacheConfig />
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Access />
            </>}
    </>;
};

export default Dns;
