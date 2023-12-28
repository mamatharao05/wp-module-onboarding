const path = require('path');
const { merge } = require('webpack-merge');
const wpScriptsConfig = require('@wordpress/scripts/config/webpack.config');
const version = require('./package.json').version; // never require full config!

const nfdOnboardingWebpackConfig = {
    entry: {
        onboarding: path.resolve(process.cwd(), './src/onboarding.js'),
        'ai-page-generator': path.resolve(process.cwd(), './src/ai-page-generator.js'),
    },
    output: {
        path: path.resolve(process.cwd(), `build/${version}`),
        library: ['newfold', 'Onboarding', '[name]'],
        libraryTarget: 'window',
    }
};

module.exports = merge(wpScriptsConfig, nfdOnboardingWebpackConfig);