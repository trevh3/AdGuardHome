// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React, { Component, Fragment } from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';
import { Trans, withTranslation } from 'react-i18next';

// @ts-expect-error TS(6142): Module './Table' was resolved to '/Users/igorloban... Remove this comment to see the full error message
import Table from './Table';
// @ts-expect-error TS(6142): Module './Modal' was resolved to '/Users/igorloban... Remove this comment to see the full error message
import Modal from './Modal';
// @ts-expect-error TS(6142): Module '../../ui/Card' was resolved to '/Users/igo... Remove this comment to see the full error message
import Card from '../../ui/Card';
// @ts-expect-error TS(6142): Module '../../ui/PageTitle' was resolved to '/User... Remove this comment to see the full error message
import PageTitle from '../../ui/PageTitle';
import { MODAL_TYPE } from '../../../helpers/constants';

class Rewrites extends Component {
    props: any;

    componentDidMount() {
        this.props.getRewritesList();
    }

    handleDelete = (values: any) => {
        // eslint-disable-next-line no-alert
        if (window.confirm(this.props.t('rewrite_confirm_delete', { key: values.domain }))) {
            this.props.deleteRewrite(values);
        }
    };

    handleSubmit = (values: any) => {
        const { modalType, currentRewrite } = this.props.rewrites;

        if (modalType === MODAL_TYPE.EDIT_REWRITE && currentRewrite) {
            this.props.updateRewrite({
                target: currentRewrite,
                update: values,
            });
        } else {
            this.props.addRewrite(values);
        }
    };

    render() {
        const {
            t,
            rewrites,
            toggleRewritesModal,
        } = this.props;

        const {
            list,
            isModalOpen,
            processing,
            processingAdd,
            processingDelete,
            processingUpdate,
            modalType,
            currentRewrite,
        } = rewrites;

        return (
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Fragment>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <PageTitle
                    title={t('dns_rewrites')}
                    subtitle={t('rewrite_desc')}
                />
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Card
                    id="rewrites"
                    bodyType="card-body box-body--settings"
                >
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Fragment>
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <Table
                            list={list}
                            processing={processing}
                            processingAdd={processingAdd}
                            processingDelete={processingDelete}
                            processingUpdate={processingUpdate}
                            handleDelete={this.handleDelete}
                            toggleRewritesModal={toggleRewritesModal}
                        />

                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <button
                            type="button"
                            className="btn btn-success btn-standard mt-3"
                            onClick={() => toggleRewritesModal({ type: MODAL_TYPE.ADD_REWRITE })}
                            disabled={processingAdd}
                        >
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <Trans>rewrite_add</Trans>
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        </button>

                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <Modal
                            isModalOpen={isModalOpen}
                            modalType={modalType}
                            toggleRewritesModal={toggleRewritesModal}
                            handleSubmit={this.handleSubmit}
                            processingAdd={processingAdd}
                            processingDelete={processingDelete}
                            processingUpdate={processingUpdate}
                            currentRewrite={currentRewrite}
                        />
                    </Fragment>
                </Card>
            </Fragment>
        );
    }
}

// @ts-expect-error TS(2339): Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
Rewrites.propTypes = {
    t: PropTypes.func.isRequired,
    getRewritesList: PropTypes.func.isRequired,
    toggleRewritesModal: PropTypes.func.isRequired,
    addRewrite: PropTypes.func.isRequired,
    deleteRewrite: PropTypes.func.isRequired,
    updateRewrite: PropTypes.func.isRequired,
    rewrites: PropTypes.object.isRequired,
};

export default withTranslation()(Rewrites);
