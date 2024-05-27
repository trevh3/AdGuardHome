import React, {
    useCallback,
    useEffect,
    useRef,
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
} from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import propTypes from 'prop-types';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'loda... Remove this comment to see the full error message
import throttle from 'lodash/throttle';
// @ts-expect-error TS(6142): Module '../ui/Loading' was resolved to '/Users/igo... Remove this comment to see the full error message
import Loading from '../ui/Loading';
// @ts-expect-error TS(6142): Module './Cells/Header' was resolved to '/Users/ig... Remove this comment to see the full error message
import Header from './Cells/Header';
import { getLogs } from '../../actions/queryLogs';
// @ts-expect-error TS(6142): Module './Cells' was resolved to '/Users/igorloban... Remove this comment to see the full error message
import Row from './Cells';
// @ts-expect-error TS(6142): Module '../../helpers/helpers' was resolved to '/U... Remove this comment to see the full error message
import { isScrolledIntoView } from '../../helpers/helpers';
import { QUERY_LOGS_PAGE_LIMIT } from '../../helpers/constants';

const InfiniteTable = ({
    isLoading,
    items,
    isSmallScreen,
    setDetailedDataCurrent,
    setButtonType,
    setModalOpened,
}: any) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const loader = useRef(null);
    const loadingRef = useRef(null);

    const isEntireLog = useSelector((state: any) => state.queryLogs.isEntireLog);
    const processingGetLogs = useSelector((state: any) => state.queryLogs.processingGetLogs);
    const loading = isLoading || processingGetLogs;

    const listener = useCallback(() => {
        if (!loadingRef.current && loader.current && isScrolledIntoView(loader.current)) {
            dispatch(getLogs());
        }
    }, []);

    useEffect(() => {
        loadingRef.current = processingGetLogs;
    }, [processingGetLogs]);

    useEffect(() => {
        listener();
    }, [items.length < QUERY_LOGS_PAGE_LIMIT, isEntireLog]);

    useEffect(() => {
        const THROTTLE_TIME = 100;
        const throttledListener = throttle(listener, THROTTLE_TIME);

        window.addEventListener('scroll', throttledListener);
        return () => {
            window.removeEventListener('scroll', throttledListener);
        };
    }, []);

    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    const renderRow = (row: any, idx: any) => <Row
        key={idx}
        rowProps={row}
        isSmallScreen={isSmallScreen}
        setDetailedDataCurrent={setDetailedDataCurrent}
        setButtonType={setButtonType}
        setModalOpened={setModalOpened}
    />;

    const isNothingFound = items.length === 0 && !processingGetLogs;

    return (
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <div className="logs__table" role="grid">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            {loading && <Loading />}
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Header />
            {isNothingFound ? (
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <label className="logs__no-data">{t('nothing_found')}</label>
            ) : (
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <>
                    {items.map(renderRow)}
                    {!isEntireLog && (
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <div ref={loader} className="logs__loading text-center">
                            {t('loading_table_status')}
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        </div>
                    )}
                </>
            )}
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </div>
    );
};

InfiniteTable.propTypes = {
    isLoading: propTypes.bool.isRequired,
    items: propTypes.array.isRequired,
    isSmallScreen: propTypes.bool.isRequired,
    setDetailedDataCurrent: propTypes.func.isRequired,
    setButtonType: propTypes.func.isRequired,
    setModalOpened: propTypes.func.isRequired,
};

export default InfiniteTable;
