// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React, { useEffect, useState } from 'react';
import { Trans } from 'react-i18next';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import Modal from 'react-modal';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { useHistory } from 'react-router-dom';
import queryString from 'query-string';
import classNames from 'classnames';
import {
    BLOCK_ACTIONS,
    MEDIUM_SCREEN_SIZE,
} from '../../helpers/constants';
// @ts-expect-error TS(6142): Module '../ui/Loading' was resolved to '/Users/igo... Remove this comment to see the full error message
import Loading from '../ui/Loading';
// @ts-expect-error TS(6142): Module './Filters' was resolved to '/Users/igorlob... Remove this comment to see the full error message
import Filters from './Filters';
// @ts-expect-error TS(6142): Module './Disabled' was resolved to '/Users/igorlo... Remove this comment to see the full error message
import Disabled from './Disabled';
import { getFilteringStatus } from '../../actions/filtering';
// @ts-expect-error TS(6142): Module '../../actions' was resolved to '/Users/igo... Remove this comment to see the full error message
import { getClients } from '../../actions';
import { getDnsConfig } from '../../actions/dnsConfig';
import { getAccessList } from '../../actions/access';
import { getAllBlockedServices } from '../../actions/services';
import {
    getLogsConfig,
    resetFilteredLogs,
    setFilteredLogs,
    toggleDetailedLogs,
} from '../../actions/queryLogs';
// @ts-expect-error TS(6142): Module './InfiniteTable' was resolved to '/Users/i... Remove this comment to see the full error message
import InfiniteTable from './InfiniteTable';
import './Logs.css';
import { BUTTON_PREFIX } from './Cells/helpers';
// @ts-expect-error TS(6142): Module './AnonymizerNotification' was resolved to ... Remove this comment to see the full error message
import AnonymizerNotification from './AnonymizerNotification';

const processContent = (data: any) => Object.entries(data)
    .map(([key, value]) => {
        if (!value) {
            return null;
        }

        const isTitle = value === 'title';
        const isButton = key.startsWith(BUTTON_PREFIX);
        const isBoolean = typeof value === 'boolean';
        const isHidden = isBoolean && value === false;

        let keyClass = 'key-colon';

        if (isTitle) {
            keyClass = 'title--border';
        }
        if (isButton || isBoolean) {
            keyClass = '';
        }

        return isHidden ? null : (
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <div className="grid__row" key={key}>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <div
                    className={classNames(`key__${key}`, keyClass, {
                        'font-weight-bold': isBoolean && value === true,
                    })}
                >
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Trans>{isButton ? value : key}</Trans>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </div>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <div className={`value__${key} text-pre text-truncate`}>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Trans>{(isTitle || isButton || isBoolean) ? '' : value || '—'}</Trans>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </div>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </div>
        );
    });

const Logs = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const {
        response_status: response_status_url_param,
        search: search_url_param,
    } = queryString.parse(history.location.search);

    const {
        enabled,
        processingGetConfig,
        processingAdditionalLogs,
        processingGetLogs,
        anonymize_client_ip: anonymizeClientIp,
    } = useSelector((state: any) => state.queryLogs, shallowEqual);
    const filter = useSelector((state: any) => state.queryLogs.filter, shallowEqual);
    const logs = useSelector((state: any) => state.queryLogs.logs, shallowEqual);

    const search = search_url_param || filter?.search || '';
    const response_status = response_status_url_param || filter?.response_status || '';

    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= MEDIUM_SCREEN_SIZE);
    const [detailedDataCurrent, setDetailedDataCurrent] = useState({});
    const [buttonType, setButtonType] = useState(BLOCK_ACTIONS.BLOCK);
    const [isModalOpened, setModalOpened] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const closeModal = () => setModalOpened(false);

    useEffect(() => {
        (async () => {
            setIsLoading(true);
            await dispatch(setFilteredLogs({
                search,
                response_status,
            }));
            setIsLoading(false);
        })();
    }, [response_status, search]);

    const mediaQuery = window.matchMedia(`(max-width: ${MEDIUM_SCREEN_SIZE}px)`);
    const mediaQueryHandler = (e: any) => {
        setIsSmallScreen(e.matches);
        if (e.matches) {
            dispatch(toggleDetailedLogs(false));
        } else {
            dispatch(toggleDetailedLogs(true));
        }
    };

    useEffect(() => {
        try {
            mediaQuery.addEventListener('change', mediaQueryHandler);
        } catch (e1) {
            try {
                // Safari 13.1 do not support mediaQuery.addEventListener('change', handler)
                mediaQuery.addListener(mediaQueryHandler);
            } catch (e2) {
                console.error(e2);
            }
        }

        (async () => {
            setIsLoading(true);
            dispatch(getFilteringStatus());
            dispatch(getClients());
            dispatch(getAllBlockedServices());
            try {
                await Promise.all([
                    dispatch(getLogsConfig()),
                    dispatch(getDnsConfig()),
                    dispatch(getAccessList()),
                ]);
            } catch (err) {
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        })();

        return () => {
            try {
                mediaQuery.removeEventListener('change', mediaQueryHandler);
            } catch (e1) {
                try {
                    // Safari 13.1 do not support mediaQuery.addEventListener('change', handler)
                    mediaQuery.removeListener(mediaQueryHandler);
                } catch (e2) {
                    console.error(e2);
                }
            }

            dispatch(resetFilteredLogs());
        };
    }, []);

    useEffect(() => {
        if (!history.location.search) {
            (async () => {
                setIsLoading(true);
                // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
                await dispatch(setFilteredLogs());
                setIsLoading(false);
            })();
        }
    }, [history.location.search]);

    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    const renderPage = () => <>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Filters
                filter={{
                    response_status,
                    search,
                }}
                setIsLoading={setIsLoading}
                processingGetLogs={processingGetLogs}
                processingAdditionalLogs={processingAdditionalLogs}
        />
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <InfiniteTable
                isLoading={isLoading}
                items={logs}
                isSmallScreen={isSmallScreen}
                setDetailedDataCurrent={setDetailedDataCurrent}
                setButtonType={setButtonType}
                setModalOpened={setModalOpened}
        />
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Modal
            portalClassName='grid'
            isOpen={isSmallScreen && isModalOpened}
            onRequestClose={closeModal}
            style={{
                content: {
                    width: 'calc(100% - 32px)',
                    height: 'fit-content',
                    left: '50%',
                    top: 47,
                    padding: '0',
                    maxWidth: '720px',
                    transform: 'translateX(-50%)',
                },
                overlay: {
                    backgroundColor: 'rgba(0,0,0,0.5)',
                },
            }}
        >
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <div className="logs__modal-wrap">
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <svg
                    className="icon icon--24 icon-cross d-block cursor--pointer"
                    onClick={closeModal}
                >
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <use xlinkHref="#cross" />
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </svg>
                // @ts-expect-error TS(2554): Expected 1 arguments, but got 2.
                {processContent(detailedDataCurrent, buttonType)}
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </div>
        </Modal>
    </>;

    return (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <>
            {enabled && (
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    {processingGetConfig && <Loading />}
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    {anonymizeClientIp && <AnonymizerNotification />}
                    {!processingGetConfig && renderPage()}
                </>
            )}
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            {!enabled && !processingGetConfig && <Disabled />}
        </>
    );
};

export default Logs;
