// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React, { Fragment } from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';
import { Trans } from 'react-i18next';
import cn from 'classnames';

// @ts-expect-error TS(6142): Module './helpers' was resolved to '/Users/igorlob... Remove this comment to see the full error message
import { createOnBlurHandler } from './helpers';
import { R_MAC_WITHOUT_COLON, R_UNIX_ABSOLUTE_PATH, R_WIN_ABSOLUTE_PATH } from './constants';

export const renderField = (props: any, elementType: any) => {
    const {
        input, id, className, placeholder, type, disabled, normalizeOnBlur, onScroll,
        autoComplete, meta: { touched, error }, min, max, step,
    } = props;

    const onBlur = (event: any) => createOnBlurHandler(event, input, normalizeOnBlur);

    const element = React.createElement(elementType, {
        ...input,
        id,
        className,
        placeholder,
        autoComplete,
        disabled,
        type,
        min,
        max,
        step,
        onBlur,
        onScroll,
    });

    return (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <>
            {element}
            {!disabled && touched && error
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            && <span className="form__message form__message--error"><Trans>{error}</Trans></span>}
        </>
    );
};

renderField.propTypes = {
    id: PropTypes.string.isRequired,
    input: PropTypes.object.isRequired,
    className: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    disabled: PropTypes.bool,
    autoComplete: PropTypes.bool,
    normalizeOnBlur: PropTypes.func,
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    onScroll: PropTypes.func,
    meta: PropTypes.shape({
        touched: PropTypes.bool,
        error: PropTypes.string,
    }).isRequired,
};

export const renderTextareaField = (props: any) => renderField(props, 'textarea');

export const renderInputField = (props: any) => renderField(props, 'input');

export const renderGroupField = ({
    input,
    id,
    className,
    placeholder,
    type,
    disabled,
    autoComplete,
    isActionAvailable,
    removeField,
    meta: { touched, error },
    normalizeOnBlur,
}: any) => {
    const onBlur = (event: any) => createOnBlurHandler(event, input, normalizeOnBlur);

    return (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <div className="input-group">
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <input
                    {...input}
                    id={id}
                    placeholder={placeholder}
                    type={type}
                    className={className}
                    disabled={disabled}
                    autoComplete={autoComplete}
                    onBlur={onBlur}
                />
                {isActionAvailable
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                && <span className="input-group-append">
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <button
                            type="button"
                            className="btn btn-secondary btn-icon btn-icon--green"
                            onClick={removeField}
                        >
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            <svg className="icon icon--24">
                                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                                <use xlinkHref="#cross" />
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            </svg>
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        </button>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </span>
                }
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </div>
            {!disabled && touched && error
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            && <span className="form__message form__message--error"><Trans>{error}</Trans></span>}
        </>
    );
};

renderGroupField.propTypes = {
    input: PropTypes.object.isRequired,
    id: PropTypes.string,
    className: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    disabled: PropTypes.bool,
    autoComplete: PropTypes.bool,
    isActionAvailable: PropTypes.bool,
    removeField: PropTypes.func,
    meta: PropTypes.shape({
        touched: PropTypes.bool,
        error: PropTypes.string,
    }).isRequired,
    normalizeOnBlur: PropTypes.func,
};

export const renderRadioField = ({
    input,
    placeholder,
    subtitle,
    disabled,
    meta: { touched, error },
// @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
}: any) => <Fragment>
    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    <label className="custom-control custom-radio">
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <input {...input} type="radio" className="custom-control-input" disabled={disabled} />
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <span className="custom-control-label">{placeholder}</span>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        {subtitle && <span
            className="checkbox__label-subtitle"
            dangerouslySetInnerHTML={{ __html: subtitle }}
        />}
    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    </label>
    {!disabled
    && touched
    && error
    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    && <span className="form__message form__message--error"><Trans>{error}</Trans></span>}
</Fragment>;

renderRadioField.propTypes = {
    input: PropTypes.object.isRequired,
    placeholder: PropTypes.string,
    subtitle: PropTypes.string,
    disabled: PropTypes.bool,
    meta: PropTypes.shape({
        touched: PropTypes.bool,
        error: PropTypes.string,
    }).isRequired,
};

