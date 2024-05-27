// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React, { Component } from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { connect } from 'react-redux';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';
// @ts-expect-error TS(2306): File '/Users/igorlobanov/Work/AdGuard/adguard-home... Remove this comment to see the full error message
import ReactTable from 'react-table';
import { Trans, withTranslation } from 'react-i18next';
import { LEASES_TABLE_DEFAULT_PAGE_SIZE, MODAL_TYPE } from '../../../helpers/constants';
// @ts-expect-error TS(6142): Module '../../../helpers/helpers' was resolved to ... Remove this comment to see the full error message
import { sortIp } from '../../../helpers/helpers';
// @ts-expect-error TS(6142): Module '../../../actions' was resolved to '/Users/... Remove this comment to see the full error message
import { toggleLeaseModal } from '../../../actions';

class Leases extends Component {
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

    convertToStatic = (data: any) => () => {
        const { dispatch } = this.props;
        dispatch(toggleLeaseModal({
            type: MODAL_TYPE.ADD_LEASE,
            config: data,
        }));
    }

    makeStatic = ({
        row,
    }: any) => {
        const { t, disabledLeasesButton } = this.props;
        return (
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <div className="logs__row logs__row--center">
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <button
                    type="button"
                    className="btn btn-icon btn-icon--green btn-outline-success btn-sm"
                    title={t('make_static')}
                    onClick={this.convertToStatic(row)}
                    disabled={disabledLeasesButton}
                >
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <svg className="icons icon12">
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <use xlinkHref="#plus" />
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </svg>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </button>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </div>
        );
    }

    render() {
        const { leases, t } = this.props;
        return (
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <ReactTable
                data={leases || []}
                columns={[
                    {
                        Header: 'MAC',
                        accessor: 'mac',
                        minWidth: 180,
                        Cell: this.cellWrap,
                    }, {
                        Header: 'IP',
                        accessor: 'ip',
                        minWidth: 230,
                        Cell: this.cellWrap,
                        sortMethod: sortIp,
                    }, {
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        Header: <Trans>dhcp_table_hostname</Trans>,
                        accessor: 'hostname',
                        minWidth: 230,
                        Cell: this.cellWrap,
                    }, {
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        Header: <Trans>dhcp_table_expires</Trans>,
                        accessor: 'expires',
                        minWidth: 220,
                        Cell: this.cellWrap,
                    }, {
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        Header: <Trans>actions_table_header</Trans>,
                        Cell: this.makeStatic,
                    },
                ]}
                pageSize={LEASES_TABLE_DEFAULT_PAGE_SIZE}
                showPageSizeOptions={false}
                showPagination={leases.length > LEASES_TABLE_DEFAULT_PAGE_SIZE}
                noDataText={t('dhcp_leases_not_found')}
                minRows={6}
                className="-striped -highlight card-table-overflow"
            />
        );
    }
}

// @ts-expect-error TS(2339): Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
Leases.propTypes = {
    leases: PropTypes.array,
    t: PropTypes.func,
    dispatch: PropTypes.func,
    disabledLeasesButton: PropTypes.bool,
};

export default withTranslation()(connect(() => ({}), (dispatch: any) => ({
    dispatch,
}))(Leases));
