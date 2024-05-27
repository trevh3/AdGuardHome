// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React, { Component } from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { NavLink } from 'react-router-dom';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import enhanceWithClickOutside from 'react-click-outside';
import classnames from 'classnames';
import { Trans, withTranslation } from 'react-i18next';
import { SETTINGS_URLS, FILTERS_URLS, MENU_URLS } from '../../helpers/constants';
// @ts-expect-error TS(6142): Module '../ui/Dropdown' was resolved to '/Users/ig... Remove this comment to see the full error message
import Dropdown from '../ui/Dropdown';

const MENU_ITEMS = [
    {
        route: MENU_URLS.root,
        exact: true,
        icon: 'dashboard',
        text: 'dashboard',
        order: 0,
    },

    // Settings dropdown should have visual order 1

    // Filters dropdown should have visual order 2

    {
        route: MENU_URLS.logs,
        icon: 'log',
        text: 'query_log',
        order: 3,
    },
    {
        route: MENU_URLS.guide,
        icon: 'setup',
        text: 'setup_guide',
        order: 4,
    },
];

const SETTINGS_ITEMS = [
    {
        route: SETTINGS_URLS.settings,
        text: 'general_settings',
    },
    {
        route: SETTINGS_URLS.dns,
        text: 'dns_settings',
    },
    {
        route: SETTINGS_URLS.encryption,
        text: 'encryption_settings',
    },
    {
        route: SETTINGS_URLS.clients,
        text: 'client_settings',
    },
    {
        route: SETTINGS_URLS.dhcp,
        text: 'dhcp_settings',
    },
];

const FILTERS_ITEMS = [
    {
        route: FILTERS_URLS.dns_blocklists,
        text: 'dns_blocklists',
    },
    {
        route: FILTERS_URLS.dns_allowlists,
        text: 'dns_allowlists',
    },
    {
        route: FILTERS_URLS.dns_rewrites,
        text: 'dns_rewrites',
    },
    {
        route: FILTERS_URLS.blocked_services,
        text: 'blocked_services',
    },
    {
        route: FILTERS_URLS.custom_rules,
        text: 'custom_filtering_rules',
    },
];

class Menu extends Component {
    props: any;

    handleClickOutside = () => {
        this.props.closeMenu();
    };

    closeMenu = () => {
        this.props.closeMenu();
    };

    getActiveClassForDropdown = (URLS: any) => {
        const isActivePage = Object.values(URLS)
            .some((item) => item === this.props.pathname);

        return isActivePage ? 'active' : '';
    };

    getNavLink = ({
        route,
        exact,
        text,
        order,
        className,
        icon,
    }: any) => (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <NavLink
            to={route}
            key={route}
            exact={exact || false}
            className={`order-${order} ${className}`}
            onClick={this.closeMenu}
        >
            {icon && (
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <svg className="nav-icon">
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <use xlinkHref={`#${icon}`} />
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </svg>
            )}
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Trans>{text}</Trans>
        </NavLink>
    );

    getDropdown = ({
        label,
        order,
        URLS,
        icon,
        ITEMS,
    }: any) => (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Dropdown
            label={this.props.t(label)}
            baseClassName='dropdown'
            controlClassName={`nav-link ${this.getActiveClassForDropdown(URLS)}`}
            icon={icon}>
            {ITEMS.map((item: any) => this.getNavLink({
                ...item,
                order,
                className: 'dropdown-item',
            }))}
        </Dropdown>
    );

    render() {
        const menuClass = classnames({
            'header__column mobile-menu': true,
            'mobile-menu--active': this.props.isMenuOpen,
        });
        return (
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <div className={menuClass}>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <ul className="nav nav-tabs border-0 flex-column flex-lg-row flex-nowrap">
                        {MENU_ITEMS.map((item) => (
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            <li
                                className={`nav-item order-${item.order}`}
                                key={item.text}
                                onClick={this.closeMenu}
                            >
                                {this.getNavLink({
                                    ...item,
                                    className: 'nav-link',
                                })}
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            </li>
                        ))}
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <li className="nav-item order-1">
                            {this.getDropdown({
                                order: 1,
                                label: 'settings',
                                icon: 'settings',
                                URLS: SETTINGS_URLS,
                                ITEMS: SETTINGS_ITEMS,
                            })}
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        </li>
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <li className="nav-item order-2">
                            {this.getDropdown({
                                order: 2,
                                label: 'filters',
                                icon: 'filters',
                                URLS: FILTERS_URLS,
                                ITEMS: FILTERS_ITEMS,
                            })}
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        </li>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </ul>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </div>
            </>
        );
    }
}

// @ts-expect-error TS(2339): Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
Menu.propTypes = {
    isMenuOpen: PropTypes.bool.isRequired,
    closeMenu: PropTypes.func.isRequired,
    pathname: PropTypes.string.isRequired,
    t: PropTypes.func,
};

export default withTranslation()(enhanceWithClickOutside(Menu));
