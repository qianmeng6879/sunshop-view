
module.exports = {
	devServer: {
		port: 3000,
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