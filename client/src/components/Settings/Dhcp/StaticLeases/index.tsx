// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';
// @ts-expect-error TS(2306): File '/Users/igorlobanov/Work/AdGuard/adguard-home... Remove this comment to see the full error message
import ReactTable from 'react-table';
import { Trans, useTranslation } from 'react-i18next';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { useDispatch } from 'react-redux';
import { LEASES_TABLE_DEFAULT_PAGE_SIZE, MODAL_TYPE } from '../../../../helpers/constants';
// @ts-expect-error TS(6142): Module '../../../../helpers/helpers' was resolved ... Remove this comment to see the full error message
import { sortIp } from '../../../../helpers/helpers';
// @ts-expect-error TS(6142): Module './Modal' was resolved to '/Users/igorloban... Remove this comment to see the full error message
import Modal from './Modal';
import {
    addStaticLease,
    removeStaticLease,
    toggleLeaseModal,
    updateStaticLease,
// @ts-expect-error TS(6142): Module '../../../../actions' was resolved to '/Use... Remove this comment to see the full error message
} from '../../../../actions';

const cellWrap = ({
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

const StaticLeases = ({
    isModalOpen,
    modalType,
    processingAdding,
    processingDeleting,
    processingUpdating,
    staticLeases,
    cidr,
    rangeStart,
    rangeEnd,
    gatewayIp,
}: any) => {
    const [t] = useTranslation();
    const dispatch = useDispatch();

    const handleSubmit = (data: any) => {
        const { mac, ip, hostname } = data;

        if (modalType === MODAL_TYPE.EDIT_LEASE) {
            dispatch(updateStaticLease({ mac, ip, hostname }));
        } else {
            dispatch(addStaticLease({ mac, ip, hostname }));
        }
    };

    const handleDelete = (ip: any, mac: any, hostname = '') => {
        const name = hostname || ip;
        // eslint-disable-next-line no-alert
        if (window.confirm(t('delete_confirm', { key: name }))) {
            dispatch(removeStaticLease({
                ip,
                mac,
                hostname,
            }));
        }
    };

    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    return <>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <ReactTable
            data={staticLeases || []}
            columns={[
                {
                    Header: 'MAC',
                    accessor: 'mac',
                    minWidth: 180,
                    Cell: cellWrap,
                },
                {
                    Header: 'IP',
                    accessor: 'ip',
                    minWidth: 230,
                    sortMethod: sortIp,
                    Cell: cellWrap,
                },
                {
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    Header: <Trans>dhcp_table_hostname</Trans>,
                    accessor: 'hostname',
                    minWidth: 230,
                    Cell: cellWrap,
                },
                {
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    Header: <Trans>actions_table_header</Trans>,
                    accessor: 'actions',
                    maxWidth: 150,
                    sortable: false,
                    resizable: false,
                    // eslint-disable-next-line react/display-name
                    Cell: (row: any) => {
                        const { ip, mac, hostname } = row.original;

                        return (
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            <div className="logs__row logs__row--center">
                                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                                <button
                                    type="button"
                                    className="btn btn-icon btn-outline-primary btn-sm mr-2"
                                    onClick={() => dispatch(toggleLeaseModal({
                                        type: MODAL_TYPE.EDIT_LEASE,
                                        config: { ip, mac, hostname },
                                    }))}
                                    disabled={processingUpdating}
                                    title={t('edit_table_action')}
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
                                    onClick={() => handleDelete(ip, mac, hostname)}
                                    disabled={processingDeleting}
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
            ]}
            pageSize={LEASES_TABLE_DEFAULT_PAGE_SIZE}
            showPageSizeOptions={false}
            showPagination={staticLeases.length > LEASES_TABLE_DEFAULT_PAGE_SIZE}
            noDataText={t('dhcp_static_leases_not_found')}
            className="-striped -highlight card-table-overflow"
            minRows={6}
        />
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Modal
            isModalOpen={isModalOpen}
            modalType={modalType}
            handleSubmit={handleSubmit}
            processingAdding={processingAdding}
            cidr={cidr}
            rangeStart={rangeStart}
            rangeEnd={rangeEnd}
            gatewayIp={gatewayIp}
        />
    </>;
};

StaticLeases.propTypes = {
    staticLeases: PropTypes.array.isRequired,
    isModalOpen: PropTypes.bool.isRequired,
    modalType: PropTypes.string.isRequired,
    processingAdding: PropTypes.bool.isRequired,
    processingDeleting: PropTypes.bool.isRequired,
    processingUpdating: PropTypes.bool.isRequired,
    cidr: PropTypes.string.isRequired,
    rangeStart: PropTypes.string,
    rangeEnd: PropTypes.string,
    gatewayIp: PropTypes.string,
};

cellWrap.propTypes = {
    value: PropTypes.string.isRequired,
};

export default StaticLeases;
