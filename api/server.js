const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(express.json()); //Used to parse JSON bodies
app.use(express.urlencoded()); //Parse URL-encoded bodies
app.use(cors());

// Route includes
const sensorRouter = require("./routes/sensor.router");

/* Routes */
app.use("/api/log", sensorRouter);

// Serve static files
app.use(express.static("build"));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
