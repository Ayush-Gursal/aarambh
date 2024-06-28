const express = require("express");
const dotenv = require("dotenv").config({ path: "config/config.env" });
const college = require("./routes/collegeRoutes");
const user = require("./routes/userRoutes");
const date = require("./routes/dateRoutes");
const updates=require("./routes/updatesRoutes")
const app = express();

const cookieparser = require("cookie-parser");

const connectDB = require("./config/dbConnection");

//Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to uncaught exception`);
  process.exit(1);
});

connectDB();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieparser());

app.use("/api/user", user);
app.use("/api/college", college);
app.use("/api/date", date);
app.use("/api/updates",updates)
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

//Unhandled promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to unhandled promise rejection`);

  server.close(() => {
    process.exit(1);
  });
});
