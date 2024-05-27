// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React, { useEffect } from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { HashRouter, Route } from 'react-router-dom';
import LoadingBar from 'react-redux-loading-bar';
import { hot } from 'react-hot-loader/root';

import 'react-table/react-table.css';
import '../ui/Tabler.css';
import '../ui/ReactTable.css';
import './index.css';

// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import propTypes from 'prop-types';
// @ts-expect-error TS(6142): Module '../Toasts' was resolved to '/Users/igorlob... Remove this comment to see the full error message
import Toasts from '../Toasts';
// @ts-expect-error TS(6142): Module '../ui/Footer' was resolved to '/Users/igor... Remove this comment to see the full error message
import Footer from '../ui/Footer';
// @ts-expect-error TS(6142): Module '../ui/Status' was resolved to '/Users/igor... Remove this comment to see the full error message
import Status from '../ui/Status';
// @ts-expect-error TS(6142): Module '../ui/UpdateTopline' was resolved to '/Use... Remove this comment to see the full error message
import UpdateTopline from '../ui/UpdateTopline';
// @ts-expect-error TS(6142): Module '../ui/UpdateOverlay' was resolved to '/Use... Remove this comment to see the full error message
import UpdateOverlay from '../ui/UpdateOverlay';
// @ts-expect-error TS(6142): Module '../ui/EncryptionTopline' was resolved to '... Remove this comment to see the full error message
import EncryptionTopline from '../ui/EncryptionTopline';
// @ts-expect-error TS(6142): Module '../ui/Icons' was resolved to '/Users/igorl... Remove this comment to see the full error message
import Icons from '../ui/Icons';
import i18n from '../../i18n';
// @ts-expect-error TS(6142): Module '../ui/Loading' was resolved to '/Users/igo... Remove this comment to see the full error message
import Loading from '../ui/Loading';
import {
    FILTERS_URLS,
    MENU_URLS,
    SETTINGS_URLS,
    THEMES,
} from '../../helpers/constants';
// @ts-expect-error TS(6142): Module '../../helpers/helpers' was resolved to '/U... Remove this comment to see the full error message
import { getLogsUrlParams, setHtmlLangAttr, setUITheme } from '../../helpers/helpers';
// @ts-expect-error TS(6142): Module '../Header' was resolved to '/Users/igorlob... Remove this comment to see the full error message
import Header from '../Header';
// @ts-expect-error TS(6142): Module '../../actions' was resolved to '/Users/igo... Remove this comment to see the full error message
import { changeLanguage, getDnsStatus, getTimerStatus } from '../../actions';

import Dashboard from '../../containers/Dashboard';
import SetupGuide from '../../containers/SetupGuide';
import Settings from '../../containers/Settings';
import Dns from '../../containers/Dns';
import Encryption from '../../containers/Encryption';
// @ts-expect-error TS(6142): Module '../Settings/Dhcp' was resolved to '/Users/... Remove this comment to see the full error message
import Dhcp from '../Settings/Dhcp';
import Clients from '../../containers/Clients';
import DnsBlocklist from '../../containers/DnsBlocklist';
import DnsAllowlist from '../../containers/DnsAllowlist';
import DnsRewrites from '../../containers/DnsRewrites';
import CustomRules from '../../containers/CustomRules';
// @ts-expect-error TS(6142): Module '../Filters/Services' was resolved to '/Use... Remove this comment to see the full error message
import Services from '../Filters/Services';
// @ts-expect-error TS(6142): Module '../Logs' was resolved to '/Users/igorloban... Remove this comment to see the full error message
import Logs from '../Logs';
import ProtectionTimer from '../ProtectionTimer';

