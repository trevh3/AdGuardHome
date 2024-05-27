// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React, { Component } from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

// @ts-expect-error TS(6142): Module '../ui/PageTitle' was resolved to '/Users/i... Remove this comment to see the full error message
import PageTitle from '../ui/PageTitle';
// @ts-expect-error TS(6142): Module '../ui/Card' was resolved to '/Users/igorlo... Remove this comment to see the full error message
import Card from '../ui/Card';
// @ts-expect-error TS(6142): Module './Modal' was resolved to '/Users/igorloban... Remove this comment to see the full error message
import Modal from './Modal';
// @ts-expect-error TS(6142): Module './Actions' was resolved to '/Users/igorlob... Remove this comment to see the full error message
import Actions from './Actions';

// @ts-expect-error TS(6142): Module './Table' was resolved to '/Users/igorloban... Remove this comment to see the full error message
import Table from './Table';
import { MODAL_TYPE } from '../../helpers/constants';

import {
    getCurrentFilter,
// @ts-expect-error TS(6142): Module '../../helpers/helpers' was resolved to '/U... Remove this comment to see the full error message
} from '../../helpers/helpers';

import filtersCatalog from '../../helpers/filters/filters';

class DnsBlocklist extends Component {
    props: any;

    componentDidMount() {
        this.props.getFilteringStatus();
    }

    handleSubmit = (values: any) => {
        const { modalFilterUrl, modalType } = this.props.filtering;

        switch (modalType) {
            case MODAL_TYPE.EDIT_FILTERS:
                this.props.editFilter(modalFilterUrl, values);
                break;
            case MODAL_TYPE.ADD_FILTERS: {
                const { name, url } = values;
                this.props.addFilter(url, name);
                break;
            }
            case MODAL_TYPE.CHOOSE_FILTERING_LIST: {
                const changedValues = Object.entries(values)?.reduce((acc, [key, value]) => {
                    if (value && key in filtersCatalog.filters) {
                        // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
                        acc[key] = value;
                    }
                    return acc;
                }, {});

                Object.keys(changedValues)
                    .forEach((fieldName) => {
                        // filterId is actually in the field name
                        // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
                        const { source, name } = filtersCatalog.filters[fieldName];
                        this.props.addFilter(source, name);
                    });
                break;
            }
            default:
                break;
        }
    };

    handleDelete = (url: any) => {
        if (window.confirm(this.props.t('list_confirm_delete'))) {
            this.props.removeFilter(url);
        }
    };

    toggleFilter = (url: any, data: any) => {
        this.props.toggleFilterStatus(url, data);
    };

    handleRefresh = () => {
        this.props.refreshFilters({ whitelist: false });
    };

    openSelectTypeModal = () => {
        this.props.toggleFilteringModal({ type: MODAL_TYPE.SELECT_MODAL_TYPE });
    };

    render() {
        const {
            t,
            toggleFilteringModal,
            addFilter,
            filtering: {
                filters,
                isModalOpen,
                isFilterAdded,
                processingRefreshFilters,
                processingRemoveFilter,
                processingAddFilter,
                processingConfigFilter,
                processingFilters,
                modalType,
                modalFilterUrl,
            },
        } = this.props;
        const currentFilterData = getCurrentFilter(modalFilterUrl, filters);
        const loading = processingConfigFilter
            || processingFilters
            || processingAddFilter
            || processingRemoveFilter
            || processingRefreshFilters;

        return (
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <PageTitle
                    title={t('dns_blocklists')}
                    subtitle={t('dns_blocklists_desc')}
                />
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <div className="content">
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <div className="row">
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <div className="col-md-12">
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <Card subtitle={t('filters_and_hosts_hint')}>
                                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                <Table
                                    filters={filters}
                                    loading={loading}
                                    processingConfigFilter={processingConfigFilter}
                                    toggleFilteringModal={toggleFilteringModal}
                                    handleDelete={this.handleDelete}
                                    toggleFilter={this.toggleFilter}
                                />
                                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                <Actions
                                    handleAdd={this.openSelectTypeModal}
                                    handleRefresh={this.handleRefresh}
                                    processingRefreshFilters={processingRefreshFilters}
                                />
                            </Card>
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        </div>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </div>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </div>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Modal
                    filtersCatalog={filtersCatalog}
                    filters={filters}
                    isOpen={isModalOpen}
                    toggleFilteringModal={toggleFilteringModal}
                    addFilter={addFilter}
                    isFilterAdded={isFilterAdded}
                    processingAddFilter={processingAddFilter}
                    processingConfigFilter={processingConfigFilter}
                    handleSubmit={this.handleSubmit}
                    modalType={modalType}
                    currentFilterData={currentFilterData}
                />
            </>
        );
    }
}

// @ts-expect-error TS(2339): Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
DnsBlocklist.propTypes = {
    getFilteringStatus: PropTypes.func.isRequired,
    filtering: PropTypes.object.isRequired,
    removeFilter: PropTypes.func.isRequired,
    toggleFilterStatus: PropTypes.func.isRequired,
    addFilter: PropTypes.func.isRequired,
    toggleFilteringModal: PropTypes.func.isRequired,
    handleRulesChange: PropTypes.func.isRequired,
    refreshFilters: PropTypes.func.isRequired,
    editFilter: PropTypes.func.isRequired,
    t: PropTypes.func.isRequired,
};

export default withTranslation()(DnsBlocklist);
