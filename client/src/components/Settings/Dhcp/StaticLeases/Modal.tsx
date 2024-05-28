import React from 'react';
import { Trans, withTranslation } from 'react-i18next';

import ReactModal from 'react-modal';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import Form from './Form';

import { toggleLeaseModal } from '../../../../actions';
import { MODAL_TYPE } from '../../../../helpers/constants';

interface ModalProps {
    isModalOpen: boolean;
    modalType: string;
    handleSubmit: (...args: unknown[]) => unknown;
    processingAdding: boolean;
    cidr: string;
    rangeStart?: string;
    rangeEnd?: string;
    gatewayIp?: string;
}

const Modal = ({
    isModalOpen,
    modalType,
    handleSubmit,
    processingAdding,
    cidr,
    rangeStart,
    rangeEnd,
    gatewayIp
}: ModalProps) => {
    const dispatch = useDispatch();

    const toggleModal = () => dispatch(toggleLeaseModal());

    const leaseInitialData = useSelector((state) => state.dhcp.leaseModalConfig, shallowEqual) || {};

    return (

        <ReactModal
            className="Modal__Bootstrap modal-dialog modal-dialog-centered modal-dialog--clients"
            closeTimeoutMS={0}
            isOpen={isModalOpen}
            onRequestClose={toggleModal}
        >

            <div className="modal-content">

                <div className="modal-header">

                    <h4 className="modal-title">
                        {modalType === MODAL_TYPE.EDIT_LEASE ? (

                            <Trans>dhcp_edit_static_lease</Trans>
                        ) : (

                            <Trans>dhcp_new_static_lease</Trans>
                        )}
                    </h4>

                    <button type="button" className="close" onClick={toggleModal}>

                        <span className="sr-only">Close</span>
                    </button>
                </div>

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
            </div>
        </ReactModal>
    );
};

export default withTranslation()(Modal);
