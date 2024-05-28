import React, { Component, Fragment } from 'react';
import { withTranslation } from 'react-i18next';

import { ClientsTable } from './ClientsTable';

import AutoClients from './AutoClients';

import PageTitle from '../../ui/PageTitle';

import Loading from '../../ui/Loading';

interface ClientsProps {
    t: (...args: unknown[]) => unknown;
    dashboard: object;
    stats: object;
    clients: object;
    toggleClientModal: (...args: unknown[]) => unknown;
    deleteClient: (...args: unknown[]) => unknown;
    addClient: (...args: unknown[]) => unknown;
    updateClient: (...args: unknown[]) => unknown;
    getClients: (...args: unknown[]) => unknown;
    getStats: (...args: unknown[]) => unknown;
}

class Clients extends Component<ClientsProps> {
    componentDidMount() {
        this.props.getClients();

        this.props.getStats();
    }

    render() {
        const {

            t,

            dashboard,

            stats,

            clients,

            addClient,

            updateClient,

            deleteClient,

            toggleClientModal,

            getStats,
        } = this.props;

        return (

            <Fragment>

                <PageTitle title={t('client_settings')} />

                {(stats.processingStats || dashboard.processingClients) && <Loading />}
                {!stats.processingStats && !dashboard.processingClients && (

                    <Fragment>

                        <ClientsTable
                            clients={dashboard.clients}
                            normalizedTopClients={stats.normalizedTopClients}
                            isModalOpen={clients.isModalOpen}
                            modalClientName={clients.modalClientName}
                            modalType={clients.modalType}
                            addClient={addClient}
                            updateClient={updateClient}
                            deleteClient={deleteClient}
                            toggleClientModal={toggleClientModal}
                            processingAdding={clients.processingAdding}
                            processingDeleting={clients.processingDeleting}
                            processingUpdating={clients.processingUpdating}
                            getStats={getStats}
                            supportedTags={dashboard.supportedTags}
                        />

                        <AutoClients

                            autoClients={dashboard.autoClients}
                            normalizedTopClients={stats.normalizedTopClients}
                        />
                    </Fragment>
                )}
            </Fragment>
        );
    }
}

export default withTranslation()(Clients);
