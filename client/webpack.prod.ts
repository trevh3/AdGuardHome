import StyleLintPlugin from 'stylelint-webpack-plugin';
import { merge } from 'webpack-merge';
import common from 'client/webpack.common.js';


export default merge(common, {
    stats: 'minimal',
    performance: {
        hints: false
    },
    plugins: [
        new StyleLintPlugin({
            files: '**/*.css',
        })
    ],
});
