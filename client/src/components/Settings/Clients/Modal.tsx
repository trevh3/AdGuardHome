// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';
import { Trans, withTranslation } from 'react-i18next';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import ReactModal from 'react-modal';

import { MODAL_TYPE } from '../../../helpers/constants';
// @ts-expect-error TS(6142): Module './Form' was resolved to '/Users/igorlobano... Remove this comment to see the full error message
import Form from './Form';

const getInitialData = ({
    initial,
    modalType,
    clientId,
    clientName,
}: any) => {
    if (initial && initial.blocked_services) {
        const { blocked_services } = initial;
        const blocked = {};

        blocked_services.forEach((service: any) => {
            // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
            blocked[service] = true;
        });

        return {
            ...initial,
            blocked_services: blocked,
        };
    }

    if (modalType !== MODAL_TYPE.EDIT_CLIENT && clientId) {
        return {
            ...initial,
            name: clientName,
            ids: [clientId],
        };
    }

    return initial;
};

const Modal = ({
    isModalOpen,
    modalType,
    currentClientData,
    handleSubmit,
    handleClose,
    processingAdding,
    processingUpdating,
    tagsOptions,
    clientId,
    t,
}: any) => {
    const initialData = getInitialData({
        initial: currentClientData,
        modalType,
        clientId,
        clientName: t('client_name', { id: clientId }),
    });

    return (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <ReactModal
            className="Modal__Bootstrap modal-dialog modal-dialog-centered modal-dialog--clients"
            closeTimeoutMS={0}
            isOpen={isModalOpen}
            onRequestClose={handleClose}
        >
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <div className="modal-content">
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <div className="modal-header">
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <h4 className="modal-title">
                        {modalType === MODAL_TYPE.EDIT_CLIENT ? (
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <Trans>client_edit</Trans>
                        ) : (
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <Trans>client_new</Trans>
                        )}
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </h4>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <button type="button" className="close" onClick={handleClose}>
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <span className="sr-only">Close</span>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </button>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </div>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Form
                    initialValues={{ ...initialData }}
                    onSubmit={handleSubmit}
                    handleClose={handleClose}
                    processingAdding={processingAdding}
                    processingUpdating={processingUpdating}
                    tagsOptions={tagsOptions}
                />
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </div>
        </ReactModal>
    );
};

Modal.propTypes = {
    isModalOpen: PropTypes.bool.isRequired,
    modalType: PropTypes.string.isRequired,
    currentClientData: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleClose: PropTypes.func.isRequired,
    processingAdding: PropTypes.bool.isRequired,
    processingUpdating: PropTypes.bool.isRequired,
    tagsOptions: PropTypes.array.isRequired,
    t: PropTypes.func.isRequired,
    clientId: PropTypes.string,
};

export default withTranslation()(Modal);
