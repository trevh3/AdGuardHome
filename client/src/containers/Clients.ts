// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { connect } from 'react-redux';
// @ts-expect-error TS(6142): Module '../actions' was resolved to '/Users/igorlo... Remove this comment to see the full error message
import { getClients } from '../actions';
import { getStats } from '../actions/stats';
import {
    addClient, updateClient, deleteClient, toggleClientModal,
} from '../actions/clients';
// @ts-expect-error TS(6142): Module '../components/Settings/Clients' was resolv... Remove this comment to see the full error message
import Clients from '../components/Settings/Clients';

const mapStateToProps = (state: any) => {
    const { dashboard, clients, stats } = state;
    const props = {
        dashboard,
        clients,
        stats,
    };
    return props;
};

const mapDispatchToProps = {
    getClients,
    getStats,
    addClient,
    updateClient,
    deleteClient,
    toggleClientModal,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Clients);
