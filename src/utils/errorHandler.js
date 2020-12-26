const { ValidationError } = require("express-validation");

// eslint-disable-next-line no-unused-vars
module.exports = (err, request, response, next) => {
  if (err instanceof ValidationError) {
    let error = err;
    if (err.details.body) {
      error = Object.assign({}, { message: err.details.body[0].message });
    } else if (err.details.params) {
      error = Object.assign({}, { message: err.details.params[0].message });
    }
    return response.status(err.statusCode).json(error);
  } else if (err.code === 404) {
    return response.status(404).send("Not Found");
  }
  return response.status(500).send(`Unkown Error, ${err}`);
};
