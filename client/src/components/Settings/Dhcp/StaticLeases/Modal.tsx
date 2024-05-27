// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';
import { Trans, withTranslation } from 'react-i18next';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import ReactModal from 'react-modal';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
// @ts-expect-error TS(6142): Module './Form' was resolved to '/Users/igorlobano... Remove this comment to see the full error message
import Form from './Form';
// @ts-expect-error TS(6142): Module '../../../../actions' was resolved to '/Use... Remove this comment to see the full error message
import { toggleLeaseModal } from '../../../../actions';
import { MODAL_TYPE } from '../../../../helpers/constants';

const Modal = ({
    isModalOpen,
    modalType,
    handleSubmit,
    processingAdding,
    cidr,
    rangeStart,
    rangeEnd,
    gatewayIp,
}: any) => {
    const dispatch = useDispatch();

    const toggleModal = () => dispatch(toggleLeaseModal());
    const leaseInitialData = useSelector((state: any) => state.dhcp.leaseModalConfig, shallowEqual) || {};

    return (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <ReactModal
            className="Modal__Bootstrap modal-dialog modal-dialog-centered modal-dialog--clients"
            closeTimeoutMS={0}
            isOpen={isModalOpen}
            onRequestClose={toggleModal}
        >
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <div className="modal-content">
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <div className="modal-header">
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <h4 className="modal-title">
                        {modalType === MODAL_TYPE.EDIT_LEASE ? (
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <Trans>dhcp_edit_static_lease</Trans>
                        ) : (
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <Trans>dhcp_new_static_lease</Trans>
                        )}
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </h4>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <button type="button" className="close" onClick={toggleModal}>
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <span className="sr-only">Close</span>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </button>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </div>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Form
                    initialValues={{
                        mac: leaseInitialData.mac ?? '',
                        ip: leaseInitialData.ip ?? '',
                        hostname: leaseInitialData.hostname ?? '',
                        cidr,
                        rangeStart,
                        rangeEnd,
                        gatewayIp,
                    }}
                    onSubmit={handleSubmit}
                    processingAdding={processingAdding}
                    cidr={cidr}
                    rangeStart={rangeStart}
                    rangeEnd={rangeEnd}
                    isEdit={modalType === MODAL_TYPE.EDIT_LEASE}
                />
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </div>
        </ReactModal>
    );
};

Modal.propTypes = {
    isModalOpen: PropTypes.bool.isRequired,
    modalType: PropTypes.string.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    processingAdding: PropTypes.bool.isRequired,
    cidr: PropTypes.string.isRequired,
    rangeStart: PropTypes.string,
    rangeEnd: PropTypes.string,
    gatewayIp: PropTypes.string,
};

export default withTranslation()(Modal);
