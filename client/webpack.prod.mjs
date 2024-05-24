import StyleLintPlugin from 'stylelint-webpack-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';
import { merge } from 'webpack-merge';
import common from './webpack.common';


export default merge(common, {
    stats: 'minimal',
    performance: {
        hints: false
    },
    plugins: [
        new StyleLintPlugin({
            files: '**/*.css',
        }),
        new ESLintPlugin({
            overrideConfigFile: path.resolve(__dirname, 'prod.eslintrc'),
        })
    ],
});
