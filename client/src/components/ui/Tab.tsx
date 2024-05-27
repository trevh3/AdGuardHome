// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { useTranslation } from 'react-i18next';

const Tab = ({
    activeTabLabel,
    label,
    title,
    onClick,
}: any) => {
    const [t] = useTranslation();
    const handleClick = () => onClick(label);

    const tabClass = classnames({
        tab__control: true,
        'tab__control--active': activeTabLabel === label,
    });

    return (
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <div
            className={tabClass}
            onClick={handleClick}
        >
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <svg className="tab__icon">
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <use xlinkHref={`#${label.toLowerCase()}`} />
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </svg>
            {t(title || label)}
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </div>
    );
};

Tab.propTypes = {
    activeTabLabel: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    title: PropTypes.string,
};

export default Tab;
