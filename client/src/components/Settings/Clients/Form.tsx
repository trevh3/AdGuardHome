// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React, { useState } from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { connect, useSelector } from 'react-redux';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';
import {
    Field, FieldArray, reduxForm, formValueSelector,
// @ts-expect-error TS(7016): Could not find a declaration file for module 'redu... Remove this comment to see the full error message
} from 'redux-form';
import { Trans, withTranslation } from 'react-i18next';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'loda... Remove this comment to see the full error message
import flow from 'lodash/flow';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import Select from 'react-select';

import i18n from '../../../i18n';
// @ts-expect-error TS(6142): Module '../../ui/Tabs' was resolved to '/Users/igo... Remove this comment to see the full error message
import Tabs from '../../ui/Tabs';
// @ts-expect-error TS(6142): Module '../Dns/Upstream/Examples' was resolved to ... Remove this comment to see the full error message
import Examples from '../Dns/Upstream/Examples';
// @ts-expect-error TS(6142): Module '../../Filters/Services/ScheduleForm' was r... Remove this comment to see the full error message
import { ScheduleForm } from '../../Filters/Services/ScheduleForm';
import {
    toggleAllServices,
    trimLinesAndRemoveEmpty,
    captitalizeWords,
// @ts-expect-error TS(6142): Module '../../../helpers/helpers' was resolved to ... Remove this comment to see the full error message
} from '../../../helpers/helpers';
import {
    toNumber,
    renderInputField,
    renderGroupField,
    CheckboxField,
    renderServiceField,
    renderTextareaField,
// @ts-expect-error TS(6142): Module '../../../helpers/form' was resolved to '/U... Remove this comment to see the full error message
} from '../../../helpers/form';
import { validateClientId, validateRequiredValue } from '../../../helpers/validators';
import { CLIENT_ID_LINK, FORM_NAME, UINT32_RANGE } from '../../../helpers/constants';
import './Service.css';

const settingsCheckboxes = [
    {
        name: 'use_global_settings',
        placeholder: 'client_global_settings',
    },
    {
        name: 'filtering_enabled',
        placeholder: 'block_domain_use_filters_and_hosts',
    },
    {
        name: 'safebrowsing_enabled',
        placeholder: 'use_adguard_browsing_sec',
    },
    {
        name: 'parental_enabled',
        placeholder: 'use_adguard_parental',
    },
];

const logAndStatsCheckboxes = [
    {
        name: 'ignore_querylog',
        placeholder: 'ignore_query_log',
    },
    {
        name: 'ignore_statistics',
        placeholder: 'ignore_statistics',
    },
];
const validate = (values: any) => {
    const errors = {};
    const { name, ids } = values;
    // @ts-expect-error TS(2339): Property 'name' does not exist on type '{}'.
    errors.name = validateRequiredValue(name);

    if (ids && ids.length) {
        const idArrayErrors: any = [];
        ids.forEach((id: any, idx: any) => {
            idArrayErrors[idx] = validateRequiredValue(id) || validateClientId(id);
        });

        if (idArrayErrors.length) {
            // @ts-expect-error TS(2339): Property 'ids' does not exist on type '{}'.
            errors.ids = idArrayErrors;
        }
    }
    return errors;
};

const renderFieldsWrapper = (placeholder: any, buttonTitle: any) => (function cell(row: any) {
    const {
        fields,
    } = row;
    return (
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <div className="form__group">
            {fields.map((ip: any, index: any) => (
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <div key={index} className="mb-1">
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Field
                        name={ip}
                        component={renderGroupField}
                        type="text"
                        className="form-control"
                        placeholder={placeholder}
                        isActionAvailable={index !== 0}
                        removeField={() => fields.remove(index)}
                        normalizeOnBlur={(data: any) => data.trim()}
                    />
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </div>
            ))}
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <button
                type="button"
                className="btn btn-link btn-block btn-sm"
                onClick={() => fields.push()}
                title={buttonTitle}
            >
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <svg className="icon icon--24">
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <use xlinkHref="#plus" />
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </svg>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </button>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </div>
    );
});

// Should create function outside of component to prevent component re-renders
const renderFields = renderFieldsWrapper(i18n.t('form_enter_id'), i18n.t('form_add_id'));

const renderMultiselect = (props: any) => {
    const { input, placeholder, options } = props;

    return (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Select
            {...input}
            options={options}
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={(value: any) => input.onChange(value)}
            onBlur={() => input.onBlur(input.value)}
            placeholder={placeholder}
            blurInputOnSelect={false}
            isMulti
        />
    );
};

