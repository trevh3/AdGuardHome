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

class LogsConfig extends Component {
    props: any;

    handleFormSubmit = (values: any) => {
        const { t, interval: prevInterval } = this.props;
        const { interval, customInterval, ...rest } = values;

        const newInterval = customInterval ? customInterval * HOUR : interval;

        const data = {
            ...rest,
            ignored: values.ignored ? values.ignored.split('\n') : [],
            interval: newInterval,
        };

        if (newInterval < prevInterval) {
            // eslint-disable-next-line no-alert
            if (window.confirm(t('query_log_retention_confirm'))) {
                this.props.setLogsConfig(data);
            }
        } else {
            this.props.setLogsConfig(data);
        }
    };

    handleClear = () => {
        const { t, clearLogs } = this.props;
        // eslint-disable-next-line no-alert
        if (window.confirm(t('query_log_confirm_clear'))) {
            clearLogs();
        }
    };

    render() {
        const {
            t,
            enabled,
            interval,
            processing,
            processingClear,
            anonymize_client_ip,
            ignored,
            customInterval,
        } = this.props;

        return (
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Card
                title={t('query_log_configuration')}
                bodyType="card-body box-body--settings"
                id="logs-config"
            >
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <div className="form">
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Form
                        initialValues={{
                            enabled,
                            interval,
                            customInterval,
                            anonymize_client_ip,
                            ignored: ignored?.join('\n'),
                        }}
                        onSubmit={this.handleFormSubmit}
                        processing={processing}
                        processingClear={processingClear}
                        handleClear={this.handleClear}
                    />
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </div>
            </Card>
        );
    }
}

// @ts-expect-error TS(2339): Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
LogsConfig.propTypes = {
    interval: PropTypes.number.isRequired,
    customInterval: PropTypes.number,
    enabled: PropTypes.bool.isRequired,
    anonymize_client_ip: PropTypes.bool.isRequired,
    processing: PropTypes.bool.isRequired,
    ignored: PropTypes.array.isRequired,
    processingClear: PropTypes.bool.isRequired,
    setLogsConfig: PropTypes.func.isRequired,
    clearLogs: PropTypes.func.isRequired,
    t: PropTypes.func.isRequired,
};

export default withTranslation()(LogsConfig);
