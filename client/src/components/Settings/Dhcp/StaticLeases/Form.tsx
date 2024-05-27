// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'redu... Remove this comment to see the full error message
import { Field, reduxForm } from 'redux-form';
import { Trans, useTranslation } from 'react-i18next';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

// @ts-expect-error TS(6142): Module '../../../../helpers/form' was resolved to ... Remove this comment to see the full error message
import { renderInputField, normalizeMac } from '../../../../helpers/form';
import {
    validateIpv4,
    validateMac,
    validateRequiredValue,
    validateIpv4InCidr,
    validateIpGateway,
} from '../../../../helpers/validators';
import { FORM_NAME } from '../../../../helpers/constants';
// @ts-expect-error TS(6142): Module '../../../../actions' was resolved to '/Use... Remove this comment to see the full error message
import { toggleLeaseModal } from '../../../../actions';

const Form = ({
    handleSubmit,
    reset,
    pristine,
    submitting,
    processingAdding,
    cidr,
    isEdit,
}: any) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const dynamicLease = useSelector((store: any) => store.dhcp.leaseModalConfig, shallowEqual);

    const onClick = () => {
        reset();
        dispatch(toggleLeaseModal());
    };

    return (
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <form onSubmit={handleSubmit}>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <div className="modal-body">
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <div className="form__group">
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Field
                        id="mac"
                        name="mac"
                        component={renderInputField}
                        type="text"
                        className="form-control"
                        placeholder={t('form_enter_mac')}
                        normalize={normalizeMac}
                        validate={[validateRequiredValue, validateMac]}
                        disabled={isEdit}
                    />
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </div>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <div className="form__group">
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Field
                        id="ip"
                        name="ip"
                        component={renderInputField}
                        type="text"
                        className="form-control"
                        placeholder={t('form_enter_subnet_ip', { cidr })}
                        validate={[
                            validateRequiredValue,
                            validateIpv4,
                            validateIpv4InCidr,
                            validateIpGateway,
                        ]}
                    />
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </div>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <div className="form__group">
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Field
                        id="hostname"
                        name="hostname"
                        component={renderInputField}
                        type="text"
                        className="form-control"
                        placeholder={t('form_enter_hostname')}
                    />
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </div>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </div>

            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <div className="modal-footer">
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <div className="btn-list">
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <button
                        type="button"
                        className="btn btn-secondary btn-standard"
                        disabled={submitting}
                        onClick={onClick}
                    >
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <Trans>cancel_btn</Trans>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </button>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <button
                        type="submit"
                        className="btn btn-success btn-standard"
                        disabled={submitting || processingAdding || (pristine && !dynamicLease)}
                    >
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <Trans>save_btn</Trans>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </button>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </div>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </div>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </form>
    );
};

Form.propTypes = {
    initialValues: PropTypes.shape({
        mac: PropTypes.string.isRequired,
        ip: PropTypes.string.isRequired,
        hostname: PropTypes.string.isRequired,
        cidr: PropTypes.string.isRequired,
        gatewayIp: PropTypes.string,
    }),
    pristine: PropTypes.bool.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
    processingAdding: PropTypes.bool.isRequired,
    cidr: PropTypes.string.isRequired,
    isEdit: PropTypes.bool,
};

export default reduxForm({ form: FORM_NAME.LEASE })(Form);
