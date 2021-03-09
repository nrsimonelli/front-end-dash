const express = require("express");

const router = express.Router();

const db = require("better-sqlite3")("main.db");

router.get("/", (req, res) => {
  const queryString = `
    SELECT  
      sensor.uid, sensor_type.name, sensor_log.rssi, sensor_log.bat, sensor_log.payload, sensor_log.date_created
    FROM
      ((  sensor_log
    INNER JOIN
      sensor 
    ON
      sensor_log.sensor_id = sensor.id)
    INNER JOIN  
      sensor_type
    ON  
      sensor.sensor_type_id = sensor_type.id)
    ORDER BY 
      sensor_log.date_created DESC
    LIMIT 10;
    `;

  const data = db.prepare(queryString).all();
  res.send(data);
});

module.exports = router;
