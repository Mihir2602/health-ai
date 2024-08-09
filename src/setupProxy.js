const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/streamlit-api",
    createProxyMiddleware({
      target: "http://192.168.102.33:8501/",
      changeOrigin: true,
      pathRewrite: {
        "^/streamlit-api": "/",
      },
    })
  );
};