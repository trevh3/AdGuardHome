// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React, { Component } from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withTranslation } from 'react-i18next';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import enhanceWithClickOutside from 'react-click-outside';

import './Dropdown.css';

class Dropdown extends Component {
    props: any;

    setState: any;

    state = {
        isOpen: false,
    };

    toggleDropdown = () => {
        this.setState((prevState: any) => ({
            isOpen: !prevState.isOpen,
        }));
    };

    hideDropdown = () => {
        this.setState({ isOpen: false });
    };

    handleClickOutside = () => {
        if (this.state.isOpen) {
            this.hideDropdown();
        }
    };

    render() {
        const {
            label,
            controlClassName,
            menuClassName,
            baseClassName,
            icon,
            children,
        } = this.props;

        const { isOpen } = this.state;

        const dropdownClass = classnames({
            [baseClassName]: true,
            show: isOpen,
        });

        const dropdownMenuClass = classnames({
            [menuClassName]: true,
            show: isOpen,
        });

        const ariaSettings = isOpen ? 'true' : 'false';

        return (
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <div className={dropdownClass}>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <a
                    className={controlClassName}
                    aria-expanded={ariaSettings}
                    onClick={this.toggleDropdown}
                >
                    {icon && (
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <svg className="nav-icon">
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            <use xlinkHref={`#${icon}`} />
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        </svg>
                    )}
                    {label}
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </a>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <div className={dropdownMenuClass} onClick={this.hideDropdown}>
                    {children}
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </div>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </div>
        );
    }
}

// @ts-expect-error TS(2339): Property 'defaultProps' does not exist on type 'ty... Remove this comment to see the full error message
Dropdown.defaultProps = {
    baseClassName: 'dropdown',
    menuClassName: 'dropdown-menu dropdown-menu-arrow',
    controlClassName: '',
};

// @ts-expect-error TS(2339): Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
Dropdown.propTypes = {
    label: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    controlClassName: PropTypes.node.isRequired,
    menuClassName: PropTypes.string.isRequired,
    baseClassName: PropTypes.string.isRequired,
    icon: PropTypes.string,
};

export default withTranslation()(enhanceWithClickOutside(Dropdown));
