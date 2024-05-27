// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';

const CellWrap = ({
    value,
}: any, formatValue: any, formatTitle = formatValue) => {
    if (!value) {
        return '–';
    }
    const cellValue = typeof formatValue === 'function' ? formatValue(value) : value;
    const cellTitle = typeof formatTitle === 'function' ? formatTitle(value) : value;

    return (
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <div className="logs__row o-hidden">
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <span className="logs__text logs__text--full" title={cellTitle}>
                {cellValue}
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </span>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </div>
    );
};

CellWrap.propTypes = {
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    formatValue: PropTypes.func,
    formatTitle: PropTypes.func,
};

export default CellWrap;
