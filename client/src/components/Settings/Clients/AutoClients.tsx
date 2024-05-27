// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React, { Component } from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
// @ts-expect-error TS(2306): File '/Users/igorlobanov/Work/AdGuard/adguard-home... Remove this comment to see the full error message
import ReactTable from 'react-table';

// @ts-expect-error TS(6142): Module '../../ui/Card' was resolved to '/Users/igo... Remove this comment to see the full error message
import Card from '../../ui/Card';
// @ts-expect-error TS(6142): Module '../../ui/CellWrap' was resolved to '/Users... Remove this comment to see the full error message
import CellWrap from '../../ui/CellWrap';

// @ts-expect-error TS(6142): Module './whoisCell' was resolved to '/Users/igorl... Remove this comment to see the full error message
import whoisCell from './whoisCell';
// @ts-expect-error TS(6142): Module '../../ui/LogsSearchLink' was resolved to '... Remove this comment to see the full error message
import LogsSearchLink from '../../ui/LogsSearchLink';
// @ts-expect-error TS(6142): Module '../../../helpers/helpers' was resolved to ... Remove this comment to see the full error message
import { sortIp } from '../../../helpers/helpers';
import { LocalStorageHelper, LOCAL_STORAGE_KEYS } from '../../../helpers/localStorageHelper';
import { TABLES_MIN_ROWS } from '../../../helpers/constants';

const COLUMN_MIN_WIDTH = 200;

class AutoClients extends Component {
    props: any;

    columns = [
        {
            // @ts-expect-error TS(2729): Property 'props' is used before its initialization... Remove this comment to see the full error message
            Header: this.props.t('table_client'),
            accessor: 'ip',
            minWidth: COLUMN_MIN_WIDTH,
            Cell: CellWrap,
            sortMethod: sortIp,
        },
        {
            // @ts-expect-error TS(2729): Property 'props' is used before its initialization... Remove this comment to see the full error message
            Header: this.props.t('table_name'),
            accessor: 'name',
            minWidth: COLUMN_MIN_WIDTH,
            Cell: CellWrap,
        },
        {
            // @ts-expect-error TS(2729): Property 'props' is used before its initialization... Remove this comment to see the full error message
            Header: this.props.t('source_label'),
            accessor: 'source',
            minWidth: COLUMN_MIN_WIDTH,
            Cell: CellWrap,
        },
        {
            // @ts-expect-error TS(2729): Property 'props' is used before its initialization... Remove this comment to see the full error message
            Header: this.props.t('whois'),
            accessor: 'whois_info',
            minWidth: COLUMN_MIN_WIDTH,
            // @ts-expect-error TS(2729): Property 'props' is used before its initialization... Remove this comment to see the full error message
            Cell: whoisCell(this.props.t),
        },
        {
            // @ts-expect-error TS(2729): Property 'props' is used before its initialization... Remove this comment to see the full error message
            Header: this.props.t('requests_count'),
            accessor: (row: any) => this.props.normalizedTopClients.auto[row.ip] || 0,
            sortMethod: (a: any, b: any) => b - a,
            id: 'statistics',
            minWidth: COLUMN_MIN_WIDTH,
            Cell: (row: any) => {
                const { value: clientStats } = row;

                if (clientStats) {
                    return (
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <div className="logs__row">
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            <div className="logs__text" title={clientStats}>
                                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                <LogsSearchLink search={row.original.ip}>
                                    {clientStats}
                                </LogsSearchLink>
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            </div>
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        </div>
                    );
                }

                return '–';
            },
        },
    ];

    render() {
        const { t, autoClients } = this.props;

        return (
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Card
                title={t('auto_clients_title')}
                subtitle={t('auto_clients_desc')}
                bodyType="card-body box-body--settings"
            >
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <ReactTable
                    data={autoClients || []}
                    columns={this.columns}
                    defaultSorted={[
                        {
                            id: 'statistics',
                            asc: true,
                        },
                    ]}
                    className="-striped -highlight card-table-overflow"
                    showPagination
                    defaultPageSize={LocalStorageHelper.getItem(LOCAL_STORAGE_KEYS.AUTO_CLIENTS_PAGE_SIZE) || 10}
                    onPageSizeChange={(size: any) => LocalStorageHelper.setItem(LOCAL_STORAGE_KEYS.AUTO_CLIENTS_PAGE_SIZE, size)}
                    minRows={TABLES_MIN_ROWS}
                    ofText="/"
                    previousText={t('previous_btn')}
                    nextText={t('next_btn')}
                    pageText={t('page_table_footer_text')}
                    rowsText={t('rows_table_footer_text')}
                    loadingText={t('loading_table_status')}
                    noDataText={t('clients_not_found')}
                />
            </Card>
        );
    }
}

// @ts-expect-error TS(2339): Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
AutoClients.propTypes = {
    t: PropTypes.func.isRequired,
    autoClients: PropTypes.array.isRequired,
    normalizedTopClients: PropTypes.object.isRequired,
};

export default withTranslation()(AutoClients);
