// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React, { Component } from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

// @ts-expect-error TS(6142): Module '../../ui/Card' was resolved to '/Users/igo... Remove this comment to see the full error message
import Card from '../../ui/Card';
// @ts-expect-error TS(6142): Module './Form' was resolved to '/Users/igorlobano... Remove this comment to see the full error message
import Form from './Form';
import { HOUR } from '../../../helpers/constants';

class StatsConfig extends Component {
    props: any;

    handleFormSubmit = ({
        enabled,
        interval,
        ignored,
        customInterval,
    }: any) => {
        const { t, interval: prevInterval } = this.props;
        const newInterval = customInterval ? customInterval * HOUR : interval;

        const config = {
            enabled,
            interval: newInterval,
            ignored: ignored ? ignored.split('\n') : [],
        };

        if (config.interval < prevInterval) {
            if (window.confirm(t('statistics_retention_confirm'))) {
                this.props.setStatsConfig(config);
            }
        } else {
            this.props.setStatsConfig(config);
        }
    };

    handleReset = () => {
        const { t, resetStats } = this.props;
        // eslint-disable-next-line no-alert
        if (window.confirm(t('statistics_clear_confirm'))) {
            resetStats();
        }
    };

    render() {
        const {
            t,
            interval,
            customInterval,
            processing,
            processingReset,
            ignored,
            enabled,
        } = this.props;

        return (
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Card
                title={t('statistics_configuration')}
                bodyType="card-body box-body--settings"
                id="stats-config"
            >
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <div className="form">
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Form
                        initialValues={{
                            interval,
                            customInterval,
                            enabled,
                            ignored: ignored.join('\n'),
                        }}
                        onSubmit={this.handleFormSubmit}
                        processing={processing}
                        processingReset={processingReset}
                        handleReset={this.handleReset}
                    />
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </div>
            </Card>
        );
    }
}

// @ts-expect-error TS(2339): Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
StatsConfig.propTypes = {
    interval: PropTypes.number.isRequired,
    customInterval: PropTypes.number,
    ignored: PropTypes.array.isRequired,
    enabled: PropTypes.bool.isRequired,
    processing: PropTypes.bool.isRequired,
    processingReset: PropTypes.bool.isRequired,
    setStatsConfig: PropTypes.func.isRequired,
    resetStats: PropTypes.func.isRequired,
    t: PropTypes.func.isRequired,
};

export default withTranslation()(StatsConfig);
