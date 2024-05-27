// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React, { Component } from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import ReactModal from 'react-modal';
import { withTranslation } from 'react-i18next';

import { MODAL_TYPE } from '../../helpers/constants';
// @ts-expect-error TS(6142): Module './Form' was resolved to '/Users/igorlobano... Remove this comment to see the full error message
import Form from './Form';
import '../ui/Modal.css';
// @ts-expect-error TS(6142): Module '../../helpers/helpers' was resolved to '/U... Remove this comment to see the full error message
import { getMap } from '../../helpers/helpers';

ReactModal.setAppElement('#root');

const MODAL_TYPE_TO_TITLE_TYPE_MAP = {
    [MODAL_TYPE.EDIT_FILTERS]: 'edit',
    [MODAL_TYPE.ADD_FILTERS]: 'new',
    [MODAL_TYPE.EDIT_CLIENT]: 'edit',
    [MODAL_TYPE.ADD_CLIENT]: 'new',
    [MODAL_TYPE.SELECT_MODAL_TYPE]: 'new',
    [MODAL_TYPE.CHOOSE_FILTERING_LIST]: 'choose',
};

/**
 * @param modalType {'EDIT_FILTERS' | 'ADD_FILTERS' | 'CHOOSE_FILTERING_LIST'}
 * @param whitelist {boolean}
 * @returns {'new_allowlist' | 'edit_allowlist' | 'choose_allowlist' |
 *           'new_blocklist' | 'edit_blocklist' | 'choose_blocklist' | null}
 */
const getTitle = (modalType: any, whitelist: any) => {
    const titleType = MODAL_TYPE_TO_TITLE_TYPE_MAP[modalType];
    if (!titleType) {
        return null;
    }
    return `${titleType}_${whitelist ? 'allowlist' : 'blocklist'}`;
};

const getSelectedValues = (filters: any, catalogSourcesToIdMap: any) => filters.reduce((acc: any, {
    url,
}: any) => {
    if (Object.prototype.hasOwnProperty.call(catalogSourcesToIdMap, url)) {
        const fieldId = `filter${catalogSourcesToIdMap[url]}`;
        acc.selectedFilterIds[fieldId] = true;
        acc.selectedSources[url] = true;
    }
    return acc;
}, {
    selectedFilterIds: {},
    selectedSources: {},
});

class Modal extends Component {
    props: any;

    closeModal = () => {
        this.props.toggleFilteringModal();
    };

    render() {
        const {
            isOpen,
            processingAddFilter,
            processingConfigFilter,
            handleSubmit,
            modalType,
            currentFilterData,
            whitelist,
            toggleFilteringModal,
            filters,
            t,
            filtersCatalog,
        } = this.props;

        let initialValues;
        let selectedSources;
        switch (modalType) {
            case MODAL_TYPE.EDIT_FILTERS:
                initialValues = currentFilterData;
                break;
            case MODAL_TYPE.CHOOSE_FILTERING_LIST: {
                const catalogSourcesToIdMap = getMap(Object.values(filtersCatalog.filters), 'source', 'id');

                const selectedValues = getSelectedValues(filters, catalogSourcesToIdMap);
                initialValues = selectedValues.selectedFilterIds;
                selectedSources = selectedValues.selectedSources;
                break;
            }
            default:
                break;
        }

        const title = t(getTitle(modalType, whitelist));

        return (
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <ReactModal
                className="Modal__Bootstrap modal-dialog modal-dialog-centered"
                closeTimeoutMS={0}
                isOpen={isOpen}
                onRequestClose={this.closeModal}
            >
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <div className="modal-content">
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <div className="modal-header">
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        {title && <h4 className="modal-title">{title}</h4>}
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <button type="button" className="close" onClick={this.closeModal}>
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            <span className="sr-only">Close</span>
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        </button>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </div>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Form
                        selectedSources={selectedSources}
                        initialValues={initialValues}
                        modalType={modalType}
                        onSubmit={handleSubmit}
                        processingAddFilter={processingAddFilter}
                        processingConfigFilter={processingConfigFilter}
                        closeModal={this.closeModal}
                        whitelist={whitelist}
                        toggleFilteringModal={toggleFilteringModal}
                    />
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </div>
            </ReactModal>
        );
    }
}

// @ts-expect-error TS(2339): Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
Modal.propTypes = {
    toggleFilteringModal: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
    addFilter: PropTypes.func.isRequired,
    isFilterAdded: PropTypes.bool.isRequired,
    processingAddFilter: PropTypes.bool.isRequired,
    processingConfigFilter: PropTypes.bool.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    modalType: PropTypes.string.isRequired,
    currentFilterData: PropTypes.object.isRequired,
    t: PropTypes.func.isRequired,
    whitelist: PropTypes.bool,
    filters: PropTypes.array.isRequired,
    filtersCatalog: PropTypes.object,
};

export default withTranslation()(Modal);
