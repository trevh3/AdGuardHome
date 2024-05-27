// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React, { useRef } from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { useDispatch, useSelector } from 'react-redux';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'redu... Remove this comment to see the full error message
import { Field, reduxForm } from 'redux-form';
import { Trans, useTranslation } from 'react-i18next';
import classnames from 'classnames';
// @ts-expect-error TS(6142): Module './Examples' was resolved to '/Users/igorlo... Remove this comment to see the full error message
import Examples from './Examples';
// @ts-expect-error TS(6142): Module '../../../../helpers/form' was resolved to ... Remove this comment to see the full error message
import { renderRadioField, renderTextareaField, CheckboxField } from '../../../../helpers/form';
import {
    DNS_REQUEST_OPTIONS,
    FORM_NAME,
    UPSTREAM_CONFIGURATION_WIKI_LINK,
} from '../../../../helpers/constants';
// @ts-expect-error TS(6142): Module '../../../../actions' was resolved to '/Use... Remove this comment to see the full error message
import { testUpstreamWithFormValues } from '../../../../actions';
// @ts-expect-error TS(6142): Module '../../../../helpers/helpers' was resolved ... Remove this comment to see the full error message
import { removeEmptyLines, trimLinesAndRemoveEmpty } from '../../../../helpers/helpers';
// @ts-expect-error TS(6142): Module '../../../../helpers/highlightTextareaComme... Remove this comment to see the full error message
import { getTextareaCommentsHighlight, syncScroll } from '../../../../helpers/highlightTextareaComments';
import '../../../ui/texareaCommentsHighlight.css';

const UPSTREAM_DNS_NAME = 'upstream_dns';
const UPSTREAM_MODE_NAME = 'upstream_mode';

const renderField = ({
    name,
    component,
    type,
    className,
    placeholder,
    subtitle,
    value,
    normalizeOnBlur,
    containerClass,
    onScroll,
}: any) => {
    const { t } = useTranslation();
    const processingTestUpstream = useSelector((state: any) => state.settings.processingTestUpstream);
    const processingSetConfig = useSelector((state: any) => state.dnsConfig.processingSetConfig);

    return (
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <div
            key={placeholder}
            className={classnames('col-12 mb-4', containerClass)}
        >
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Field
                id={name}
                value={value}
                name={name}
                component={component}
                type={type}
                className={className}
                placeholder={t(placeholder)}
                subtitle={t(subtitle)}
                disabled={processingSetConfig || processingTestUpstream}
                normalizeOnBlur={normalizeOnBlur}
                onScroll={onScroll}
            />
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </div>
    );
};

renderField.propTypes = {
    name: PropTypes.string.isRequired,
    component: PropTypes.element.isRequired,
    type: PropTypes.string.isRequired,
    className: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    value: PropTypes.string,
    normalizeOnBlur: PropTypes.func,
    containerClass: PropTypes.string,
    onScroll: PropTypes.func,
};

const renderTextareaWithHighlightField = (props: any) => {
    const upstream_dns = useSelector((store: any) => store.form[FORM_NAME.UPSTREAM].values.upstream_dns);
    const upstream_dns_file = useSelector((state: any) => state.dnsConfig.upstream_dns_file);
    const ref = useRef(null);

    const onScroll = (e: any) => syncScroll(e, ref);

    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    return <>
        {renderTextareaField({
            ...props,
            disabled: !!upstream_dns_file,
            onScroll,
            normalizeOnBlur: trimLinesAndRemoveEmpty,
        })}
        // @ts-expect-error TS(2554): Expected 4 arguments, but got 2.
        {getTextareaCommentsHighlight(ref, upstream_dns)}
    </>;
};

renderTextareaWithHighlightField.propTypes = {
    className: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    id: PropTypes.string.isRequired,
    input: PropTypes.object,
    meta: PropTypes.object,
    normalizeOnBlur: PropTypes.func,
    onScroll: PropTypes.func,
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
};

const INPUT_FIELDS = [
    {
        name: UPSTREAM_MODE_NAME,
        type: 'radio',
        value: DNS_REQUEST_OPTIONS.LOAD_BALANCING,
        component: renderRadioField,
        subtitle: 'load_balancing_desc',
        placeholder: 'load_balancing',
    },
    {
        name: UPSTREAM_MODE_NAME,
        type: 'radio',
        value: DNS_REQUEST_OPTIONS.PARALLEL,
        component: renderRadioField,
        subtitle: 'upstream_parallel',
        placeholder: 'parallel_requests',
    },
    {
        name: UPSTREAM_MODE_NAME,
        type: 'radio',
        value: DNS_REQUEST_OPTIONS.FASTEST_ADDR,
        component: renderRadioField,
        subtitle: 'fastest_addr_desc',
        placeholder: 'fastest_addr',
    },
];

