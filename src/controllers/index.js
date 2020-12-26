const { getRecordsFromDb } = require("../services/records");

const getRecords = async (request, response, next) => {
  try {
    const requestBody = request.body;
    const records = await getRecordsFromDb(requestBody);
    return response.status(200).json({ code: 0, msg: "success", records });
  } catch (error) {
    request.log.error(error);
    return next(error);
  }
};

module.exports = { getRecords };
