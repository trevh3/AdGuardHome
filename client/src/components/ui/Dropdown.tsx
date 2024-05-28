import React, { Component } from 'react';
import classnames from 'classnames';
import { withTranslation } from 'react-i18next';

import enhanceWithClickOutside from 'react-click-outside';

import './Dropdown.css';

interface DropdownProps {
    label: string;
    children: React.ReactNode;
    controlClassName: React.ReactNode;
    menuClassName: string;
    baseClassName: string;
    icon?: string;
}

class Dropdown extends Component<DropdownProps> {
    state = {
        isOpen: false,
    };

    toggleDropdown = () => {
        this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
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

            <div className={dropdownClass}>

                <a
                    className={controlClassName}
                    aria-expanded={ariaSettings}
                    onClick={this.toggleDropdown}
                >
                    {icon && (

                        <svg className="nav-icon">

                            <use xlinkHref={`#${icon}`} />
                        </svg>
                    )}
                    {label}
                </a>

                <div className={dropdownMenuClass} onClick={this.hideDropdown}>
                    {children}
                </div>
            </div>
        );
    }
}

Dropdown.defaultProps = {
    baseClassName: 'dropdown',
    menuClassName: 'dropdown-menu dropdown-menu-arrow',
    controlClassName: '',
};

export default withTranslation()(enhanceWithClickOutside(Dropdown));