const Form = ({
    submitting,
    invalid,
    handleSubmit,
}: any) => {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const upstream_dns = useSelector((store: any) => store.form[FORM_NAME.UPSTREAM].values.upstream_dns);
    const processingTestUpstream = useSelector((state: any) => state.settings.processingTestUpstream);
    const processingSetConfig = useSelector((state: any) => state.dnsConfig.processingSetConfig);
    const defaultLocalPtrUpstreams = useSelector(
        (state: any) => state.dnsConfig.default_local_ptr_upstreams,
    );

    const handleUpstreamTest = () => dispatch(testUpstreamWithFormValues());

    const testButtonClass = classnames('btn btn-primary btn-standard mr-2', {
        'btn-loading': processingTestUpstream,
    });

    const components = {
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        a: <a href={UPSTREAM_CONFIGURATION_WIKI_LINK} target="_blank"
              rel="noopener noreferrer" />,
    };

    return (
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <form onSubmit={handleSubmit} className="form--upstream">
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <div className="row">
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <label className="col form__label" htmlFor={UPSTREAM_DNS_NAME}>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Trans components={components}>upstream_dns_help</Trans>
                    {' '}
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Trans components={[
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <a
                            href="https://link.adtidy.org/forward.html?action=dns_kb_providers&from=ui&app=home"
                            target="_blank"
                            rel="noopener noreferrer"
                            key="0"
                        >
                            DNS providers
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        </a>,
                    ]}>
                        dns_providers
                    </Trans>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </label>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <div className="col-12 mb-4">
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <div className="text-edit-container">
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <Field
                            id={UPSTREAM_DNS_NAME}
                            name={UPSTREAM_DNS_NAME}
                            component={renderTextareaWithHighlightField}
                            type="text"
                            className="form-control form-control--textarea font-monospace text-input"
                            placeholder={t('upstream_dns')}
                            disabled={processingSetConfig || processingTestUpstream}
                            normalizeOnBlur={removeEmptyLines}
                        />
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </div>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </div>
                {INPUT_FIELDS.map(renderField)}
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <div className="col-12">
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Examples />
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <hr />
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </div>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <div className="col-12">
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <label
                        className="form__label form__label--with-desc"
                        htmlFor="fallback_dns"
                    >
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <Trans>fallback_dns_title</Trans>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </label>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <div className="form__desc form__desc--top">
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <Trans>fallback_dns_desc</Trans>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </div>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Field
                        id="fallback_dns"
                        name="fallback_dns"
                        component={renderTextareaField}
                        type="text"
                        className="form-control form-control--textarea form-control--textarea-small font-monospace"
                        placeholder={t('fallback_dns_placeholder')}
                        disabled={processingSetConfig}
                        normalizeOnBlur={removeEmptyLines}
                    />
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </div>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <div className="col-12">
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <hr />
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </div>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <div className="col-12 mb-2">
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <label
                        className="form__label form__label--with-desc"
                        htmlFor="bootstrap_dns"
                    >
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <Trans>bootstrap_dns</Trans>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </label>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <div className="form__desc form__desc--top">
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <Trans>bootstrap_dns_desc</Trans>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </div>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Field
                        id="bootstrap_dns"
                        name="bootstrap_dns"
                        component={renderTextareaField}
                        type="text"
                        className="form-control form-control--textarea form-control--textarea-small font-monospace"
                        placeholder={t('bootstrap_dns')}
                        disabled={processingSetConfig}
                        normalizeOnBlur={removeEmptyLines}
                    />
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </div>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <div className="col-12">
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <hr />
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </div>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <div className="col-12">
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <label
                        className="form__label form__label--with-desc"
                        htmlFor="local_ptr"
                    >
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <Trans>local_ptr_title</Trans>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </label>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <div className="form__desc form__desc--top">
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <Trans>local_ptr_desc</Trans>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </div>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <div className="form__desc form__desc--top">
                        {/** TODO: Add internazionalization for "" */}
                        {defaultLocalPtrUpstreams?.length > 0 ? (
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <Trans values={{ ip: defaultLocalPtrUpstreams.map((s: any) => `"${s}"`).join(', ') }}>local_ptr_default_resolver</Trans>
                        ) : (
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <Trans>local_ptr_no_default_resolver</Trans>
                        )}
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </div>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Field
                        id="local_ptr_upstreams"
                        name="local_ptr_upstreams"
                        component={renderTextareaField}
                        type="text"
                        className="form-control form-control--textarea form-control--textarea-small font-monospace"
                        placeholder={t('local_ptr_placeholder')}
                        disabled={processingSetConfig}
                        normalizeOnBlur={removeEmptyLines}
                    />
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <div className="mt-4">
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <Field
                            name="use_private_ptr_resolvers"
                            type="checkbox"
                            component={CheckboxField}
                            placeholder={t('use_private_ptr_resolvers_title')}
                            subtitle={t('use_private_ptr_resolvers_desc')}
                            disabled={processingSetConfig}
                        />
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </div>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </div>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <div className="col-12">
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <hr />
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </div>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <div className="col-12 mb-4">
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Field
                        name="resolve_clients"
                        type="checkbox"
                        component={CheckboxField}
                        placeholder={t('resolve_clients_title')}
                        subtitle={t('resolve_clients_desc')}
                        disabled={processingSetConfig}
                    />
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </div>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </div>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <div className="card-actions">
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <div className="btn-list">
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <button
                        type="button"
                        className={testButtonClass}
                        onClick={handleUpstreamTest}
                        disabled={!upstream_dns || processingTestUpstream}
                    >
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <Trans>test_upstream_btn</Trans>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </button>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <button
                        type="submit"
                        className="btn btn-success btn-standard"
                        disabled={
                            submitting || invalid || processingSetConfig || processingTestUpstream
                        }
                    >
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <Trans>apply_btn</Trans>
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
    handleSubmit: PropTypes.func,
    submitting: PropTypes.bool,
    invalid: PropTypes.bool,
    initialValues: PropTypes.object,
    upstream_dns: PropTypes.string,
    fallback_dns: PropTypes.string,
    bootstrap_dns: PropTypes.string,
};

export default reduxForm({ form: FORM_NAME.UPSTREAM })(Form);
