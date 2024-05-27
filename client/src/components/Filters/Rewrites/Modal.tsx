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

const Modal = (props: any) => {
    const {
        isModalOpen,
        handleSubmit,
        toggleRewritesModal,
        processingAdd,
        processingDelete,
        modalType,
        currentRewrite,
    } = props;

    return (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <ReactModal
            className="Modal__Bootstrap modal-dialog modal-dialog-centered"
            closeTimeoutMS={0}
            isOpen={isModalOpen}
            onRequestClose={() => toggleRewritesModal()}
        >
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <div className="modal-content">
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <div className="modal-header">
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <h4 className="modal-title">
                        {modalType === MODAL_TYPE.EDIT_REWRITE ? (
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <Trans>rewrite_edit</Trans>
                        ) : (
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <Trans>rewrite_add</Trans>
                        )}
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </h4>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <button type="button" className="close" onClick={() => toggleRewritesModal()}>
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <span className="sr-only">Close</span>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </button>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </div>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Form
                    initialValues={{ ...currentRewrite }}
                    onSubmit={handleSubmit}
                    toggleRewritesModal={toggleRewritesModal}
                    processingAdd={processingAdd}
                    processingDelete={processingDelete}
                />
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </div>
        </ReactModal>
    );
};

Modal.propTypes = {
    isModalOpen: PropTypes.bool.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    toggleRewritesModal: PropTypes.func.isRequired,
    processingAdd: PropTypes.bool.isRequired,
    processingDelete: PropTypes.bool.isRequired,
    modalType: PropTypes.string.isRequired,
    currentRewrite: PropTypes.object,
};

export default withTranslation()(Modal);
