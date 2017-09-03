import chalk from 'chalk';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import * as path from 'path';
import ProgressBarPlugin from 'progress-bar-webpack-plugin';

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

const generateConfig = (env = {}) => {
    const port = 4000;
    console.log(chalk.white.bgRed(`PORT - ${port}`));
    console.log(chalk.white.bgMagenta('Starting a hot webpack-dev-server with webpack.dev.config.ts.\nGet psyched!!'));
    const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;

    const styledComponentsTransformer = createStyledComponentsTransformer();

    const devWebpackConfig: any = {
        devServer: {
            // External plugin that allows for doing Dev work (https://webpack.js.org/configuration/dev-server/#devserver)
            port,
            compress: true,
            contentBase: path.join(__dirname, '../../../src'),
            publicPath: '/dist',
            historyApiFallback: true,
        },
        devtool: 'inline-source-map', // Most robust sourcemapping Webpack offers. Not for Production since computationally intensive.
        entry: {
            main: ['./src/index'],
            // check if this is needed here or if it can be used under AutoDllPlugin
            vendor: ['@babel/polyfill'], // Required to support async/await
        },
        mode: 'development', // Development presets. CLI can override this, but it's cleaner to do it this way
        module: {
            rules: removeEmptyBlocks([
                {
                    /*  Execute TSLint as preLoader such that we avoid doing compilation first. While this is at the beginning of the list, when the `pitch` phase of the loader
                        triggers, it calls out that it needs to execute first. Pitch phase is triggered on all loaders before execution to determine order.
                        See: https://webpack.js.org/api/loaders/#pitching-loader
                    */
                    enforce: 'pre',
                    exclude: /node_modules/,
                    test: /\.ts(x?)$/,
                    use: {
                        loader: 'tslint-loader', // TSLint to lint the TypeScript a la TSConfig rules
                        options: { emitErrors: true },
                    },
                },
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
            ]),
        },
        output: {
            filename: '[name]-bundle.js',
            path: path.resolve(__dirname, '../../../dist'),
            publicPath: '/dist',
        },
        plugins: removeEmptyBlocks([
            new HtmlWebpackPlugin({
                // Helps with hashed HTML files, and will load them into the DevServer so we don't have to manually
                favicon: 'src/favicon.ico',
                filename: 'index.html', // Output to look for
                title: 'audience-builder-ui', // Page title, overrides the default HTML one.
            }),
            new ProgressBarPlugin(), // Included to clean up the console output of the build progress
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
            extensions: ['.ts', '.tsx', '.js', '.jsx'], // Extensions that we'll want Webpack to handle. Without these, it dies during compilation
        },
    };
    return devWebpackConfig;
};

export default generateConfig;