export const CheckboxField = ({
    input,
    placeholder,
    subtitle,
    disabled,
    onClick,
    modifier = 'checkbox--form',
    meta: { touched, error },
// @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
}: any) => <>
    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    <label className={`checkbox ${modifier}`} onClick={onClick}>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <span className="checkbox__marker" />
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <input {...input} type="checkbox" className="checkbox__input" disabled={disabled} />
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <span className="checkbox__label">
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <span className="checkbox__label-text checkbox__label-text--long">
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <span className="checkbox__label-title">{placeholder}</span>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                {subtitle && <span className="checkbox__label-subtitle">{subtitle}</span>}
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </span>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </span>
    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    </label>
    {!disabled
    && touched
    && error
    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    && <div className="form__message form__message--error mt-1"><Trans>{error}</Trans></div>}
</>;

CheckboxField.propTypes = {
    input: PropTypes.object.isRequired,
    placeholder: PropTypes.string,
    subtitle: PropTypes.node,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    modifier: PropTypes.string,
    checked: PropTypes.bool,
    meta: PropTypes.shape({
        touched: PropTypes.bool,
        error: PropTypes.string,
    }).isRequired,
};

export const renderSelectField = ({
    input,
    meta: { touched, error },
    children,
    label,
}: any) => {
    const showWarning = touched && error;

    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    return <>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        {label && <label><Trans>{label}</Trans></label>}
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <select {...input} className='form-control custom-select'>{children}</select>
        {showWarning
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        && <span className="form__message form__message--error form__message--left-pad"><Trans>{error}</Trans></span>}
    </>;
};

renderSelectField.propTypes = {
    input: PropTypes.object.isRequired,
    disabled: PropTypes.bool,
    label: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]).isRequired,
    meta: PropTypes.shape({
        touched: PropTypes.bool,
        error: PropTypes.string,
    }).isRequired,
};

export const renderServiceField = ({
    input,
    placeholder,
    disabled,
    modifier,
    icon,
    meta: { touched, error },
}: any) => (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <label className={cn('service custom-switch', { [modifier]: modifier })}>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <input
                {...input}
                type="checkbox"
                className="custom-switch-input"
                value={placeholder.toLowerCase()}
                disabled={disabled}
            />
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <span className="service__switch custom-switch-indicator"></span>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <span className="service__text" title={placeholder}>
                {placeholder}
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </span>
            {icon && (
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <div
                    dangerouslySetInnerHTML={{ __html: window.atob(icon) }}
                    className="service__icon"
                />
            )}
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </label>
        {!disabled && touched && error && (
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <span className="form__message form__message--error">
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Trans>{error}</Trans>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </span>
        )}
    </>
);

renderServiceField.propTypes = {
    input: PropTypes.object.isRequired,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    modifier: PropTypes.string,
    icon: PropTypes.string,
    meta: PropTypes.shape({
        touched: PropTypes.bool,
        error: PropTypes.string,
    }).isRequired,
};

/**
 *
 * @param {string} ip
 * @returns {*}
 */
export const ip4ToInt = (ip: any) => {
    const intIp = ip.split('.').reduce((int: any, oct: any) => (int * 256) + parseInt(oct, 10), 0);
    return Number.isNaN(intIp) ? 0 : intIp;
};

/**
 * @param value {string}
 * @returns {*|number}
 */
export const toNumber = (value: any) => value && parseInt(value, 10);

/**
 * @param value {string}
 * @returns {*|number}
 */
// @ts-expect-error TS(2554): Expected 1 arguments, but got 2.
export const toFloatNumber = (value: any) => value && parseFloat(value, 10);

/**
 * @param value {string}
 * @returns {boolean}
 */
export const isValidAbsolutePath = (value: any) => R_WIN_ABSOLUTE_PATH.test(value)
    || R_UNIX_ABSOLUTE_PATH.test(value);

/**
 * @param value {string}
 * @returns {*|string}
 */
export const normalizeMac = (value: any) => {
    if (value && R_MAC_WITHOUT_COLON.test(value)) {
        return value.match(/.{2}/g).join(':');
    }

    return value;
};
