// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React, { useState } from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';
import { Trans, useTranslation } from 'react-i18next';
import i18next from 'i18next';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { useSelector } from 'react-redux';

import { MOBILE_CONFIG_LINKS } from '../../../helpers/constants';

// @ts-expect-error TS(6142): Module '../Tabs' was resolved to '/Users/igorloban... Remove this comment to see the full error message
import Tabs from '../Tabs';
// @ts-expect-error TS(6142): Module './MobileConfigForm' was resolved to '/User... Remove this comment to see the full error message
import MobileConfigForm from './MobileConfigForm';

const renderLi = ({
    label,
    components,
// @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
}: any) => <li key={label}>
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Trans components={components?.map((props: any) => {
        if (React.isValidElement(props)) {
            return props;
        }
        const {
            // eslint-disable-next-line react/prop-types
            href, target = '_blank', rel = 'noopener noreferrer', key = '0',
        } = props;

        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        return <a href={href} target={target} rel={rel} key={key}>link</a>;
    })}>
        {label}
    </Trans>
// @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
</li>;

const getDnsPrivacyList = () => [
    {
        title: 'Android',
        list: [
            {
                label: 'setup_dns_privacy_android_1',
            },
            {
                label: 'setup_dns_privacy_android_2',
                components: [
                    {
                        key: 0,
                        href: 'https://link.adtidy.org/forward.html?action=android&from=ui&app=home',
                    },
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <code key="1">text</code>,
                ],
            },
            {
                label: 'setup_dns_privacy_android_3',
                components: [
                    {
                        key: 0,
                        href: 'https://getintra.org/',
                    },
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <code key="1">text</code>,
                ],
            },
        ],
    },
    {
        title: 'iOS',
        list: [
            {
                label: 'setup_dns_privacy_ios_2',
                components: [
                    {
                        key: 0,
                        href: 'https://link.adtidy.org/forward.html?action=ios&from=ui&app=home',
                    },
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <code key="1">text</code>,
                ],
            },
            {
                label: 'setup_dns_privacy_ios_1',
                components: [
                    {
                        key: 0,
                        href: 'https://itunes.apple.com/app/id1452162351',
                    },
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <code key="1">text</code>,
                    {
                        key: 2,
                        href: 'https://dnscrypt.info/stamps',
                    },
                ],
            },
        ],
    },
    {
        title: 'setup_dns_privacy_other_title',
        list: [
            {
                label: 'setup_dns_privacy_other_1',
            },
            {
                label: 'setup_dns_privacy_other_2',
                components: [
                    {
                        key: 0,
                        href: 'https://github.com/AdguardTeam/dnsproxy',
                    },
                ],
            },
            {
                href: 'https://github.com/jedisct1/dnscrypt-proxy',
                label: 'setup_dns_privacy_other_3',
                components: [
                    {
                        key: 0,
                        href: 'https://github.com/jedisct1/dnscrypt-proxy',
                    },
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <code key="1">text</code>,
                ],
            },
            {
                label: 'setup_dns_privacy_other_4',
                components: [
                    {
                        key: 0,
                        href: 'https://support.mozilla.org/kb/firefox-dns-over-https',
                    },
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <code key="1">text</code>,
                ],
            },
            {
                label: 'setup_dns_privacy_other_5',
                components: [
                    {
                        key: 0,
                        href: 'https://dnscrypt.info/implementations',
                    },
                    {
                        key: 1,
                        href: 'https://dnsprivacy.org/wiki/display/DP/DNS+Privacy+Clients',
                    },
                ],
            },
        ],
    },
];

const renderDnsPrivacyList = ({
    title,
    list,
}: any) => (
    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    <div className="tab__paragraph" key={title}>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <strong>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Trans>{title}</Trans>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </strong>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <ul>
            {list.map(({
                label,
                components,
                renderComponent = renderLi,
            }: any) => (
                renderComponent({ label, components })
            ))}
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </ul>
    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    </div>
);

