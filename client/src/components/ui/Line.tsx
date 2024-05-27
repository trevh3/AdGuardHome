// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
import { ResponsiveLine } from '@nivo/line';
import addDays from 'date-fns/add_days';
import subDays from 'date-fns/sub_days';
import subHours from 'date-fns/sub_hours';
import dateFormat from 'date-fns/format';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'loda... Remove this comment to see the full error message
import round from 'lodash/round';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { useSelector } from 'react-redux';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';
import './Line.css';
// @ts-expect-error TS(6142): Module '../../helpers/helpers' was resolved to '/U... Remove this comment to see the full error message
import { msToDays, msToHours } from '../../helpers/helpers';
import { TIME_UNITS } from '../../helpers/constants';

const Line = ({
    data,
    color = 'black',
}: any) => {
    const interval = useSelector((state: any) => state.stats.interval);
    const timeUnits = useSelector((state: any) => state.stats.timeUnits);

    return (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <ResponsiveLine
            enableArea
            animate
            enableSlices="x"
            curve="linear"
            colors={[color]}
            data={data}
            theme={{
                crosshair: {
                    line: {
                        stroke: 'currentColor',
                        strokeWidth: 1,
                        strokeOpacity: 0.5,
                    },
                },
            }}
            xScale={{
                type: 'linear',
                min: 0,
                max: 'auto',
            }}
            crosshairType="x"
            axisLeft={false}
            axisBottom={false}
            enableGridX={false}
            enableGridY={false}
            enablePoints={false}
            xFormat={(x: any) => {
                if (timeUnits === TIME_UNITS.HOURS) {
                    const hoursAgo = msToHours(interval) - x - 1;
                    return dateFormat(subHours(Date.now(), hoursAgo), 'D MMM HH:00');
                }

                const daysAgo = subDays(Date.now(), msToDays(interval) - 1);
                return dateFormat(addDays(daysAgo, x), 'D MMM YYYY');
            }}
            yFormat={(y: any) => round(y, 2)}
            sliceTooltip={(slice: any) => {
                const { xFormatted, yFormatted } = slice.slice.points[0].data;
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                return <div className="line__tooltip">
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <span className="line__tooltip-text">
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <strong>{yFormatted}</strong>
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <br />
                        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                        <small>{xFormatted}</small>
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    </span>
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </div>;
            }}
        />
    );
};

Line.propTypes = {
    data: PropTypes.array.isRequired,
    color: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
};

export default Line;
