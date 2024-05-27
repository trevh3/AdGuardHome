// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React, { Component } from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';
// @ts-expect-error TS(2306): File '/Users/igorlobanov/Work/AdGuard/adguard-home... Remove this comment to see the full error message
import ReactTable from 'react-table';
import { withTranslation, Trans } from 'react-i18next';
// @ts-expect-error TS(6142): Module '../ui/CellWrap' was resolved to '/Users/ig... Remove this comment to see the full error message
import CellWrap from '../ui/CellWrap';
import { MODAL_TYPE } from '../../helpers/constants';
// @ts-expect-error TS(6142): Module '../../helpers/helpers' was resolved to '/U... Remove this comment to see the full error message
import { formatDetailedDateTime } from '../../helpers/helpers';
// @ts-expect-error TS(6142): Module '../../helpers/form' was resolved to '/User... Remove this comment to see the full error message
import { isValidAbsolutePath } from '../../helpers/form';
import { LOCAL_STORAGE_KEYS, LocalStorageHelper } from '../../helpers/localStorageHelper';

class Table extends Component {
    props: any;

    getDateCell = (row: any) => CellWrap(row, formatDetailedDateTime);

    renderCheckbox = ({
        original,
    }: any) => {
        const { processingConfigFilter, toggleFilter } = this.props;
        const { url, name, enabled } = original;
        const data = { name, url, enabled: !enabled };

        return (
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <label className="checkbox">
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <input
                    type="checkbox"
                    className="checkbox__input"
                    onChange={() => toggleFilter(url, data)}
                    checked={enabled}
                    disabled={processingConfigFilter}
                />
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <span className="checkbox__label" />
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </label>
        );
    };

    columns = [
        {
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            Header: <Trans>enabled_table_header</Trans>,
            accessor: 'enabled',
            Cell: this.renderCheckbox,
            width: 90,
            className: 'text-center',
            resizable: false,
        },
        {
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            Header: <Trans>name_table_header</Trans>,
            accessor: 'name',
            minWidth: 180,
            Cell: CellWrap,
        },
        {
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            Header: <Trans>list_url_table_header</Trans>,
            accessor: 'url',
            minWidth: 180,
            // eslint-disable-next-line react/prop-types
            Cell: ({
                value,
            }: any) => (
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <div className="logs__row">
                    {isValidAbsolutePath(value) ? value
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        : <a
                            href={value}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link logs__text"
                        >
                            {value}
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        </a>}
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </div>
            ),
        },
        {
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            Header: <Trans>rules_count_table_header</Trans>,
            accessor: 'rulesCount',
            className: 'text-center',
            minWidth: 100,
            Cell: (props: any) => props.value.toLocaleString(),
        },
        {
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            Header: <Trans>last_time_updated_table_header</Trans>,
            accessor: 'lastUpdated',
            className: 'text-center',
            minWidth: 180,
            Cell: this.getDateCell,
        },
        {
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            Header: <Trans>actions_table_header</Trans>,
            accessor: 'actions',
            className: 'text-center',
            width: 100,
            sortable: false,
            resizable: false,
            Cell: (row: any) => {
                const { original } = row;
                const { url } = original;
                const { t, toggleFilteringModal, handleDelete } = this.props;

                return (
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <div className="logs__row logs__row--center">
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <button
                            type="button"
                            className="btn btn-icon btn-outline-primary btn-sm mr-2"
                            title={t('edit_table_action')}
                            onClick={() => toggleFilteringModal({
                                type: MODAL_TYPE.EDIT_FILTERS,
                                url,
                            })
                            }
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
                            onClick={() => handleDelete(url)}
                            title={t('delete_table_action')}
                        >
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            <svg className="icons icon12">
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
            loading, filters, t, whitelist,
        } = this.props;

        const localStorageKey = whitelist
            ? LOCAL_STORAGE_KEYS.ALLOWLIST_PAGE_SIZE
            : LOCAL_STORAGE_KEYS.BLOCKLIST_PAGE_SIZE;

        return (
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <ReactTable
                data={filters}
                columns={this.columns}
                showPagination
                defaultPageSize={LocalStorageHelper.getItem(localStorageKey) || 10}
                onPageSizeChange={(size: any) => LocalStorageHelper.setItem(localStorageKey, size)}
                loading={loading}
                minRows={6}
                ofText="/"
                previousText={t('previous_btn')}
                nextText={t('next_btn')}
                pageText={t('page_table_footer_text')}
                rowsText={t('rows_table_footer_text')}
                loadingText={t('loading_table_status')}
                noDataText={whitelist ? t('no_whitelist_added') : t('no_blocklist_added')}
            />
        );
    }
}

// @ts-expect-error TS(2339): Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
Table.propTypes = {
    filters: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    processingConfigFilter: PropTypes.bool.isRequired,
    toggleFilteringModal: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
    toggleFilter: PropTypes.func.isRequired,
    t: PropTypes.func.isRequired,
    whitelist: PropTypes.bool,
};

export default withTranslation()(Table);