renderMultiselect.propTypes = {
    input: PropTypes.object.isRequired,
    placeholder: PropTypes.string,
    options: PropTypes.array,
};

let Form = (props: any) => {
    const {
        t,
        handleSubmit,
        reset,
        change,
        submitting,
        useGlobalSettings,
        useGlobalServices,
        blockedServicesSchedule,
        handleClose,
        processingAdding,
        processingUpdating,
        invalid,
        tagsOptions,
        initialValues,
    } = props;
    const services = useSelector((store: any) => store?.services);
    const { safe_search } = initialValues;
    const safeSearchServices = { ...safe_search };
    delete safeSearchServices.enabled;

    const [activeTabLabel, setActiveTabLabel] = useState('settings');

    const handleScheduleSubmit = (values: any) => {
        change('blocked_services_schedule', { ...values });
    };

    const tabs = {
        settings: {
            title: 'settings',
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            component: <div label="settings" title={props.t('main_settings')}>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <div className="form__label--bot form__label--bold">
                    {t('protection_section_label')}
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </div>
                {settingsCheckboxes.map((setting) => (
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <div className="form__group" key={setting.name}>
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <Field
                            name={setting.name}
                            type="checkbox"
                            component={CheckboxField}
                            placeholder={t(setting.placeholder)}
                            disabled={
                                setting.name !== 'use_global_settings'
                                    ? useGlobalSettings
                                    : false
                            }
                        />
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </div>
                ))}
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <div className="form__group">
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Field
                        name="safe_search.enabled"
                        type="checkbox"
                        component={CheckboxField}
                        placeholder={t('enforce_safe_search')}
                        disabled={useGlobalSettings}
                    />
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </div>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <div className='form__group--inner'>
                    {Object.keys(safeSearchServices).map((searchKey) => (
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <div key={searchKey}>
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <Field
                                name={`safe_search.${searchKey}`}
                                type="checkbox"
                                component={CheckboxField}
                                placeholder={captitalizeWords(searchKey)}
                                disabled={useGlobalSettings}
                            />
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        </div>
                    ))}
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </div>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <div className="form__label--bold form__label--top form__label--bot">
                    {t('log_and_stats_section_label')}
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </div>
                {logAndStatsCheckboxes.map((setting) => (
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <div className="form__group" key={setting.name}>
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <Field
                            name={setting.name}
                            type="checkbox"
                            component={CheckboxField}
                            placeholder={t(setting.placeholder)}
                        />
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </div>
                ))}
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </div>,
        },
        block_services: {
            title: 'block_services',
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            component: <div label="services" title={props.t('block_services')}>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <div className="form__group">
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Field
                        name="use_global_blocked_services"
                        type="checkbox"
                        component={renderServiceField}
                        placeholder={t('blocked_services_global')}
                        modifier="service--global"
                    />
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <div className="row mb-4">
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <div className="col-6">
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            <button
                                type="button"
                                className="btn btn-secondary btn-block"
                                disabled={useGlobalServices}
                                onClick={() => (
                                    toggleAllServices(services.allServices, change, true)
                                )}
                            >
                                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                <Trans>block_all</Trans>
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            </button>
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        </div>
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <div className="col-6">
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            <button
                                type="button"
                                className="btn btn-secondary btn-block"
                                disabled={useGlobalServices}
                                onClick={() => (
                                    toggleAllServices(services.allServices, change, false)
                                )}
                            >
                                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                <Trans>unblock_all</Trans>
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            </button>
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        </div>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </div>
                    {services.allServices.length > 0 && (
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <div className="services">
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            {services.allServices.map((service: any) => <Field
                                key={service.id}
                                icon={service.icon_svg}
                                name={`blocked_services.${service.id}`}
                                type="checkbox"
                                component={renderServiceField}
                                placeholder={service.name}
                                disabled={useGlobalServices}
                            />)}
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        </div>
                    )}
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </div>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </div>,
        },
        schedule_services: {
            title: 'schedule_services',
            component: (
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <div className="form__desc mb-4">
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <Trans>schedule_services_desc_client</Trans>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </div>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <ScheduleForm
                        schedule={blockedServicesSchedule}
                        onScheduleSubmit={handleScheduleSubmit}
                        clientForm
                    />
                </>
            ),
        },
        upstream_dns: {
            title: 'upstream_dns',
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            component: <div label="upstream" title={props.t('upstream_dns')}>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <div className="form__desc mb-3">
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Trans components={[<a href="#dns" key="0">link</a>]}>
                        upstream_dns_client_desc
                    </Trans>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </div>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Field
                    id="upstreams"
                    name="upstreams"
                    component={renderTextareaField}
                    type="text"
                    className="form-control form-control--textarea mb-5"
                    placeholder={t('upstream_dns')}
                    normalizeOnBlur={trimLinesAndRemoveEmpty}
                />
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Examples />
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <div className="form__label--bold mt-5 mb-3">
                    {t('upstream_dns_cache_configuration')}
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </div>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <div className="form__group mb-2">
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Field
                        name="upstreams_cache_enabled"
                        type="checkbox"
                        component={CheckboxField}
                        placeholder={t('enable_upstream_dns_cache')}
                    />
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </div>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <div className="form__group form__group--settings">
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <label
                        htmlFor="upstreams_cache_size"
                        className="form__label"
                    >
                        {t('dns_cache_size')}
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </label>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Field
                        name="upstreams_cache_size"
                        type="number"
                        component={renderInputField}
                        placeholder={t('enter_cache_size')}
                        className="form-control"
                        normalize={toNumber}
                        min={0}
                        max={UINT32_RANGE.MAX}
                    />
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </div>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </div>,
        },
    };

    // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
    const activeTab = tabs[activeTabLabel].component;

    return (
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <form onSubmit={handleSubmit}>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <div className="modal-body">
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <div className="form__group mb-0">
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <div className="form__group">
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <Field
                            id="name"
                            name="name"
                            component={renderInputField}
                            type="text"
                            className="form-control"
                            placeholder={t('form_client_name')}
                            normalizeOnBlur={(data: any) => data.trim()}
                        />
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </div>

                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <div className="form__group mb-4">
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <div className="form__label">
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            <strong className="mr-3">
                                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                <Trans>tags_title</Trans>
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            </strong>
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        </div>
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <div className="form__desc mt-0 mb-2">
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <Trans components={[
                                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                                <a target="_blank" rel="noopener noreferrer" href="https://link.adtidy.org/forward.html?action=dns_kb_filtering_syntax_ctag&from=ui&app=home"
                                   // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                                   key="0">link</a>,
                            ]}>
                                tags_desc
                            </Trans>
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        </div>
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <Field
                            name="tags"
                            component={renderMultiselect}
                            placeholder={t('form_select_tags')}
                            options={tagsOptions}
                        />
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </div>

                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <div className="form__group">
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <div className="form__label">
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            <strong className="mr-3">
                                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                <Trans>client_identifier</Trans>
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            </strong>
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        </div>
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <div className="form__desc mt-0">
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <Trans components={[
                                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                                <a href={CLIENT_ID_LINK} target="_blank" rel="noopener noreferrer"
                                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                                    key="0">text</a>,
                            ]}>
                                client_identifier_desc
                            </Trans>
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        </div>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </div>

                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <div className="form__group">
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <FieldArray
                            name="ids"
                            component={renderFields}
                        />
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </div>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </div>

                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Tabs
                    controlClass="form"
                    tabs={tabs}
                    activeTabLabel={activeTabLabel}
                    setActiveTabLabel={setActiveTabLabel}
                >
                    {activeTab}
                </Tabs>
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
                        onClick={() => {
                            reset();
                            handleClose();
                        }}
                    >
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <Trans>cancel_btn</Trans>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </button>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <button
                        type="submit"
                        className="btn btn-success btn-standard"
                        disabled={
                            submitting
                            || invalid
                            || processingAdding
                            || processingUpdating
                        }
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

// @ts-expect-error TS(2339): Property 'propTypes' does not exist on type '(prop... Remove this comment to see the full error message
Form.propTypes = {
    pristine: PropTypes.bool.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    change: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    useGlobalSettings: PropTypes.bool,
    useGlobalServices: PropTypes.bool,
    blockedServicesSchedule: PropTypes.object,
    t: PropTypes.func.isRequired,
    processingAdding: PropTypes.bool.isRequired,
    processingUpdating: PropTypes.bool.isRequired,
    invalid: PropTypes.bool.isRequired,
    tagsOptions: PropTypes.array.isRequired,
    initialValues: PropTypes.object,
};

const selector = formValueSelector(FORM_NAME.CLIENT);

Form = connect((state: any) => {
    const useGlobalSettings = selector(state, 'use_global_settings');
    const useGlobalServices = selector(state, 'use_global_blocked_services');
    const blockedServicesSchedule = selector(state, 'blocked_services_schedule');
    return {
        useGlobalSettings,
        useGlobalServices,
        blockedServicesSchedule,
    };
})(Form);

export default flow([
    withTranslation(),
    reduxForm({
        form: FORM_NAME.CLIENT,
        enableReinitialize: true,
        validate,
    }),
])(Form);
