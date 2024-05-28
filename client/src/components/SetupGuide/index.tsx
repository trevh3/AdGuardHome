import React from 'react';
import { Trans, withTranslation } from 'react-i18next';

import Guide from '../ui/Guide';

import Card from '../ui/Card';

import PageTitle from '../ui/PageTitle';
import './Guide.css';

interface SetupGuideProps {
    dashboard: object;
    t: (...args: unknown[]) => unknown;
}

const SetupGuide = ({
    t,

    dashboard: { dnsAddresses },
}: SetupGuideProps) => (
    <div className="guide">
        <PageTitle title={t('setup_guide')} />

        <Card>
            <div className="guide__title">
                <Trans>install_devices_title</Trans>
            </div>

            <div className="guide__desc">
                <Trans>install_devices_desc</Trans>

                <div className="mt-1">
                    <Trans>install_devices_address</Trans>:
                </div>

                <div className="mt-3">
                    {dnsAddresses.map((ip: any) => (
                        <li key={ip} className="guide__address">
                            {ip}
                        </li>
                    ))}
                </div>
            </div>

            <Guide dnsAddresses={dnsAddresses} />
        </Card>
    </div>
);

export default withTranslation()(SetupGuide);
