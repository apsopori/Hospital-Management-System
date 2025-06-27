import mongoose from "mongoose";

export  const  dbConnection = async () => {
  await mongoose
    .connect(process.env.MONGO_URL, {
      dbName: "HMS",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log("Some error occured while connecting to database:", err);
    });
};
