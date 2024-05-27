// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React, { Component, Fragment } from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

// @ts-expect-error TS(6142): Module './StatsConfig' was resolved to '/Users/igo... Remove this comment to see the full error message
import StatsConfig from './StatsConfig';
// @ts-expect-error TS(6142): Module './LogsConfig' was resolved to '/Users/igor... Remove this comment to see the full error message
import LogsConfig from './LogsConfig';
// @ts-expect-error TS(6142): Module './FiltersConfig' was resolved to '/Users/i... Remove this comment to see the full error message
import FiltersConfig from './FiltersConfig';

// @ts-expect-error TS(6142): Module '../ui/Checkbox' was resolved to '/Users/ig... Remove this comment to see the full error message
import Checkbox from '../ui/Checkbox';
// @ts-expect-error TS(6142): Module '../ui/Loading' was resolved to '/Users/igo... Remove this comment to see the full error message
import Loading from '../ui/Loading';
// @ts-expect-error TS(6142): Module '../ui/PageTitle' was resolved to '/Users/i... Remove this comment to see the full error message
import PageTitle from '../ui/PageTitle';
// @ts-expect-error TS(6142): Module '../ui/Card' was resolved to '/Users/igorlo... Remove this comment to see the full error message
import Card from '../ui/Card';
// @ts-expect-error TS(6142): Module '../../helpers/helpers' was resolved to '/U... Remove this comment to see the full error message
import { getObjectKeysSorted, captitalizeWords } from '../../helpers/helpers';
import './Settings.css';

const ORDER_KEY = 'order';

const SETTINGS = {
    safebrowsing: {
        enabled: false,
        title: 'use_adguard_browsing_sec',
        subtitle: 'use_adguard_browsing_sec_hint',
        [ORDER_KEY]: 0,
    },
    parental: {
        enabled: false,
        title: 'use_adguard_parental',
        subtitle: 'use_adguard_parental_hint',
        [ORDER_KEY]: 1,
    },
};

class Settings extends Component {
    props: any;

    componentDidMount() {
        this.props.initSettings(SETTINGS);
        this.props.getStatsConfig();
        this.props.getLogsConfig();
        this.props.getFilteringStatus();
    }

    renderSettings = (settings: any) => getObjectKeysSorted(SETTINGS, ORDER_KEY)
        .map((key) => {
            const setting = settings[key];
            const { enabled } = setting;
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            return <Checkbox
                {...setting}
                key={key}
                handleChange={() => this.props.toggleSetting(key, enabled)}
            />;
        });

    renderSafeSearch = () => {
        const { settings: { settingsList: { safesearch } } } = this.props;
        const { enabled } = safesearch || {};
        const searches = { ...(safesearch || {}) };
        delete searches.enabled;
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        return <>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Checkbox
                enabled={enabled}
                title='enforce_safe_search'
                subtitle='enforce_save_search_hint'
                // @ts-expect-error TS(7031): Binding element 'enabled' implicitly has an 'any' ... Remove this comment to see the full error message
                handleChange={({ target: { checked: enabled } }) => this.props.toggleSetting('safesearch', { ...safesearch, enabled })}
            />
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <div className='form__group--inner'>
                {Object.keys(searches).map((searchKey) => (
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Checkbox
                        key={searchKey}
                        enabled={searches[searchKey]}
                        title={captitalizeWords(searchKey)}
                        subtitle=''
                        disabled={!safesearch.enabled}
                        handleChange={({
                            target: { checked },
                        }: any) => this.props.toggleSetting('safesearch', { ...safesearch, [searchKey]: checked })}
                    />
                ))}
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </div>
        </>;
    };

    render() {
        const {
            settings,
            setStatsConfig,
            resetStats,
            stats,
            queryLogs,
            setLogsConfig,
            clearLogs,
            filtering,
            setFiltersConfig,
            t,
        } = this.props;

        const isDataReady = !settings.processing
            && !stats.processingGetConfig
            && !queryLogs.processingGetConfig;

        return (
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Fragment>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <PageTitle title={t('general_settings')} />
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                {!isDataReady && <Loading />}
                {isDataReady && (
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <div className="content">
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <div className="row">
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            <div className="col-md-12">
                                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                <Card bodyType="card-body box-body--settings">
                                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                                    <div className="form">
                                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                        <FiltersConfig
                                            initialValues={{
                                                interval: filtering.interval,
                                                enabled: filtering.enabled,
                                            }}
                                            processing={filtering.processingSetConfig}
                                            setFiltersConfig={setFiltersConfig}
                                        />
                                        {this.renderSettings(settings.settingsList)}
                                        {this.renderSafeSearch()}
                                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                                    </div>
                                </Card>
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            </div>
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            <div className="col-md-12">
                                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                <LogsConfig
                                    enabled={queryLogs.enabled}
                                    ignored={queryLogs.ignored}
                                    interval={queryLogs.interval}
                                    customInterval={queryLogs.customInterval}
                                    anonymize_client_ip={queryLogs.anonymize_client_ip}
                                    processing={queryLogs.processingSetConfig}
                                    processingClear={queryLogs.processingClear}
                                    setLogsConfig={setLogsConfig}
                                    clearLogs={clearLogs}
                                />
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            </div>
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            <div className="col-md-12">
                                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                <StatsConfig
                                    interval={stats.interval}
                                    customInterval={stats.customInterval}
                                    ignored={stats.ignored}
                                    enabled={stats.enabled}
                                    processing={stats.processingSetConfig}
                                    processingReset={stats.processingReset}
                                    setStatsConfig={setStatsConfig}
                                    resetStats={resetStats}
                                />
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            </div>
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        </div>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </div>
                )}
            </Fragment>
        );
    }
}

// @ts-expect-error TS(2339): Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
Settings.propTypes = {
    initSettings: PropTypes.func.isRequired,
    settings: PropTypes.object.isRequired,
    toggleSetting: PropTypes.func.isRequired,
    getStatsConfig: PropTypes.func.isRequired,
    setStatsConfig: PropTypes.func.isRequired,
    resetStats: PropTypes.func.isRequired,
    setFiltersConfig: PropTypes.func.isRequired,
    getFilteringStatus: PropTypes.func.isRequired,
    t: PropTypes.func.isRequired,
    getLogsConfig: PropTypes.func,
    setLogsConfig: PropTypes.func,
    clearLogs: PropTypes.func,
    stats: PropTypes.shape({
        processingGetConfig: PropTypes.bool,
        interval: PropTypes.number,
        customInterval: PropTypes.number,
        enabled: PropTypes.bool,
        ignored: PropTypes.array,
        processingSetConfig: PropTypes.bool,
        processingReset: PropTypes.bool,
    }),
    queryLogs: PropTypes.shape({
        enabled: PropTypes.bool,
        interval: PropTypes.number,
        customInterval: PropTypes.number,
        anonymize_client_ip: PropTypes.bool,
        processingSetConfig: PropTypes.bool,
        processingClear: PropTypes.bool,
        processingGetConfig: PropTypes.bool,
        ignored: PropTypes.array,
    }),
    filtering: PropTypes.shape({
        interval: PropTypes.number,
        enabled: PropTypes.bool,
        processingSetConfig: PropTypes.bool,
    }),
};

export default withTranslation()(Settings);
