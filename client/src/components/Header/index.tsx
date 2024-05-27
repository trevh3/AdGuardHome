// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React, { useState } from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Link, useLocation } from 'react-router-dom';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { shallowEqual, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import classnames from 'classnames';
// @ts-expect-error TS(6142): Module './Menu' was resolved to '/Users/igorlobano... Remove this comment to see the full error message
import Menu from './Menu';
// @ts-expect-error TS(2307): Cannot find module '../ui/svg/logo.svg' or its cor... Remove this comment to see the full error message
import logo from '../ui/svg/logo.svg';
import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { t } = useTranslation();

    const {
        protectionEnabled,
        processing,
        isCoreRunning,
        processingProfile,
        name,
    } = useSelector((state: any) => state.dashboard, shallowEqual);

    const { pathname } = useLocation();

    const toggleMenuOpen = () => {
        setIsMenuOpen((isMenuOpen: any) => !isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const badgeClass = classnames('badge dns-status', {
        'badge-success': protectionEnabled,
        'badge-danger': !protectionEnabled,
    });

    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    return <div className="header">
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <div className="header__container">
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <div className="header__row">
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <div
                    className="header-toggler d-lg-none ml-lg-0 collapsed"
                    onClick={toggleMenuOpen}
                >
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <span className="header-toggler-icon" />
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </div>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <div className="header__column">
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <div className="d-flex align-items-center">
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <Link to="/" className="nav-link pl-0 pr-1">
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            <img src={logo} alt="AdGuard Home logo" className="header-brand-img" />
                        </Link>
                        {!processing && isCoreRunning
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        && <span className={badgeClass}
                        >{t(protectionEnabled ? 'on' : 'off')}
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        </span>}
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </div>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </div>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Menu
                    pathname={pathname}
                    isMenuOpen={isMenuOpen}
                    closeMenu={closeMenu}
                />
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <div className="header__column">
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <div className="header__right">
                        {!processingProfile && name
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        && <a href="control/logout" className="btn btn-sm btn-outline-secondary">
                            {t('sign_out')}
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        </a>}
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </div>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </div>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </div>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </div>
    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    </div>;
};

export default Header;
