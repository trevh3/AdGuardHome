// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import './Loading.css';

const Loading = ({
    className,
    text,
}: any) => {
    const { t } = useTranslation();
    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    return <div className={classNames('loading', className)}>{t(text)}</div>;
};

Loading.propTypes = {
    className: PropTypes.string,
    text: PropTypes.string,
};

export default Loading;
