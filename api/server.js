const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(express.json()); //Used to parse JSON bodies
app.use(express.urlencoded()); //Parse URL-encoded bodies
app.use(cors());

// const WebSocket = require("ws");
// const wss = new WebSocket.Server({ port: 8081 });

// wss.on("connection", (ws) => {
//   console.log("new client connection");

//   ws.on("message", (data) => {
//     wss.clients.forEach(function each(client) {
//       if (client.readyState === WebSocket.OPEN) {
//         client.send(data);
//       }
//     });
//   });

//   ws.on("close", () => {
//     console.log("client disconnected");
//   });
// });

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
