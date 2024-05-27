// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';

import { REPOSITORY, PRIVACY_POLICY_LINK, THEMES } from '../../helpers/constants';
import { LANGUAGES } from '../../helpers/twosky';
import i18n from '../../i18n';

// @ts-expect-error TS(6142): Module './Version' was resolved to '/Users/igorlob... Remove this comment to see the full error message
import Version from './Version';
import './Footer.css';
import './Select.css';
// @ts-expect-error TS(6142): Module '../../helpers/helpers' was resolved to '/U... Remove this comment to see the full error message
import { setHtmlLangAttr, setUITheme } from '../../helpers/helpers';
// @ts-expect-error TS(6142): Module '../../actions' was resolved to '/Users/igo... Remove this comment to see the full error message
import { changeTheme } from '../../actions';

const linksData = [
    {
        href: REPOSITORY.URL,
        name: 'homepage',
    },
    {
        href: PRIVACY_POLICY_LINK,
        name: 'privacy_policy',
    },
    {
        href: REPOSITORY.ISSUES,
        className: 'btn btn-outline-primary btn-sm footer__link--report',
        name: 'report_an_issue',
    },
];

const Footer = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const currentTheme = useSelector((state: any) => (state.dashboard ? state.dashboard.theme : THEMES.auto));
    const profileName = useSelector((state: any) => (state.dashboard ? state.dashboard.name : ''));
    const isLoggedIn = profileName !== '';
    const [currentThemeLocal, setCurrentThemeLocal] = useState(THEMES.auto);

    const getYear = () => {
        const today = new Date();
        return today.getFullYear();
    };

    const changeLanguage = (event: any) => {
        const { value } = event.target;
        i18n.changeLanguage(value);
        setHtmlLangAttr(value);
    };

    const onThemeChange = (value: any) => {
        if (isLoggedIn) {
            dispatch(changeTheme(value));
        } else {
            setUITheme(value);
            setCurrentThemeLocal(value);
        }
    };

    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    const renderCopyright = () => <div className="footer__column">
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <div className="footer__copyright">
            {t('copyright')} &copy; {getYear()}{' '}
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <a target="_blank" rel="noopener noreferrer" href="https://link.adtidy.org/forward.html?action=home&from=ui&app=home">AdGuard</a>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </div>
    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    </div>;

    const renderLinks = (linksData: any) => linksData.map(({
        name,
        href,
        className = '',
    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    }: any) => <a
            key={name}
            href={href}
            className={cn('footer__link', className)}
            target="_blank"
            rel="noopener noreferrer"
        >
            {t(name)}
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </a>);

    const renderThemeButtons = () => {
        const currentValue = isLoggedIn ? currentTheme : currentThemeLocal;

        const content = {
            auto: {
                desc: t('theme_auto_desc'),
                icon: '#auto',
            },
            dark: {
                desc: t('theme_dark_desc'),
                icon: '#dark',
            },
            light: {
                desc: t('theme_light_desc'),
                icon: '#light',
            },
        };

        return (
            Object.values(THEMES)
                .map((theme) => (
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <button
                        key={theme}
                        type="button"
                        className="btn btn-sm btn-secondary footer__theme-button"
                        onClick={() => onThemeChange(theme)}
                        // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
                        title={content[theme].desc}
                    >
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <svg
                            className={cn(
                                'footer__theme-icon',
                                { 'footer__theme-icon--active': currentValue === theme },
                            )}
                        >
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            <use xlinkHref={content[theme].icon} />
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        </svg>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </button>
                ))
        );
    };

    return (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <footer className="footer">
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <div className="container">
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <div className="footer__row">
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <div className="footer__column footer__column--links">
                            {renderLinks(linksData)}
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        </div>
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <div className="footer__column footer__column--theme">
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            <div className="footer__themes">
                                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                                <div className="btn-group">
                                    {renderThemeButtons()}
                                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                                </div>
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            </div>
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        </div>
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <div className="footer__column footer__column--language">
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            <select
                                className="form-control select select--language"
                                value={i18n.language}
                                onChange={changeLanguage}
                            >
                                {Object.keys(LANGUAGES)
                                    .map((lang) => (
                                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                                        <option key={lang} value={lang}>
                                            {LANGUAGES[lang]}
                                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                                        </option>
                                    ))}
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            </select>
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        </div>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </div>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </div>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </footer>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <div className="footer">
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <div className="container">
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <div className="footer__row">
                        {renderCopyright()}
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <div className="footer__column footer__column--language">
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <Version />
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        </div>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </div>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </div>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </div>
        </>
    );
};

export default Footer;
