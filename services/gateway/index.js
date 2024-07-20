const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();
const PORT = process.env.PORT || 3000;

// Proxy configurations
const userServiceProxy = createProxyMiddleware({
  target: "http://localhost:3006/users",
  changeOrigin: true,
  pathRewrite: {
    "^/users": "",
  },
});

const materialServiceProxy = createProxyMiddleware({
  target: "http://localhost:3007/materials",
  changeOrigin: true,
  pathRewrite: {
    "^/materials": "",
  },
});

const transactionServiceProxy = createProxyMiddleware({
  target: "http://localhost:3008/transactions",
  changeOrigin: true,
  pathRewrite: {
    "^/transactions": "",
  },
});

// Routes
app.use("/api/users", userServiceProxy);
app.use("/api/materials", materialServiceProxy);
app.use("/api/transactions", transactionServiceProxy);

app.listen(PORT, () => {
  console.log(`Gateway service is running on port ${PORT}`);
});
