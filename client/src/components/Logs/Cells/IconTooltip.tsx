// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';
import { Trans } from 'react-i18next';
import classNames from 'classnames';
// @ts-expect-error TS(6142): Module '../../../helpers/helpers' was resolved to ... Remove this comment to see the full error message
import { processContent } from '../../../helpers/helpers';
// @ts-expect-error TS(6142): Module '../../ui/Tooltip' was resolved to '/Users/... Remove this comment to see the full error message
import Tooltip from '../../ui/Tooltip';
import 'react-popper-tooltip/dist/styles.css';
import './IconTooltip.css';
import { SHOW_TOOLTIP_DELAY } from '../../../helpers/constants';

const IconTooltip = ({
    className,
    contentItemClass,
    columnClass,
    triggerClass,
    canShowTooltip = true,
    xlinkHref,
    title,
    placement,
    tooltipClass,
    content,
    trigger,
    onVisibilityChange,
    defaultTooltipShown,
    delayHide,

    renderContent = content ? React.Children.map(
        processContent(content),
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        (item: any, idx: any) => <div key={idx} className={contentItemClass}>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Trans>{item || '—'}</Trans>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </div>,
    ) : null,
}: any) => {
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    const tooltipContent = <>
        {title
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        && <div className="pb-4 h-25 grid-content font-weight-bold"><Trans>{title}</Trans></div>}
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <div className={classNames(columnClass)}>{renderContent}</div>
    </>;

    const tooltipClassName = classNames('tooltip-custom__container', tooltipClass, { 'd-none': !canShowTooltip });

    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    return <Tooltip
        className={tooltipClassName}
        content={tooltipContent}
        placement={placement}
        triggerClass={triggerClass}
        trigger={trigger}
        onVisibilityChange={onVisibilityChange}
        delayShow={trigger === 'click' ? 0 : SHOW_TOOLTIP_DELAY}
        delayHide={delayHide}
        defaultTooltipShown={defaultTooltipShown}
    >
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        {xlinkHref && <svg className={className}>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <use xlinkHref={`#${xlinkHref}`} />
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </svg>}
    </Tooltip>;
};

IconTooltip.propTypes = {
    className: PropTypes.string,
    trigger: PropTypes.string,
    triggerClass: PropTypes.string,
    contentItemClass: PropTypes.string,
    columnClass: PropTypes.string,
    tooltipClass: PropTypes.string,
    title: PropTypes.string,
    placement: PropTypes.string,
    canShowTooltip: PropTypes.bool,
    xlinkHref: PropTypes.string,
    content: PropTypes.node,
    renderContent: PropTypes.arrayOf(PropTypes.element),
    onVisibilityChange: PropTypes.func,
    defaultTooltipShown: PropTypes.bool,
    delayHide: PropTypes.number,
};

export default IconTooltip;
