// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'redu... Remove this comment to see the full error message
import { Field, reduxForm } from 'redux-form';
import { withTranslation } from 'react-i18next';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'loda... Remove this comment to see the full error message
import flow from 'lodash/flow';
import classNames from 'classnames';
import { validatePath, validateRequiredValue } from '../../helpers/validators';
// @ts-expect-error TS(6142): Module '../../helpers/form' was resolved to '/User... Remove this comment to see the full error message
import { CheckboxField, renderInputField } from '../../helpers/form';
import { MODAL_OPEN_TIMEOUT, MODAL_TYPE, FORM_NAME } from '../../helpers/constants';
import filtersCatalog from '../../helpers/filters/filters';

const getIconsData = (homepage: any, source: any) => ([
    {
        iconName: 'dashboard',
        href: homepage,
        className: 'ml-1',
    },
    {
        iconName: 'info',
        href: source,
    },
]);

const renderIcons = (iconsData: any) => iconsData.map(({
    iconName,
    href,
    className = '',
// @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
}: any) => <a key={iconName} href={href} target="_blank" rel="noopener noreferrer"
         className={classNames('d-flex align-items-center', className)}
>
    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    <svg className="icon icon--15 mr-1 icon--gray">
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <use xlinkHref={`#${iconName}`} />
    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    </svg>
// @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
</a>);

// @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
const renderCheckboxField = (props: any) => <CheckboxField
        {...props}
        input={{
            ...props.input,
            checked: props.disabled || props.input.checked,
        }}
/>;

renderCheckboxField.propTypes = {
    // https://redux-form.com/8.3.0/docs/api/field.md/#props
    input: PropTypes.object.isRequired,
    disabled: PropTypes.bool.isRequired,
};

const renderFilters = ({
    categories,
    filters,
}: any, selectedSources: any, t: any) => Object.keys(categories)
    .map((categoryId) => {
        const category = categories[categoryId];
        const categoryFilters: any = [];
        Object.keys(filters)
            .sort()
            .forEach((key) => {
                const filter = filters[key];
                filter.id = key;
                if (filter.categoryId === categoryId) {
                    categoryFilters.push(filter);
                }
            });

        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        return <div key={category.name} className="modal-body__item">
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <h6 className="font-weight-bold mb-1">{t(category.name)}</h6>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <p className="mb-3">{t(category.description)}</p>
            // @ts-expect-error TS(7006): Parameter 'filter' implicitly has an 'any' type.
            {categoryFilters.map((filter) => {
                const { homepage, source, name } = filter;

                const isSelected = Object.prototype.hasOwnProperty.call(selectedSources, source);

                const iconsData = getIconsData(homepage, source);

                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                return <div key={name} className="d-flex align-items-center pb-1">
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Field
                        name={filter.id}
                        type="checkbox"
                        component={renderCheckboxField}
                        placeholder={t(name)}
                        disabled={isSelected}
                    />
                    {renderIcons(iconsData)}
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </div>;
            })}
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </div>;
    });

const Form = (props: any) => {
    const {
        t,
        closeModal,
        handleSubmit,
        processingAddFilter,
        processingConfigFilter,
        whitelist,
        modalType,
        toggleFilteringModal,
        selectedSources,
    } = props;

    const openModal = (modalType: any, timeout = MODAL_OPEN_TIMEOUT) => {
        toggleFilteringModal();
        setTimeout(() => toggleFilteringModal({ type: modalType }), timeout);
    };

    const openFilteringListModal = () => openModal(MODAL_TYPE.CHOOSE_FILTERING_LIST);

    const openAddFiltersModal = () => openModal(MODAL_TYPE.ADD_FILTERS);

    return (
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <form onSubmit={handleSubmit}>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <div className="modal-body modal-body--filters">
                {modalType === MODAL_TYPE.SELECT_MODAL_TYPE
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                && <div className="d-flex justify-content-around">
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <button onClick={openFilteringListModal}
                            className="btn btn-success btn-standard mr-2 btn-large">
                        {t('choose_from_list')}
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </button>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <button onClick={openAddFiltersModal} className="btn btn-primary btn-standard">
                        {t('add_custom_list')}
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </button>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </div>}
                {modalType === MODAL_TYPE.CHOOSE_FILTERING_LIST
                && renderFilters(filtersCatalog, selectedSources, t)}
                {modalType !== MODAL_TYPE.CHOOSE_FILTERING_LIST
                && modalType !== MODAL_TYPE.SELECT_MODAL_TYPE
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                && <>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <div className="form__group">
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <Field
                            id="name"
                            name="name"
                            type="text"
                            component={renderInputField}
                            className="form-control"
                            placeholder={t('enter_name_hint')}
                            normalizeOnBlur={(data: any) => data.trim()}
                        />
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </div>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <div className="form__group">
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <Field
                            id="url"
                            name="url"
                            type="text"
                            component={renderInputField}
                            className="form-control"
                            placeholder={t('enter_url_or_path_hint')}
                            validate={[validateRequiredValue, validatePath]}
                            normalizeOnBlur={(data: any) => data.trim()}
                        />
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </div>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <div className="form__description">
                        {whitelist ? t('enter_valid_allowlist') : t('enter_valid_blocklist')}
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </div>
                </>}
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </div>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <div className="modal-footer">
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={closeModal}
                >
                    {t('cancel_btn')}
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </button>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                {modalType !== MODAL_TYPE.SELECT_MODAL_TYPE && <button
                    type="submit"
                    className="btn btn-success"
                    disabled={processingAddFilter || processingConfigFilter}
                >
                    {t('save_btn')}
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </button>}
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </div>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </form>
    );
};

Form.propTypes = {
    t: PropTypes.func.isRequired,
    closeModal: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    processingAddFilter: PropTypes.bool.isRequired,
    processingConfigFilter: PropTypes.bool.isRequired,
    whitelist: PropTypes.bool,
    modalType: PropTypes.string.isRequired,
    toggleFilteringModal: PropTypes.func.isRequired,
    selectedSources: PropTypes.object,
};

export default flow([
    withTranslation(),
    reduxForm({ form: FORM_NAME.FILTER }),
])(Form);
