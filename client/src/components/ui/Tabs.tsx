// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';
import classnames from 'classnames';
// @ts-expect-error TS(6142): Module './Tab' was resolved to '/Users/igorlobanov... Remove this comment to see the full error message
import Tab from './Tab';
import './Tabs.css';

const Tabs = (props: any) => {
    const {
        tabs, controlClass, activeTabLabel, setActiveTabLabel, children: activeTab,
    } = props;

    const onClickTabControl = (tabLabel: any) => setActiveTabLabel(tabLabel);

    const getControlClass = classnames({
        tabs__controls: true,
        [`tabs__controls--${controlClass}`]: controlClass,
    });

    return (
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <div className="tabs">
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <div className={getControlClass}>
                {Object.values(tabs)
                    .map((props) => {
                        // @ts-expect-error TS(2339): Property 'title' does not exist on type 'unknown'.
                        // eslint-disable-next-line react/prop-types
                        const { title, label = title } = props;
                        return (
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <Tab
                                key={label}
                                label={label}
                                title={title}
                                activeTabLabel={activeTabLabel}
                                onClick={onClickTabControl}
                            />
                        );
                    })}
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </div>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <div className="tabs__content">
                {activeTab}
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </div>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </div>
    );
};

Tabs.propTypes = {
    controlClass: PropTypes.string,
    tabs: PropTypes.object.isRequired,
    activeTabLabel: PropTypes.string.isRequired,
    setActiveTabLabel: PropTypes.func.isRequired,
    children: PropTypes.element.isRequired,
};

export default Tabs;
