// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
import TooltipTrigger from 'react-popper-tooltip';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import propTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import {
    HIDE_TOOLTIP_DELAY,
    MEDIUM_SCREEN_SIZE,
    SHOW_TOOLTIP_DELAY,
} from '../../helpers/constants';
import 'react-popper-tooltip/dist/styles.css';
import './Tooltip.css';

const Tooltip = ({
    children,
    content,
    triggerClass = 'tooltip-custom__trigger',
    className = 'tooltip-container',
    placement = 'bottom',
    trigger = 'hover',
    delayShow = SHOW_TOOLTIP_DELAY,
    delayHide = HIDE_TOOLTIP_DELAY,
    onVisibilityChange,
    defaultTooltipShown,
}: any) => {
    const { t } = useTranslation();
    const touchEventsAvailable = 'ontouchstart' in window;

    let triggerValue = trigger;
    let delayHideValue = delayHide;
    let delayShowValue = delayShow;

    if (window.matchMedia(`(max-width: ${MEDIUM_SCREEN_SIZE}px)`).matches || touchEventsAvailable) {
        triggerValue = 'click';
        delayHideValue = 0;
        delayShowValue = 0;
    }

    const renderTooltip = ({
        tooltipRef,
        getTooltipProps,
    }: any) => (
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <div
                    {...getTooltipProps({
                        ref: tooltipRef,
                        className,
                    })}
            >
                {typeof content === 'string' ? t(content) : content}
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </div>
    );

    const renderTrigger = ({
        getTriggerProps,
        triggerRef,
    }: any) => (
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <span
                    {...getTriggerProps({
                        ref: triggerRef,
                        className: triggerClass,
                    })}
            >
                    {children}
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </span>
    );

    renderTooltip.propTypes = {
        tooltipRef: propTypes.object,
        getTooltipProps: propTypes.func,
    };

    renderTrigger.propTypes = {
        triggerRef: propTypes.object,
        getTriggerProps: propTypes.func,
    };

    return (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <TooltipTrigger
            placement={placement}
            trigger={triggerValue}
            delayHide={delayHideValue}
            delayShow={delayShowValue}
            tooltip={renderTooltip}
            onVisibilityChange={onVisibilityChange}
            defaultTooltipShown={defaultTooltipShown}
        >
            {renderTrigger}
        </TooltipTrigger>
    );
};

Tooltip.propTypes = {
    children: propTypes.element.isRequired,
    content: propTypes.oneOfType(
        [
            propTypes.string,
            propTypes.element,
            propTypes.arrayOf(propTypes.element),
        ],
    ).isRequired,
    placement: propTypes.string,
    trigger: propTypes.string,
    delayHide: propTypes.number,
    delayShow: propTypes.number,
    className: propTypes.string,
    triggerClass: propTypes.string,
    onVisibilityChange: propTypes.func,
    defaultTooltipShown: propTypes.bool,
};

export default Tooltip;
