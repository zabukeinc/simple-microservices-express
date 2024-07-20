const HttpStatusCode = require("http-status-codes");
const responseOK = (data) => {
  return {
    statusCode: HttpStatusCode.OK,
    success: true,
    message: "OK",
    error: null,
    data,
  };
};

/**
 *
 * @param {String} message
 * @returns
 */
const responseBadRequest = (message) => {
  return {
    statusCode: HttpStatusCode.BAD_REQUEST,
    success: false,
    error: "Bad Request",
    data: null,
    message,
  };
};

/**
 *
 * @param {String} message
 * @returns
 */
const responseInternalServerError = (message) => {
  return {
    statusCode: HttpStatusCode.INTERNAL_SERVER_ERROR,
    success: false,
    error: "Internal Server Error",
    data: null,
    message,
  };
};

/**
 *
 * @param {String} message
 * @returns
 */
const responseNotFoundError = (message) => {
  return {
    statusCode: HttpStatusCode.NOT_FOUND,
    success: false,
    error: "Not Found Error",
    data: null,
    message,
  };
};

module.exports = {
  responseOK,
  responseBadRequest,
  responseInternalServerError,
  responseNotFoundError,
};
