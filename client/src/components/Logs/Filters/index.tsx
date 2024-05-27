// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { useDispatch } from 'react-redux';
// @ts-expect-error TS(6142): Module './Form' was resolved to '/Users/igorlobano... Remove this comment to see the full error message
import Form from './Form';
import { refreshFilteredLogs } from '../../../actions/queryLogs';
import { addSuccessToast } from '../../../actions/toasts';

const Filters = ({
    filter,
    setIsLoading,
}: any) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const refreshLogs = async () => {
        setIsLoading(true);
        await dispatch(refreshFilteredLogs());
        dispatch(addSuccessToast('query_log_updated'));
        setIsLoading(false);
    };

    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    return <div className="page-header page-header--logs">
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <h1 className="page-title page-title--large">
            {t('query_log')}
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <button
                    type="button"
                    className="btn btn-icon--green logs__refresh"
                    title={t('refresh_btn')}
                    onClick={refreshLogs}
            >
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <svg className="icons icon--24">
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <use xlinkHref="#update" />
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </svg>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </button>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </h1>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Form
                responseStatusClass="d-sm-block"
                initialValues={filter}
                setIsLoading={setIsLoading}
        />
    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    </div>;
};

Filters.propTypes = {
    filter: PropTypes.object.isRequired,
    processingGetLogs: PropTypes.bool.isRequired,
    setIsLoading: PropTypes.func.isRequired,
};

export default Filters;
