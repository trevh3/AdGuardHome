// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React, { Component } from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';
// @ts-expect-error TS(2306): File '/Users/igorlobanov/Work/AdGuard/adguard-home... Remove this comment to see the full error message
import ReactTable from 'react-table';
import { withTranslation } from 'react-i18next';
// @ts-expect-error TS(6142): Module '../../../helpers/helpers' was resolved to ... Remove this comment to see the full error message
import { sortIp } from '../../../helpers/helpers';
import { MODAL_TYPE, TABLES_MIN_ROWS } from '../../../helpers/constants';
import { LocalStorageHelper, LOCAL_STORAGE_KEYS } from '../../../helpers/localStorageHelper';

class Table extends Component {
    props: any;

    cellWrap = ({
        value,
    }: any) => (
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <div className="logs__row o-hidden">
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <span className="logs__text" title={value}>
                {value}
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </span>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </div>
    );

    columns = [
        {
            // @ts-expect-error TS(2729): Property 'props' is used before its initialization... Remove this comment to see the full error message
            Header: this.props.t('domain'),
            accessor: 'domain',
            Cell: this.cellWrap,
        },
        {
            // @ts-expect-error TS(2729): Property 'props' is used before its initialization... Remove this comment to see the full error message
            Header: this.props.t('answer'),
            accessor: 'answer',
            sortMethod: sortIp,
            Cell: this.cellWrap,
        },
        {
            // @ts-expect-error TS(2729): Property 'props' is used before its initialization... Remove this comment to see the full error message
            Header: this.props.t('actions_table_header'),
            accessor: 'actions',
            maxWidth: 100,
            sortable: false,
            resizable: false,
            Cell: (value: any) => {
                const currentRewrite = {
                    answer: value.row.answer,
                    domain: value.row.domain,
                };

                return (
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <div className="logs__row logs__row--center">
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <button
                            type="button"
                            className="btn btn-icon btn-outline-primary btn-sm mr-2"
                            onClick={() => {
                                this.props.toggleRewritesModal({
                                    type: MODAL_TYPE.EDIT_REWRITE,
                                    currentRewrite,
                                });
                            }}
                            disabled={this.props.processingUpdate}
                            title={this.props.t('edit_table_action')}
                        >
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            <svg className="icons icon12">
                                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                                <use xlinkHref="#edit" />
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            </svg>
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        </button>

                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <button
                            type="button"
                            className="btn btn-icon btn-outline-secondary btn-sm"
                            onClick={() => this.props.handleDelete(currentRewrite)}
                            title={this.props.t('delete_table_action')}
                        >
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            <svg className="icons">
                                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                                <use xlinkHref="#delete" />
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            </svg>
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        </button>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </div>
                );
            },
        },
    ];

    render() {
        const {
            t, list, processing, processingAdd, processingDelete,
        } = this.props;

        return (
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <ReactTable
                data={list || []}
                columns={this.columns}
                loading={processing || processingAdd || processingDelete}
                className="-striped -highlight card-table-overflow"
                showPagination
                defaultPageSize={LocalStorageHelper.getItem(LOCAL_STORAGE_KEYS.REWRITES_PAGE_SIZE) || 10}
                onPageSizeChange={(size: any) => LocalStorageHelper.setItem(LOCAL_STORAGE_KEYS.REWRITES_PAGE_SIZE, size)}
                minRows={TABLES_MIN_ROWS}
                ofText="/"
                previousText={t('previous_btn')}
                nextText={t('next_btn')}
                pageText={t('page_table_footer_text')}
                rowsText={t('rows_table_footer_text')}
                loadingText={t('loading_table_status')}
                noDataText={t('rewrite_not_found')}
            />
        );
    }
}

// @ts-expect-error TS(2339): Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
Table.propTypes = {
    t: PropTypes.func.isRequired,
    list: PropTypes.array.isRequired,
    processing: PropTypes.bool.isRequired,
    processingAdd: PropTypes.bool.isRequired,
    processingDelete: PropTypes.bool.isRequired,
    processingUpdate: PropTypes.bool.isRequired,
    handleDelete: PropTypes.func.isRequired,
    toggleRewritesModal: PropTypes.func.isRequired,
};

export default withTranslation()(Table);
