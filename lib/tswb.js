// @ts-check
/**
 * @typedef { import('@messman/ts-webpack-builder').LibraryBuildOptions } LibraryBuildOptions
 */
/**
 * @type Partial<LibraryBuildOptions>
 */
const options = {
	webpackConfigTransform: (webpackConfig, buildOptions) => {

		webpackConfig.module.rules.push({
			test: /\.svg$/,
			use: [
				{
					loader: 'raw-loader',
				},
				{
					loader: 'svgo-loader',
					options: {
						replaceAttrValues: { '#000': 'currentColor' },
						dimensions: false,
						svgoConfig: {
							plugins: {
								// Stops colors and heights from being removed.
								removeViewBox: false,
								removeUselessStrokeAndFill: false,
								removeUnknownsAndDefaults: false
							}
						}
					}
				}
			]
		});
		return webpackConfig;
	}

};

module.exports = options;