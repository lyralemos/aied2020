const webpack = require("webpack");
const path = require("path");

module.exports = {
    // outputDir: path.resolve(__dirname, "./docs"),
    publicPath: '/aied2020/',
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery',
                Popper: ['popper.js', 'default']
            })
        ]
    }
}
