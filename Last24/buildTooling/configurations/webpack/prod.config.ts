import AutoDllPlugin from 'autodll-webpack-plugin';
import chalk from 'chalk';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import * as path from 'path';
import * as webpack from 'webpack';
import webpackBundleAnalyzer from 'webpack-bundle-analyzer';

const BundleAnalyzerPlugin = webpackBundleAnalyzer.BundleAnalyzerPlugin;

const generateConfig = env => {
    console.log(chalk.white.bgBlue('Creating a production build.'));
    console.log(chalk.white.bgRed('?!?!R U FUCKING AMPED?!?!'));
    const prodWebpackConfig: webpack.Configuration = {
        devtool: 'source-map',
        entry: {
            main: ['./src/index'],
            vendor: ['@babel/polyfill'],
        },
        mode: 'production',
        module: {
            rules: [
                {
                    exclude: /node_modules/,
                    test: /\.js(x?)$/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            babelrc: true,
                        },
                    },
                },
                {
                    exclude: /node_modules/,
                    test: /\.ts(x?)$/,
                    use: {
                        loader: 'ts-loader',
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
            ],
        },
        output: {
            filename: '[name]-bundle.js',
            path: path.resolve(__dirname, '../../../dist'),
            publicPath: '/',
        },
        plugins: [
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
                favicon: '../../../../public/favicon.ico',
                filename: 'index.html',
                template: './src/index.prod.html',
                title: 'Last24',
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
        ],
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
            extensions: ['.ts', '.tsx', '.js', '.jsx', '.ico'],
        },
    };
    return prodWebpackConfig;
};

export default generateConfig;
