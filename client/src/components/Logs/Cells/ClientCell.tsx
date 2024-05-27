// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React, { useState } from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Link, useHistory } from 'react-router-dom';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import propTypes from 'prop-types';

// @ts-expect-error TS(6142): Module '../../../helpers/helpers' was resolved to ... Remove this comment to see the full error message
import { checkFiltered, getBlockingClientName } from '../../../helpers/helpers';
import { BLOCK_ACTIONS } from '../../../helpers/constants';
// @ts-expect-error TS(6142): Module '../../../actions' was resolved to '/Users/... Remove this comment to see the full error message
import { toggleBlocking, toggleBlockingForClient } from '../../../actions';
// @ts-expect-error TS(6142): Module './IconTooltip' was resolved to '/Users/igo... Remove this comment to see the full error message
import IconTooltip from './IconTooltip';
// @ts-expect-error TS(6142): Module '../../../helpers/renderFormattedClientCell... Remove this comment to see the full error message
import { renderFormattedClientCell } from '../../../helpers/renderFormattedClientCell';
import { toggleClientBlock } from '../../../actions/access';
import { getBlockClientInfo } from './helpers';
import { getStats } from '../../../actions/stats';
import { updateLogs } from '../../../actions/queryLogs';

const ClientCell = ({
    client,
    client_id,
    client_info,
    domain,
    reason,
}: any) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const history = useHistory();
    const autoClients = useSelector((state: any) => state.dashboard.autoClients, shallowEqual);
    const isDetailed = useSelector((state: any) => state.queryLogs.isDetailed);
    const allowedСlients = useSelector((state: any) => state.access.allowed_clients, shallowEqual);
    const [isOptionsOpened, setOptionsOpened] = useState(false);

    const autoClient = autoClients.find((autoClient: any) => autoClient.name === client);
    const clients = useSelector((state: any) => state.dashboard.clients);
    const source = autoClient?.source;
    const whoisAvailable = client_info && Object.keys(client_info.whois).length > 0;
    const clientName = client_info?.name || client_id;
    const clientInfo = client_info && {
        ...client_info,
        whois_info: client_info?.whois,
        name: clientName,
    };

    const id = nanoid();

    const data = {
        address: client,
        name: clientName,
        country: client_info?.whois?.country,
        city: client_info?.whois?.city,
        network: client_info?.whois?.orgname,
        source_label: source,
    };

    const processedData = Object.entries(data);

    const isFiltered = checkFiltered(reason);

    const clientIds = clients.map((c: any) => c.ids).flat();

    const nameClass = classNames('w-90 o-hidden d-flex flex-column', {
        'mt-2': isDetailed && !client_info?.name && !whoisAvailable,
        'white-space--nowrap': isDetailed,
    });

    const hintClass = classNames('icons mr-4 icon--24 logs__question icon--lightgray', {
        'my-3': isDetailed,
    });

    const renderBlockingButton = (isFiltered: any, domain: any) => {
        const buttonType = isFiltered ? BLOCK_ACTIONS.UNBLOCK : BLOCK_ACTIONS.BLOCK;

        const {
            confirmMessage,
            buttonKey: blockingClientKey,
            lastRuleInAllowlist,
        } = getBlockClientInfo(
            client,
            client_info?.disallowed || false,
            client_info?.disallowed_rule || '',
            allowedСlients,
        );

        const blockingForClientKey = isFiltered ? 'unblock_for_this_client_only' : 'block_for_this_client_only';
        const clientNameBlockingFor = getBlockingClientName(clients, client);

        const onClick = async () => {
            // @ts-expect-error TS(2554): Expected 4 arguments, but got 2.
            await dispatch(toggleBlocking(buttonType, domain));
            await dispatch(getStats());
            setOptionsOpened(false);
        };

        const BUTTON_OPTIONS = [
            {
                name: buttonType,
                onClick,
                className: isFiltered ? 'bg--green' : 'bg--danger',
            },
            {
                name: blockingForClientKey,
                onClick: () => {
                    dispatch(toggleBlockingForClient(buttonType, domain, clientNameBlockingFor));
                    setOptionsOpened(false);
                },
            },
            {
                name: blockingClientKey,
                onClick: async () => {
                    if (window.confirm(confirmMessage)) {
                        await dispatch(toggleClientBlock(
                            client,
                            client_info?.disallowed || false,
                            client_info?.disallowed_rule || '',
                        ));
                        await dispatch(updateLogs());
                        setOptionsOpened(false);
                    }
                },
                disabled: lastRuleInAllowlist,
            },
        ];

        if (!clientIds.includes(client)) {
            BUTTON_OPTIONS.push({
                name: 'add_persistent_client',
                onClick: () => {
                    history.push(`/#clients?clientId=${client}`);
                },
            });
        }

        const getOptions = (options: any) => {
            if (options.length === 0) {
                return null;
            }
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            return <>
                {options.map(({
                    name,
                    onClick,
                    disabled,
                    className,
                }: any) => (
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <button
                        key={name}
                        className={classNames('button-action--arrow-option px-4 py-1', className)}
                        onClick={onClick}
                        disabled={disabled}
                    >
                        {t(name)}
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </button>
                ))}
            </>;
        };

        const content = getOptions(BUTTON_OPTIONS);

        const containerClass = classNames('button-action__container', {
            'button-action__container--detailed': isDetailed,
        });

        return (
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <div className={containerClass}>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <button
                    type="button"
                    className="btn btn-icon btn-sm px-0"
                    onClick={() => setOptionsOpened(true)}
                >
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <svg className="icon24 icon--lightgray button-action__icon">
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <use xlinkHref="#bullets" />
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </svg>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </button>
                {isOptionsOpened && (
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <IconTooltip
                        className="icon24"
                        tooltipClass="button-action--arrow-option-container"
                        xlinkHref="bullets"
                        triggerClass="btn btn-icon btn-sm px-0 button-action__hidden-trigger"
                        content={content}
                        placement="bottom-end"
                        trigger="click"
                        onVisibilityChange={setOptionsOpened}
                        defaultTooltipShown={true}
                        delayHide={0}
                    />
                )}
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </div>
        );
    };

    return (
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <div
            className="o-hidden h-100 logs__cell logs__cell--client"
            role="gridcell"
        >
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <IconTooltip
                className={hintClass}
                columnClass="grid grid--limited"
                tooltipClass="px-5 pb-5 pt-4"
                xlinkHref="question"
                contentItemClass="text-truncate key-colon o-hidden"
                title="client_details"
                content={processedData}
                placement="bottom"
            />
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <div className={nameClass}>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <div data-tip={true} data-for={id}>
                    {renderFormattedClientCell(client, clientInfo, isDetailed, true)}
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </div>
                {isDetailed && clientName && !whoisAvailable && (
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Link
                        className="detailed-info d-none d-sm-block logs__text logs__text--link logs__text--client"
                        to={`logs?search="${encodeURIComponent(clientName)}"`}
                        title={clientName}
                    >
                        {clientName}
                    </Link>
                )}
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </div>
            {renderBlockingButton(isFiltered, domain)}
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </div>
    );
};

ClientCell.propTypes = {
    client: propTypes.string.isRequired,
    client_id: propTypes.string,
    client_info: propTypes.shape({
        name: propTypes.string.isRequired,
        whois: propTypes.shape({
            country: propTypes.string,
            city: propTypes.string,
            orgname: propTypes.string,
        }).isRequired,
        disallowed: propTypes.bool.isRequired,
        disallowed_rule: propTypes.string.isRequired,
    }),
    domain: propTypes.string.isRequired,
    reason: propTypes.string.isRequired,
};

export default ClientCell;
