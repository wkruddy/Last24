import chalk from 'chalk';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import * as path from 'path';
import ProgressBarPlugin from 'progress-bar-webpack-plugin';

const generateConfig = env => {
    const port = 4000;
    console.log(chalk.white.bgBlue(`PORT - ${port}`));
    console.log(chalk.white.bgGreen('Starting a hot webpack-dev-server'));
    console.log(chalk.white.bgRed('!!!FUCKING. GET. STOKED!!!'));

    const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;

    const styledComponentsTransformer = createStyledComponentsTransformer();

    const devWebpackConfig: any = {
        devServer: {
            port,
            compress: true,
            contentBase: path.join(__dirname, '../../../src'),
            publicPath: '/dist',
            historyApiFallback: true,
        },
        devtool: 'inline-source-map',
        entry: {
            main: ['./src/index'],
            vendor: ['@babel/polyfill'],
        },
        mode: 'development',
        module: {
            rules: [
                {
                    enforce: 'pre',
                    exclude: /node_modules/,
                    test: /\.ts(x?)$/,
                    use: {
                        loader: 'tslint-loader',
                        options: { emitErrors: true },
                    },
                },
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
                        options: {
                            getCustomTransformers: () => ({
                                before: [styledComponentsTransformer],
                            }),
                        },
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
            publicPath: '/dist',
        },
        plugins: [
            new HtmlWebpackPlugin({
                favicon: '../public/favicon.ico',
                filename: 'index.html',
                title: 'Last24',
            }),
            new ProgressBarPlugin(),
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
            extensions: ['.ts', '.tsx', '.js', '.jsx'],
        },
    };
    return devWebpackConfig;
};

export default generateConfig;
