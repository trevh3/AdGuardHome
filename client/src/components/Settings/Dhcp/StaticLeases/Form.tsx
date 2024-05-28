import React from 'react';

import { Field, reduxForm } from 'redux-form';
import { Trans, useTranslation } from 'react-i18next';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { renderInputField, normalizeMac } from '../../../../helpers/form';
import {
    validateIpv4,
    validateMac,
    validateRequiredValue,
    validateIpv4InCidr,
    validateIpGateway,
} from '../../../../helpers/validators';
import { FORM_NAME } from '../../../../helpers/constants';

import { toggleLeaseModal } from '../../../../actions';

interface FormProps {
    initialValues?: {
        mac: string;
        ip: string;
        hostname: string;
        cidr: string;
        gatewayIp?: string;
    };
    pristine: boolean;
    handleSubmit: (...args: unknown[]) => unknown;
    reset: (...args: unknown[]) => unknown;
    submitting: boolean;
    processingAdding: boolean;
    cidr: string;
    isEdit?: boolean;
}

const Form = ({ handleSubmit, reset, pristine, submitting, processingAdding, cidr, isEdit }: FormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const dynamicLease = useSelector((store) => store.dhcp.leaseModalConfig, shallowEqual);

    const onClick = () => {
        reset();
        dispatch(toggleLeaseModal());
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="modal-body">
                <div className="form__group">
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
                </div>

                <div className="form__group">
                    <Field
                        id="ip"
                        name="ip"
                        component={renderInputField}
                        type="text"
                        className="form-control"
                        placeholder={t('form_enter_subnet_ip', { cidr })}
                        validate={[validateRequiredValue, validateIpv4, validateIpv4InCidr, validateIpGateway]}
                    />
                </div>

                <div className="form__group">
                    <Field
                        id="hostname"
                        name="hostname"
                        component={renderInputField}
                        type="text"
                        className="form-control"
                        placeholder={t('form_enter_hostname')}
                    />
                </div>
            </div>

            <div className="modal-footer">
                <div className="btn-list">
                    <button
                        type="button"
                        className="btn btn-secondary btn-standard"
                        disabled={submitting}
                        onClick={onClick}>
                        <Trans>cancel_btn</Trans>
                    </button>

                    <button
                        type="submit"
                        className="btn btn-success btn-standard"
                        disabled={submitting || processingAdding || (pristine && !dynamicLease)}>
                        <Trans>save_btn</Trans>
                    </button>
                </div>
            </div>
        </form>
    );
};

export default reduxForm({ form: FORM_NAME.LEASE })(Form);
