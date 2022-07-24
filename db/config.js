const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("DB Online");
  } catch (error) {
    console.log(error);
    throw new Error(" Can not connect to database");
  }
};

module.exports = { dbConnection };
