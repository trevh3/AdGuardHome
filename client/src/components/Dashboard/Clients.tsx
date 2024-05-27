// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React, { useState } from 'react';
// @ts-expect-error TS(2306): File '/Users/igorlobanov/Work/AdGuard/adguard-home... Remove this comment to see the full error message
import ReactTable from 'react-table';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';
import { Trans, useTranslation } from 'react-i18next';

// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
// @ts-expect-error TS(6142): Module '../ui/Card' was resolved to '/Users/igorlo... Remove this comment to see the full error message
import Card from '../ui/Card';
// @ts-expect-error TS(6142): Module '../ui/Cell' was resolved to '/Users/igorlo... Remove this comment to see the full error message
import Cell from '../ui/Cell';

// @ts-expect-error TS(6142): Module '../../helpers/helpers' was resolved to '/U... Remove this comment to see the full error message
import { getPercent, sortIp } from '../../helpers/helpers';
import {
    BLOCK_ACTIONS,
    DASHBOARD_TABLES_DEFAULT_PAGE_SIZE,
    STATUS_COLORS,
    TABLES_MIN_ROWS,
} from '../../helpers/constants';
import { toggleClientBlock } from '../../actions/access';
// @ts-expect-error TS(6142): Module '../../helpers/renderFormattedClientCell' w... Remove this comment to see the full error message
import { renderFormattedClientCell } from '../../helpers/renderFormattedClientCell';
import { getStats } from '../../actions/stats';
// @ts-expect-error TS(6142): Module '../Logs/Cells/IconTooltip' was resolved to... Remove this comment to see the full error message
import IconTooltip from '../Logs/Cells/IconTooltip';

const getClientsPercentColor = (percent: any) => {
    if (percent > 50) {
        return STATUS_COLORS.green;
    }
    if (percent > 10) {
        return STATUS_COLORS.yellow;
    }
    return STATUS_COLORS.red;
};

const CountCell = (row: any) => {
    const { value, original: { ip } } = row;
    const numDnsQueries = useSelector((state: any) => state.stats.numDnsQueries, shallowEqual);

    const percent = getPercent(numDnsQueries, value);
    const percentColor = getClientsPercentColor(percent);

    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    return <Cell value={value} percent={percent} color={percentColor} search={ip} />;
};

const renderBlockingButton = (ip: any, disallowed: any, disallowed_rule: any) => {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const processingSet = useSelector((state: any) => state.access.processingSet);
    const allowedСlients = useSelector((state: any) => state.access.allowed_clients, shallowEqual);

    const [isOptionsOpened, setOptionsOpened] = useState(false);

    const toggleClientStatus = async (ip: any, disallowed: any, disallowed_rule: any) => {
        let confirmMessage;

        if (disallowed) {
            confirmMessage = t('client_confirm_unblock', { ip: disallowed_rule || ip });
        } else {
            confirmMessage = `${t('adg_will_drop_dns_queries')} ${t('client_confirm_block', { ip })}`;
            if (allowedСlients.length > 0) {
                confirmMessage = confirmMessage.concat(`\n\n${t('filter_allowlist', { disallowed_rule })}`);
            }
        }

        if (window.confirm(confirmMessage)) {
            await dispatch(toggleClientBlock(ip, disallowed, disallowed_rule));
            await dispatch(getStats());
        }
    };

    const onClick = () => {
        toggleClientStatus(ip, disallowed, disallowed_rule);
        setOptionsOpened(false);
    };

    const text = disallowed ? BLOCK_ACTIONS.UNBLOCK : BLOCK_ACTIONS.BLOCK;

    const lastRuleInAllowlist = !disallowed && allowedСlients === disallowed_rule;
    const disabled = processingSet || lastRuleInAllowlist;
    return (
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <div className="table__action">
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
                    content={(
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <button
                            className={classNames('button-action--arrow-option px-4 py-1', disallowed ? 'bg--green' : 'bg--danger')}
                            onClick={onClick}
                            disabled={disabled}
                            title={lastRuleInAllowlist ? t('last_rule_in_allowlist', { disallowed_rule }) : ''}
                        >
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <Trans>{text}</Trans>
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        </button>
                    )}
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

const ClientCell = (row: any) => {
    const { value, original: { info, info: { disallowed, disallowed_rule } } } = row;

    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    return <>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <div className="logs__row logs__row--overflow logs__row--column d-flex align-items-center">
            {renderFormattedClientCell(value, info, true)}
            {renderBlockingButton(value, disallowed, disallowed_rule)}
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </div>
    </>;
};

const Clients = ({
    refreshButton,
    subtitle,
}: any) => {
    const { t } = useTranslation();
    const topClients = useSelector((state: any) => state.stats.topClients, shallowEqual);

    return (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Card
            title={t('top_clients')}
            subtitle={subtitle}
            bodyType="card-table"
            refresh={refreshButton}
        >
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <ReactTable
                data={topClients.map(({
                    name: ip,
                    count,
                    info,
                    blocked,
                }: any) => ({
                    ip,
                    count,
                    info,
                    blocked,
                }))}
                columns={[
                    {
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        Header: <Trans>client_table_header</Trans>,
                        accessor: 'ip',
                        sortMethod: sortIp,
                        Cell: ClientCell,
                    },
                    {
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        Header: <Trans>requests_count</Trans>,
                        accessor: 'count',
                        minWidth: 180,
                        maxWidth: 200,
                        Cell: CountCell,
                    },
                ]}
                showPagination={false}
                noDataText={t('no_clients_found')}
                minRows={TABLES_MIN_ROWS}
                defaultPageSize={DASHBOARD_TABLES_DEFAULT_PAGE_SIZE}
                className="-highlight card-table-overflow--limited clients__table"
                getTrProps={(_state: any, rowInfo: any) => {
                    if (!rowInfo) {
                        return {};
                    }

                    const { info: { disallowed } } = rowInfo.original;

                    return disallowed ? { className: 'logs__row--red' } : {};
                }}
            />
        </Card>
    );
};

Clients.propTypes = {
    refreshButton: PropTypes.node.isRequired,
    subtitle: PropTypes.string.isRequired,
};

export default Clients;
