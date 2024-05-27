import classNames from 'classnames';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import propTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const HeaderCell = ({
    content,
    className,
}: any, idx: any) => {
    const { t } = useTranslation();
    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    return <div
            key={idx}
            className={classNames('logs__cell--header__item logs__cell logs__text--bold', className)}
            role="columnheader"
    >
        {typeof content === 'string' ? t(content) : content}
    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    </div>;
};

HeaderCell.propTypes = {
    content: propTypes.oneOfType([propTypes.string, propTypes.element]).isRequired,
    className: propTypes.string,
};

export default HeaderCell;
