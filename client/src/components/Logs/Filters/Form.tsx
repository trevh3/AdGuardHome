// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React, { useEffect } from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'redu... Remove this comment to see the full error message
import { Field, reduxForm } from 'redux-form';
import { useTranslation } from 'react-i18next';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { useHistory } from 'react-router-dom';
import classNames from 'classnames';
import {
    DEBOUNCE_FILTER_TIMEOUT,
    DEFAULT_LOGS_FILTER,
    FORM_NAME,
    RESPONSE_FILTER,
    RESPONSE_FILTER_QUERIES,
} from '../../../helpers/constants';
import { setLogsFilter } from '../../../actions/queryLogs';
import useDebounce from '../../../helpers/useDebounce';
// @ts-expect-error TS(6142): Module '../../../helpers/helpers' was resolved to ... Remove this comment to see the full error message
import { createOnBlurHandler, getLogsUrlParams } from '../../../helpers/helpers';
// @ts-expect-error TS(6142): Module '../../ui/Tooltip' was resolved to '/Users/... Remove this comment to see the full error message
import Tooltip from '../../ui/Tooltip';

const renderFilterField = ({
    input,
    id,
    className,
    placeholder,
    type,
    disabled,
    autoComplete,
    tooltip,
    meta: { touched, error },
    onClearInputClick,
    onKeyDown,
    normalizeOnBlur,
}: any) => {
    const onBlur = (event: any) => createOnBlurHandler(event, input, normalizeOnBlur);

    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    return <>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <div className="input-group-search input-group-search__icon--magnifier">
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <svg className="icons icon--24 icon--gray">
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <use xlinkHref="#magnifier" />
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </svg>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </div>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <input
            {...input}
            id={id}
            placeholder={placeholder}
            type={type}
            className={className}
            disabled={disabled}
            autoComplete={autoComplete}
            aria-label={placeholder}
            onKeyDown={onKeyDown}
            onBlur={onBlur}
        />
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <div
            className={classNames('input-group-search input-group-search__icon--cross', { invisible: input.value.length < 1 })}>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <svg className="icons icon--20 icon--gray" onClick={onClearInputClick}>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <use xlinkHref="#cross" />
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </svg>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </div>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <span className="input-group-search input-group-search__icon--tooltip">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Tooltip content={tooltip} className="tooltip-container">
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <svg className="icons icon--20 icon--gray">
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <use xlinkHref="#question" />
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </svg>
            </Tooltip>
    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    </span>
        {!disabled
        && touched
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        && (error && <span className="form__message form__message--error">{error}</span>)}
    </>;
};

renderFilterField.propTypes = {
    input: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    onClearInputClick: PropTypes.func.isRequired,
    className: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    disabled: PropTypes.string,
    autoComplete: PropTypes.string,
    tooltip: PropTypes.string,
    onKeyDown: PropTypes.func,
    normalizeOnBlur: PropTypes.func,
    meta: PropTypes.shape({
        touched: PropTypes.bool,
        error: PropTypes.object,
    }).isRequired,
};

const FORM_NAMES = {
    search: 'search',
    response_status: 'response_status',
};

const Form = (props: any) => {
    const {
        className = '',
        responseStatusClass,
        setIsLoading,
        change,
    } = props;

    const { t } = useTranslation();
    const dispatch = useDispatch();
    const history = useHistory();

    const {
        response_status, search,
    } = useSelector((state: any) => state?.form[FORM_NAME.LOGS_FILTER].values, shallowEqual);

    const [
        debouncedSearch,
        setDebouncedSearch,
    ] = useDebounce(search.trim(), DEBOUNCE_FILTER_TIMEOUT);

    useEffect(() => {
        dispatch(setLogsFilter({
            response_status,
            search: debouncedSearch,
        }));

        history.replace(`${getLogsUrlParams(debouncedSearch, response_status)}`);
    }, [response_status, debouncedSearch]);

    if (response_status && !(response_status in RESPONSE_FILTER_QUERIES)) {
        // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
        change(FORM_NAMES.response_status, DEFAULT_LOGS_FILTER[FORM_NAMES.response_status]);
    }

    const onInputClear = async () => {
        setIsLoading(true);
        // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
        change(FORM_NAMES.search, DEFAULT_LOGS_FILTER[FORM_NAMES.search]);
        setIsLoading(false);
    };

    const onEnterPress = (e: any) => {
        if (e.key === 'Enter') {
            setDebouncedSearch(search);
        }
    };

    const normalizeOnBlur = (data: any) => data.trim();

    return (
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <form
            className="d-flex flex-wrap form-control--container"
            onSubmit={(e: any) => {
                e.preventDefault();
            }}
        >
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <div className="field__search">
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Field
                    id={FORM_NAMES.search}
                    name={FORM_NAMES.search}
                    component={renderFilterField}
                    type="text"
                    className={classNames('form-control form-control--search form-control--transparent', className)}
                    placeholder={t('domain_or_client')}
                    tooltip={t('query_log_strict_search')}
                    onClearInputClick={onInputClear}
                    onKeyDown={onEnterPress}
                    normalizeOnBlur={normalizeOnBlur}
                />
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </div>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <div className="field__select">
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Field
                    name={FORM_NAMES.response_status}
                    component="select"
                    className={classNames('form-control custom-select custom-select--logs custom-select__arrow--left form-control--transparent', responseStatusClass)}
                >
                    {Object.values(RESPONSE_FILTER)
                        .map(({
                            // @ts-expect-error TS(2339): Property 'disabled' does not exist on type '{ QUER... Remove this comment to see the full error message
                            QUERY, LABEL, disabled,
                        }) => (
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            <option
                                key={LABEL}
                                value={QUERY}
                                disabled={disabled}
                            >
                                {t(LABEL)}
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            </option>
                        ))
                    }
                </Field>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </div>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </form>
    );
};

Form.propTypes = {
    className: PropTypes.string,
    responseStatusClass: PropTypes.string,
    change: PropTypes.func.isRequired,
    setIsLoading: PropTypes.func.isRequired,
};

export default reduxForm({
    form: FORM_NAME.LOGS_FILTER,
    enableReinitialize: true,
})(Form);
