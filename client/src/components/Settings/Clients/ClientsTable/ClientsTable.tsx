/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React, { useEffect } from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';
import { Trans, useTranslation } from 'react-i18next';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { useDispatch, useSelector } from 'react-redux';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { useHistory, useLocation } from 'react-router-dom';
// @ts-expect-error TS(2306): File '/Users/igorlobanov/Work/AdGuard/adguard-home... Remove this comment to see the full error message
import ReactTable from 'react-table';

import { getAllBlockedServices, getBlockedServices } from '../../../../actions/services';
// @ts-expect-error TS(6142): Module '../../../../actions' was resolved to '/Use... Remove this comment to see the full error message
import { initSettings } from '../../../../actions';
import {
    splitByNewLine,
    countClientsStatistics,
    sortIp,
    getService,
// @ts-expect-error TS(6142): Module '../../../../helpers/helpers' was resolved ... Remove this comment to see the full error message
} from '../../../../helpers/helpers';
import { MODAL_TYPE, LOCAL_TIMEZONE_VALUE, TABLES_MIN_ROWS } from '../../../../helpers/constants';
// @ts-expect-error TS(6142): Module '../../../ui/Card' was resolved to '/Users/... Remove this comment to see the full error message
import Card from '../../../ui/Card';
// @ts-expect-error TS(6142): Module '../../../ui/CellWrap' was resolved to '/Us... Remove this comment to see the full error message
import CellWrap from '../../../ui/CellWrap';
// @ts-expect-error TS(6142): Module '../../../ui/LogsSearchLink' was resolved t... Remove this comment to see the full error message
import LogsSearchLink from '../../../ui/LogsSearchLink';
// @ts-expect-error TS(6142): Module '../Modal' was resolved to '/Users/igorloba... Remove this comment to see the full error message
import Modal from '../Modal';
import { LocalStorageHelper, LOCAL_STORAGE_KEYS } from '../../../../helpers/localStorageHelper';

