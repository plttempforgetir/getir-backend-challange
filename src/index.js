const express = require("express");
const BodyParser = require("body-parser");
const config = require("./config");
const routes = require("./routes");
const errorHandler = require("./utils/errorHandler");
// server
const app = express();
// middleware
app.use(BodyParser.json());
// routes
app.use(routes);
// error handler
app.use(errorHandler);

app.listen(config.port, function() {
  // eslint-disable-next-line no-console
  console.log(`Express server listening on port ${config.port}`);
});