const ROUTES = [
    {
        path: MENU_URLS.root,
        component: Dashboard,
        exact: true,
    },
    {
        path: [`${MENU_URLS.logs}${getLogsUrlParams(':search?', ':response_status?')}`, MENU_URLS.logs],
        component: Logs,
    },
    {
        path: MENU_URLS.guide,
        component: SetupGuide,
    },
    {
        path: SETTINGS_URLS.settings,
        component: Settings,
    },
    {
        path: SETTINGS_URLS.dns,
        component: Dns,
    },
    {
        path: SETTINGS_URLS.encryption,
        component: Encryption,
    },
    {
        path: SETTINGS_URLS.dhcp,
        component: Dhcp,
    },
    {
        path: SETTINGS_URLS.clients,
        component: Clients,
    },
    {
        path: FILTERS_URLS.dns_blocklists,
        component: DnsBlocklist,
    },
    {
        path: FILTERS_URLS.dns_allowlists,
        component: DnsAllowlist,
    },
    {
        path: FILTERS_URLS.dns_rewrites,
        component: DnsRewrites,
    },
    {
        path: FILTERS_URLS.custom_rules,
        component: CustomRules,
    },
    {
        path: FILTERS_URLS.blocked_services,
        component: Services,
    },
];

const renderRoute = ({
    path,
    component,
    exact,
// @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
}: any, idx: any) => <Route
        key={idx}
        exact={exact}
        path={path}
        component={component}
/>;

const App = () => {
    const dispatch = useDispatch();
    const {
        language,
        isCoreRunning,
        isUpdateAvailable,
        processing,
        theme,
    } = useSelector((state: any) => state.dashboard, shallowEqual);

    const { processing: processingEncryption } = useSelector((state: any) => state.encryption, shallowEqual);

    const updateAvailable = isCoreRunning && isUpdateAvailable;

    useEffect(() => {
        dispatch(getDnsStatus());

        const handleVisibilityChange = () => {
            if (document.visibilityState === 'visible') {
                dispatch(getTimerStatus());
            }
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []);

    const setLanguage = () => {
        if (!processing) {
            if (language) {
                i18n.changeLanguage(language);
                setHtmlLangAttr(language);
            }
        }

        i18n.on('languageChanged', (lang) => {
            dispatch(changeLanguage(lang));
        });
    };

    useEffect(() => {
        setLanguage();
    }, [language]);

    const handleAutoTheme = (e: any, accountTheme: any) => {
        if (accountTheme !== THEMES.auto) {
            return;
        }

        if (e.matches) {
            setUITheme(THEMES.dark);
        } else {
            setUITheme(THEMES.light);
        }
    };

    useEffect(() => {
        if (theme !== THEMES.auto) {
            setUITheme(theme);

            return;
        }

        const colorSchemeMedia = window.matchMedia('(prefers-color-scheme: dark)');
        setUITheme(theme);

        if (colorSchemeMedia.addEventListener !== undefined) {
            colorSchemeMedia.addEventListener('change', (e) => {
                handleAutoTheme(e, theme);
            });
        } else {
            // Deprecated addListener for older versions of Safari.
            colorSchemeMedia.addListener((e) => {
                handleAutoTheme(e, theme);
            });
        }
    }, [theme]);

    const reloadPage = () => {
        window.location.reload();
    };

    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    return <HashRouter hashType="noslash">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        {updateAvailable && <>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <UpdateTopline />
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <UpdateOverlay />
        </>}
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        {!processingEncryption && <EncryptionTopline />}
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <LoadingBar className="loading-bar" updateTime={1000} />
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Header />
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <ProtectionTimer />
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <div className="container container--wrap pb-5 pt-5">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            {processing && <Loading />}
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            {!isCoreRunning && <div className="row row-cards">
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <div className="col-lg-12">
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Status reloadPage={reloadPage} message="dns_start" />
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Loading />
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </div>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </div>}
            {!processing && isCoreRunning && ROUTES.map(renderRoute)}
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </div>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Footer />
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Toasts />
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Icons />
    </HashRouter>;
};

renderRoute.propTypes = {
    path: propTypes.oneOfType([propTypes.string, propTypes.arrayOf(propTypes.string)]).isRequired,
    component: propTypes.element.isRequired,
    exact: propTypes.bool,
};

export default hot(App);
