// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React, { Component, Fragment } from 'react';
import { withTranslation } from 'react-i18next';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';

import { ClientsTable } from './ClientsTable';
// @ts-expect-error TS(6142): Module './AutoClients' was resolved to '/Users/igo... Remove this comment to see the full error message
import AutoClients from './AutoClients';
// @ts-expect-error TS(6142): Module '../../ui/PageTitle' was resolved to '/User... Remove this comment to see the full error message
import PageTitle from '../../ui/PageTitle';
// @ts-expect-error TS(6142): Module '../../ui/Loading' was resolved to '/Users/... Remove this comment to see the full error message
import Loading from '../../ui/Loading';

class Clients extends Component {
    props: any;

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
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Fragment>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <PageTitle title={t('client_settings')} />
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                {(stats.processingStats || dashboard.processingClients) && <Loading />}
                {!stats.processingStats && !dashboard.processingClients && (
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Fragment>
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
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
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
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

// @ts-expect-error TS(2339): Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
Clients.propTypes = {
    t: PropTypes.func.isRequired,
    dashboard: PropTypes.object.isRequired,
    stats: PropTypes.object.isRequired,
    clients: PropTypes.object.isRequired,
    toggleClientModal: PropTypes.func.isRequired,
    deleteClient: PropTypes.func.isRequired,
    addClient: PropTypes.func.isRequired,
    updateClient: PropTypes.func.isRequired,
    getClients: PropTypes.func.isRequired,
    getStats: PropTypes.func.isRequired,
};

export default withTranslation()(Clients);
