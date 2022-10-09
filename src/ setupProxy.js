/** @format */

const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware(["/api", , "/otherApi"], {
      target: "https://ecommerce-fullstack-backend.herokuapp.com/",
    })
  );
};
