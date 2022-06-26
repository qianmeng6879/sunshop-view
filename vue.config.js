
module.exports = {
	devServer: {
		port: 8080,
		proxy: {
			"/api": {
				// target: 'https://www.mxzero.top/api',
				target: 'http://localhost:8080/api',
				changeOrigin: true,
				ws: true,
				pathRewrite: {
					"/api": ""
				},
			}
		},
	}
};