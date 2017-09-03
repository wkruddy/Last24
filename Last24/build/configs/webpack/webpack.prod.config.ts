import AutoDllPlugin from 'autodll-webpack-plugin';
import chalk from 'chalk';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import * as path from 'path';
import * as webpack from 'webpack';
import webpackBundleAnalyzer from 'webpack-bundle-analyzer';

/*
    Modules are executed in reverse order, so LIFO.
    In this instance, we're going to want to have:
    - `tslint-loader` the Typescript (Ordered last, but as a preLoader) |
    - `ts-loader` to transpile TS -> ES6 |
    - `babel-loader` to transpile ES6 -> ES5 in CommonJS modules |
    - Output into the dist/[bundleName].js for OUR code
*/

// Filters undefined entries from an array, which can make module.rules and plugins otherwise barf
const removeEmptyBlocks = block => block.filter(item => !!item);

const BundleAnalyzerPlugin = webpackBundleAnalyzer.BundleAnalyzerPlugin;

const generateConfig = env => {
    console.log(chalk.white.bgMagenta('Creating a production build with webpack.prod.config.ts.\nGet psyched!!'));
    const prodWebpackConfig: webpack.Configuration = {
        // Most robust sourcemapping Webpack offers for production. Linear build/rebuild times, but original source.
        // Could substitute for `cheap-module-source-map` or `cheap-source-map` if we find this not ideal.
        devtool: 'source-map',
        entry: {
            main: ['./src/index'],
            // check if this is needed here or if it can be used under AutoDllPlugin
            vendor: ['@babel/polyfill'], // Required to support async/await
        },
        mode: 'production', // Production presets. CLI can override this, but it's cleaner to do it this way
        module: {
            rules: removeEmptyBlocks([
                // Formerly known as `module.loaders` (WP1) but this has been deprecated (WP2+)
                {
                    exclude: /node_modules/,
                    test: /\.js(x?)$/,
                    use: {
                        loader: 'babel-loader', // ES6 -> ES5
                        options: {
                            babelrc: true,
                        },
                    },
                },
                {
                    exclude: /node_modules/,
                    test: /\.ts(x?)$/,
                    use: {
                        loader: 'ts-loader', // TS -> ES6
                    },
                },
                {
                    test: /\.css$/,
                    use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
                },
                {
                    include: /src/,
                    test: /\.(jpg|jpeg|gif|png|ico|svg|json)$/,
                    use: {
                        loader: 'file-loader?name=[name].[ext]',
                    },
                },
            ]),
        },
        output: {
            filename: '[name]-bundle.js',
            path: path.resolve(__dirname, '../../../dist'),
            publicPath: '/',
        },
        plugins: removeEmptyBlocks([
            new CleanWebpackPlugin(['dist'], {
                root: path.resolve(__dirname, '../../../'),
                verbose: true,
            }),
            new CopyWebpackPlugin([
                {
                    from: 'src/assets/',
                    to: 'assets',
                },
            ]),
            new HtmlWebpackPlugin({
                // Helps with hashed HTML files, and will load them into the DevServer so we don't have to manually
                favicon: 'src/favicon.ico',
                filename: 'index.html', // Output to look for
                template: './src/index.prod.html',
                title: 'audience-builder-ui', // Page title, overrides the default HTML one.
            }),
            new AutoDllPlugin({
                entry: {
                    vendor: [
                        'react',
                        'react-dom',
                        'react-router-dom',
                        'redux',
                        'redux-thunk',
                        'react-redux',
                        'lodash',
                        'styled-components',
                    ],
                },
                filename: '[name]-bundle.js',
                inject: true,
            }),
            new BundleAnalyzerPlugin({
                analyzerMode: 'static',
                generateStatsFile: true,
                openAnalyzer: false,
                reportFilename: `../.webpackBundleAnalyzer/reports/report-${new Date().toISOString()}.html`,
                statsFilename: `../.webpackBundleAnalyzer/stats/stats-${new Date().toISOString()}.json`,
            }),
        ]),
        resolve: {
            alias: {
                axios: path.resolve(__dirname, '../../../node_modules', 'axios'),
                react: path.resolve(__dirname, '../../../node_modules', 'react'),
                'react-dom': path.resolve(__dirname, '../../../node_modules', 'react-dom'),
                'react-intl': path.resolve(__dirname, '../../../node_modules', 'react-intl'),
                'react-router': path.resolve(__dirname, '../../../node_modules', 'react-router'),
                'react-router-dom': path.resolve(__dirname, '../../../node_modules', 'react-router-dom'),
                'styled-components': path.resolve(__dirname, '../../../node_modules', 'styled-components'),
            },
            extensions: ['.ts', '.tsx', '.js', '.jsx', '.ico'], // Extensions that we'll want Webpack to handle. Without these, it dies during compilation
        },
    };
    return prodWebpackConfig;
};

export default generateConfig;
