// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { connect } from 'react-redux';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'redu... Remove this comment to see the full error message
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { Trans, withTranslation } from 'react-i18next';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'loda... Remove this comment to see the full error message
import flow from 'lodash/flow';
// @ts-expect-error TS(6142): Module '../../../../helpers/form' was resolved to ... Remove this comment to see the full error message
import { renderTextareaField } from '../../../../helpers/form';
import {
    trimMultilineString,
    removeEmptyLines,
// @ts-expect-error TS(6142): Module '../../../../helpers/helpers' was resolved ... Remove this comment to see the full error message
} from '../../../../helpers/helpers';
import { CLIENT_ID_LINK, FORM_NAME } from '../../../../helpers/constants';

const fields = [
    {
        id: 'allowed_clients',
        title: 'access_allowed_title',
        subtitle: 'access_allowed_desc',
        normalizeOnBlur: removeEmptyLines,
    },
    {
        id: 'disallowed_clients',
        title: 'access_disallowed_title',
        subtitle: 'access_disallowed_desc',
        normalizeOnBlur: trimMultilineString,
    },
    {
        id: 'blocked_hosts',
        title: 'access_blocked_title',
        subtitle: 'access_blocked_desc',
        normalizeOnBlur: removeEmptyLines,
    },
];

let Form = (props: any) => {
    const {
        allowedClients, handleSubmit, submitting, invalid, processingSet,
    } = props;

    const renderField = ({
        id,
        title,
        subtitle,
        disabled = false,
        processingSet,
        normalizeOnBlur,
    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    }: any) => <div key={id} className="form__group mb-5">
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <label className="form__label form__label--with-desc" htmlFor={id}>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Trans>{title}</Trans>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            {disabled && <>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <span> </span>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                (<Trans>disabled</Trans>)
            </>}
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </label>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <div className="form__desc form__desc--top">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Trans components={{ a: <a href={CLIENT_ID_LINK} target="_blank" rel="noopener noreferrer">text</a> }}>{subtitle}</Trans>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </div>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Field
            id={id}
            name={id}
            component={renderTextareaField}
            type="text"
            className="form-control form-control--textarea font-monospace"
            disabled={disabled || processingSet}
            normalizeOnBlur={normalizeOnBlur}
        />
    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    </div>;

    renderField.propTypes = {
        id: PropTypes.string,
        title: PropTypes.string,
        subtitle: PropTypes.string,
        disabled: PropTypes.bool,
        normalizeOnBlur: PropTypes.func,
    };

    return (
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <form onSubmit={handleSubmit}>
            {
                fields.map((f) => {
                    const props = { ...f };
                    if (allowedClients && f.id === 'disallowed_clients') {
                        // @ts-expect-error TS(2339): Property 'disabled' does not exist on type '{ id: ... Remove this comment to see the full error message
                        props.disabled = true;
                    }
                    return renderField(props);
                })
            }
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <div className="card-actions">
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <div className="btn-list">
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <button
                        type="submit"
                        className="btn btn-success btn-standard"
                        disabled={submitting || invalid || processingSet}
                    >
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <Trans>save_config</Trans>
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

// @ts-expect-error TS(2339): Property 'propTypes' does not exist on type '(prop... Remove this comment to see the full error message
Form.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
    invalid: PropTypes.bool.isRequired,
    initialValues: PropTypes.object.isRequired,
    processingSet: PropTypes.bool.isRequired,
    t: PropTypes.func.isRequired,
    textarea: PropTypes.bool,
    allowedClients: PropTypes.string,
};

const selector = formValueSelector(FORM_NAME.ACCESS);

Form = connect((state: any) => {
    const allowedClients = selector(state, 'allowed_clients');
    return {
        allowedClients,
    };
})(Form);

export default flow([
    withTranslation(),
    reduxForm({
        form: FORM_NAME.ACCESS,
    }),
])(Form);