const getTabs = ({
    tlsAddress,
    httpsAddress,
    showDnsPrivacyNotice,
    serverName,
    portHttps,
    t,
}: any) => ({
    Router: {
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        // eslint-disable-next-line react/display-name
        getTitle: () => <p>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Trans>install_devices_router_desc</Trans>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </p>,
        title: 'Router',
        list: ['install_devices_router_list_1',
            'install_devices_router_list_2',
            'install_devices_router_list_3',
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            // eslint-disable-next-line react/jsx-key
            <Trans components={[
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <a href="#dhcp" key="0">
                    link
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </a>,
            ]}>install_devices_router_list_4</Trans>,
        ],
    },
    Windows: {
        title: 'Windows',
        list: ['install_devices_windows_list_1',
            'install_devices_windows_list_2',
            'install_devices_windows_list_3',
            'install_devices_windows_list_4',
            'install_devices_windows_list_5',
            'install_devices_windows_list_6'],
    },
    macOS: {
        title: 'macOS',
        list: ['install_devices_macos_list_1',
            'install_devices_macos_list_2',
            'install_devices_macos_list_3',
            'install_devices_macos_list_4'],
    },
    Android: {
        title: 'Android',
        list: ['install_devices_android_list_1',
            'install_devices_android_list_2',
            'install_devices_android_list_3',
            'install_devices_android_list_4',
            'install_devices_android_list_5'],
    },
    iOS: {
        title: 'iOS',
        list: ['install_devices_ios_list_1',
            'install_devices_ios_list_2',
            'install_devices_ios_list_3',
            'install_devices_ios_list_4'],
    },
    dns_privacy: {
        title: 'dns_privacy',
        getTitle: function Title() {
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            return <div label="dns_privacy" title={t('dns_privacy')}>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <div className="tab__text">
                {tlsAddress?.length > 0 && (
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <div className="tab__paragraph">
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <Trans
                            values={{ address: tlsAddress[0] }}
                            components={[
                                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                                <strong key="0">text</strong>,
                                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                                <code key="1">text</code>,
                            ]}
                        >
                            setup_dns_privacy_1
                        </Trans>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </div>
                )}
                {httpsAddress?.length > 0 && (
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <div className="tab__paragraph">
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <Trans
                            values={{ address: httpsAddress[0] }}
                            components={[
                                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                                <strong key="0">text</strong>,
                                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                                <code key="1">text</code>,
                            ]}
                        >
                            setup_dns_privacy_2
                        </Trans>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </div>
                )}
                {showDnsPrivacyNotice ? (
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <div className="tab__paragraph">
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <Trans
                            components={[
                                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                                <a
                                    href="https://github.com/AdguardTeam/AdguardHome/wiki/Encryption"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    key="0"
                                >
                                    link
                                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                                </a>,
                                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                                <code key="1">text</code>,
                            ]}
                        >
                            setup_dns_notice
                        </Trans>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </div>
                ) : (
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <>
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <div className="tab__paragraph">
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <Trans components={[<p key="0">text</p>]}>
                                setup_dns_privacy_3
                            </Trans>
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        </div>
                        {getDnsPrivacyList().map(renderDnsPrivacyList)}
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <div>
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            <strong>
                                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                                <Trans>
                                    setup_dns_privacy_ioc_mac
                                </Trans>
                            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                            </strong>
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        </div>
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <div className="mb-3">
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <Trans components={{ highlight: <code /> }}>
                                setup_dns_privacy_4
                            </Trans>
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        </div>
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <MobileConfigForm
                            initialValues={{
                                host: serverName,
                                clientId: '',
                                protocol: MOBILE_CONFIG_LINKS.DOH,
                                port: portHttps,
                            }}
                        />
                    </>
                )}
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </div>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </div>;
        },
    },
});

const renderContent = ({
    title,
    list,
    getTitle,
}: any) => (
    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    <div key={title} label={i18next.t(title)}>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <div className="tab__title">
            {i18next.t(title)}
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </div>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <div className="tab__text">
            {getTitle?.()}
            {list && (
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <ol>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    {list.map((item: any) => <li key={item}>
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <Trans>{item}</Trans>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </li>)}
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </ol>
            )}
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </div>
    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    </div>
);

const Guide = ({
    dnsAddresses,
}: any) => {
    const { t } = useTranslation();
    const serverName = useSelector((state: any) => state.encryption?.server_name);
    const portHttps = useSelector((state: any) => state.encryption?.port_https);
    const tlsAddress = dnsAddresses?.filter((item: any) => item.includes('tls://')) ?? '';
    const httpsAddress = dnsAddresses?.filter((item: any) => item.includes('https://')) ?? '';
    const showDnsPrivacyNotice = httpsAddress.length < 1 && tlsAddress.length < 1;

    const [activeTabLabel, setActiveTabLabel] = useState('Router');

    const tabs = getTabs({
        tlsAddress,
        httpsAddress,
        showDnsPrivacyNotice,
        serverName,
        portHttps,
        t,
    });

    // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
    const activeTab = renderContent(tabs[activeTabLabel]);

    return (
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <div>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Tabs
                tabs={tabs}
                activeTabLabel={activeTabLabel}
                setActiveTabLabel={setActiveTabLabel}
            >
                {activeTab}
            </Tabs>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </div>
    );
};

Guide.defaultProps = {
    dnsAddresses: [],
};

Guide.propTypes = {
    dnsAddresses: PropTypes.array,
};

renderDnsPrivacyList.propTypes = {
    title: PropTypes.string.isRequired,
    list: PropTypes.array.isRequired,
    renderList: PropTypes.func,
};

renderContent.propTypes = {
    title: PropTypes.string.isRequired,
    list: PropTypes.array.isRequired,
    getTitle: PropTypes.func,
};

renderLi.propTypes = {
    label: PropTypes.string,
    components: PropTypes.string,
};

export default Guide;
