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
// @ts-expect-error TS(6142): Module '../../helpers/helpers' was resolved to '/U... Remove this comment to see the full error message
import { getCurrentFilter } from '../../helpers/helpers';

class DnsAllowlist extends Component {
    props: any;

    componentDidMount() {
        this.props.getFilteringStatus();
    }

    handleSubmit = (values: any) => {
        const { name, url } = values;
        const { filtering } = this.props;
        const whitelist = true;

        if (filtering.modalType === MODAL_TYPE.EDIT_FILTERS) {
            this.props.editFilter(filtering.modalFilterUrl, values, whitelist);
        } else {
            this.props.addFilter(url, name, whitelist);
        }
    };

    handleDelete = (url: any) => {
        if (window.confirm(this.props.t('list_confirm_delete'))) {
            const whitelist = true;
            this.props.removeFilter(url, whitelist);
        }
    };

    toggleFilter = (url: any, data: any) => {
        const whitelist = true;
        this.props.toggleFilterStatus(url, data, whitelist);
    };

    handleRefresh = () => {
        this.props.refreshFilters({ whitelist: true });
    };

    openAddFiltersModal = () => {
        this.props.toggleFilteringModal({ type: MODAL_TYPE.ADD_FILTERS });
    };

    render() {
        const {
            t,
            toggleFilteringModal,
            addFilter,
            toggleFilterStatus,
            filtering: {
                whitelistFilters,
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
        const currentFilterData = getCurrentFilter(modalFilterUrl, whitelistFilters);
        const loading = processingConfigFilter
            || processingFilters
            || processingAddFilter
            || processingRemoveFilter
            || processingRefreshFilters;
        const whitelist = true;

        return (
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <PageTitle
                    title={t('dns_allowlists')}
                    subtitle={t('dns_allowlists_desc')}
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
                                    filters={whitelistFilters}
                                    loading={loading}
                                    processingConfigFilter={processingConfigFilter}
                                    toggleFilteringModal={toggleFilteringModal}
                                    toggleFilterStatus={toggleFilterStatus}
                                    handleDelete={this.handleDelete}
                                    toggleFilter={this.toggleFilter}
                                    whitelist={whitelist}
                                />
                                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                <Actions
                                    handleAdd={this.openAddFiltersModal}
                                    handleRefresh={this.handleRefresh}
                                    processingRefreshFilters={processingRefreshFilters}
                                    whitelist={whitelist}
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
                    filters={whitelistFilters}
                    isOpen={isModalOpen}
                    toggleFilteringModal={toggleFilteringModal}
                    addFilter={addFilter}
                    isFilterAdded={isFilterAdded}
                    processingAddFilter={processingAddFilter}
                    processingConfigFilter={processingConfigFilter}
                    handleSubmit={this.handleSubmit}
                    modalType={modalType}
                    currentFilterData={currentFilterData}
                    whitelist={whitelist}
                />
            </>
        );
    }
}

// @ts-expect-error TS(2339): Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
DnsAllowlist.propTypes = {
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

export default withTranslation()(DnsAllowlist);