const ClientsTable = ({
    clients,
    normalizedTopClients,
    isModalOpen,
    modalClientName,
    modalType,
    addClient,
    updateClient,
    deleteClient,
    toggleClientModal,
    processingAdding,
    processingDeleting,
    processingUpdating,
    getStats,
    supportedTags,
}: any) => {
    const [t] = useTranslation();
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();
    const services = useSelector((store: any) => store?.services);
    const globalSettings = useSelector((store: any) => store?.settings.settingsList) || {};
    const params = new URLSearchParams(location.search);
    const clientId = params.get('clientId');

    const { safesearch } = globalSettings;

    useEffect(() => {
        dispatch(getAllBlockedServices());
        dispatch(getBlockedServices());
        dispatch(initSettings());

        if (clientId) {
            toggleClientModal({
                type: MODAL_TYPE.ADD_CLIENT,
            });
        }
    }, []);

    const handleFormAdd = (values: any) => {
        addClient(values);
    };

    const handleFormUpdate = (values: any, name: any) => {
        updateClient(values, name);
    };

    const handleSubmit = (values: any) => {
        const config = { ...values };

        if (values) {
            if (values.blocked_services) {
                config.blocked_services = Object
                    .keys(values.blocked_services)
                    .filter((service) => values.blocked_services[service]);
            }

            if (values.upstreams && typeof values.upstreams === 'string') {
                config.upstreams = splitByNewLine(values.upstreams);
            } else {
                config.upstreams = [];
            }

            if (values.tags) {
                config.tags = values.tags.map((tag: any) => tag.value);
            } else {
                config.tags = [];
            }

            if (typeof values.upstreams_cache_size === 'string') {
                config.upstreams_cache_size = 0;
            }
        }

        if (modalType === MODAL_TYPE.EDIT_CLIENT) {
            handleFormUpdate(config, modalClientName);
        } else {
            handleFormAdd(config);
        }

        if (clientId) {
            history.push('/#clients');
        }
    };

    const getOptionsWithLabels = (options: any) => options.map((option: any) => ({
        value: option,
        label: option,
    }));

    const getClient = (name: any, clients: any) => {
        const client = clients.find((item: any) => name === item.name);

        if (client) {
            const {
                upstreams, tags, whois_info, ...values
            } = client;
            return {
                upstreams: (upstreams && upstreams.join('\n')) || '',
                tags: (tags && getOptionsWithLabels(tags)) || [],
                ...values,
            };
        }

        return {
            ids: [''],
            tags: [],
            use_global_settings: true,
            use_global_blocked_services: true,
            blocked_services_schedule: {
                time_zone: LOCAL_TIMEZONE_VALUE,
            },
            safe_search: { ...(safesearch || {}) },
        };
    };

    const handleDelete = (data: any) => {
        // eslint-disable-next-line no-alert
        if (window.confirm(t('client_confirm_delete', { key: data.name }))) {
            deleteClient(data);
            getStats();
        }
    };

    const handleClose = () => {
        toggleClientModal();

        if (clientId) {
            history.push('/#clients');
        }
    };

    const columns = [
        {
            Header: t('table_client'),
            accessor: 'ids',
            minWidth: 150,
            Cell: (row: any) => {
                const { value } = row;

                return (
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <div className="logs__row o-hidden">
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <span className="logs__text">
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            {value.map((address: any) => <div key={address} title={address}>
                                {address}
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            </div>)}
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        </span>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </div>
                );
            },
            sortMethod: sortIp,
        },
        {
            Header: t('table_name'),
            accessor: 'name',
            minWidth: 120,
            Cell: CellWrap,
        },
        {
            Header: t('settings'),
            accessor: 'use_global_settings',
            minWidth: 120,
            Cell: ({
                value,
            }: any) => {
                const title = value ? (
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Trans>settings_global</Trans>
                ) : (
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Trans>settings_custom</Trans>
                );

                return (
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <div className="logs__row o-hidden">
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <div className="logs__text">{title}</div>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </div>
                );
            },
        },
        {
            Header: t('blocked_services'),
            accessor: 'blocked_services',
            minWidth: 180,
            Cell: (row: any) => {
                const { value, original } = row;

                if (original.use_global_blocked_services) {
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    return <Trans>settings_global</Trans>;
                }

                if (value && services.allServices) {
                    return (
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <div className="logs__row logs__row--icons">
                            {value.map((service: any) => {
                                const serviceInfo = getService(services.allServices, service);

                                if (serviceInfo?.icon_svg) {
                                    return (
                                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                                        <div
                                            key={serviceInfo.name}
                                            dangerouslySetInnerHTML={{
                                                __html: window.atob(serviceInfo.icon_svg),
                                            }}
                                            className="service__icon service__icon--table"
                                            title={serviceInfo.name}
                                        />
                                    );
                                }

                                return null;
                            })}
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        </div>
                    );
                }

                return (
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <div className="logs__row logs__row--icons">
                        –
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </div>
                );
            },
        },
        {
            Header: t('upstreams'),
            accessor: 'upstreams',
            minWidth: 120,
            Cell: ({
                value,
            }: any) => {
                const title = value && value.length > 0 ? (
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Trans>settings_custom</Trans>
                ) : (
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Trans>settings_global</Trans>
                );

                return (
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <div className="logs__row o-hidden">
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <div className="logs__text">{title}</div>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </div>
                );
            },
        },
        {
            Header: t('tags_title'),
            accessor: 'tags',
            minWidth: 140,
            Cell: (row: any) => {
                const { value } = row;

                if (!value || value.length < 1) {
                    return '–';
                }

                return (
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <div className="logs__row o-hidden">
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <span className="logs__text">
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            {value.map((tag: any) => <div key={tag} title={tag} className="logs__tag small">
                                {tag}
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            </div>)}
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        </span>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </div>
                );
            },
        },
        {
            Header: t('requests_count'),
            id: 'statistics',
            accessor: (row: any) => countClientsStatistics(
                row.ids,
                normalizedTopClients.auto,
            ),
            sortMethod: (a: any, b: any) => b - a,
            minWidth: 120,
            Cell: (row: any) => {
                // @ts-expect-error TS(2554): Expected 2-3 arguments, but got 1.
                const content = CellWrap(row);

                if (!row.value) {
                    return content;
                }

                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                return <LogsSearchLink search={row.original.ids[0]}>{content}</LogsSearchLink>;
            },
        },
        {
            Header: t('actions_table_header'),
            accessor: 'actions',
            maxWidth: 100,
            sortable: false,
            resizable: false,
            Cell: (row: any) => {
                const clientName = row.original.name;

                return (
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <div className="logs__row logs__row--center">
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <button
                            type="button"
                            className="btn btn-icon btn-outline-primary btn-sm mr-2"
                            onClick={() => toggleClientModal({
                                type: MODAL_TYPE.EDIT_CLIENT,
                                name: clientName,
                            })
                            }
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
                            onClick={() => handleDelete({ name: clientName })}
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
    ];

    const currentClientData = getClient(modalClientName, clients);
    const tagsOptions = getOptionsWithLabels(supportedTags);

    return (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Card
            title={t('clients_title')}
            subtitle={t('clients_desc')}
            bodyType="card-body box-body--settings"
        >
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <ReactTable
                    data={clients || []}
                    columns={columns}
                    defaultSorted={[
                        {
                            id: 'statistics',
                            asc: true,
                        },
                    ]}
                    className="-striped -highlight card-table-overflow"
                    showPagination
                    defaultPageSize={LocalStorageHelper.getItem(LOCAL_STORAGE_KEYS.CLIENTS_PAGE_SIZE) || 10}
                    onPageSizeChange={(size: any) => LocalStorageHelper.setItem(LOCAL_STORAGE_KEYS.CLIENTS_PAGE_SIZE, size)}
                    minRows={TABLES_MIN_ROWS}
                    ofText="/"
                    previousText={t('previous_btn')}
                    nextText={t('next_btn')}
                    pageText={t('page_table_footer_text')}
                    rowsText={t('rows_table_footer_text')}
                    loadingText={t('loading_table_status')}
                    noDataText={t('clients_not_found')}
                />
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <button
                    type="button"
                    className="btn btn-success btn-standard mt-3"
                    onClick={() => toggleClientModal(MODAL_TYPE.ADD_FILTERS)}
                    disabled={processingAdding}
                >
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Trans>client_add</Trans>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </button>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Modal
                    isModalOpen={isModalOpen}
                    modalType={modalType}
                    handleClose={handleClose}
                    currentClientData={currentClientData}
                    handleSubmit={handleSubmit}
                    processingAdding={processingAdding}
                    processingUpdating={processingUpdating}
                    tagsOptions={tagsOptions}
                    clientId={clientId}
                />
            </>
        </Card>
    );
};

ClientsTable.propTypes = {
    clients: PropTypes.array.isRequired,
    normalizedTopClients: PropTypes.object.isRequired,
    toggleClientModal: PropTypes.func.isRequired,
    deleteClient: PropTypes.func.isRequired,
    addClient: PropTypes.func.isRequired,
    updateClient: PropTypes.func.isRequired,
    isModalOpen: PropTypes.bool.isRequired,
    modalType: PropTypes.string.isRequired,
    modalClientName: PropTypes.string.isRequired,
    processingAdding: PropTypes.bool.isRequired,
    processingDeleting: PropTypes.bool.isRequired,
    processingUpdating: PropTypes.bool.isRequired,
    getStats: PropTypes.func.isRequired,
    supportedTags: PropTypes.array.isRequired,
};

export default ClientsTable;
