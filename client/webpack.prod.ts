import StyleLintPlugin from 'stylelint-webpack-plugin';
import { merge } from 'webpack-merge';
// @ts-expect-error TS(2307): Cannot find module 'client/webpack.common.js' or i... Remove this comment to see the full error message
import common from 'client/webpack.common.js';

export default merge(common, {
    stats: 'minimal',
    performance: {
        hints: false,
    },
    plugins: [
        new StyleLintPlugin({
            files: '**/*.css',
        }),
    ],
});
