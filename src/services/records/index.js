const db = require("../../utils/db");
const Record = require("../../models/record");

const getRecordsFromDb = async body => {
  try {
    await db.connectToDatabase();
    const startDate = new Date(body.startDate);
    const endDate = new Date(body.endDate);
    const records = await Record.aggregate([
      {
        $match: {
          createdAt: {
            $gte: startDate,
            $lte: endDate
          }
        }
      },
      {
        $project: {
          _id: 0,
          key: 1,
          createdAt: 1,
          totalCount: {
            $sum: "$counts"
          }
        }
      },
      {
        $match: {
          totalCount: {
            $gt: body.minCount,
            $lt: body.maxCount
          }
        }
      }
    ]);
    return records;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
  }
};

module.exports = {
  getRecordsFromDb
};
