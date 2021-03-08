DROP TABLE IF EXISTS sensor;
DROP TABLE IF EXISTS sensor_log;
DROP TABLE IF EXISTS sensor_type;
DROP TABLE IF EXISTS user;
DROP TABLE IF EXISTS settings;
   
CREATE TABLE sensor
(
    id INTEGER PRIMARY KEY,
    uid  VARCHAR(6)  NOT NULL,
    sensor_type_id VARCHAR(30) NOT NULL,
    name VARCHAR(64),
    date_created datetime NOT NULL 
);

CREATE TABLE sensor_log 
(
    id INTEGER PRIMARY KEY,
    sensor_id INTEGER NOT NULL,
    rssi INTEGER(3) NOT NULL,
    bat REAL NOT NULL,
    payload VARCHAR(8) NOT NULL,
    date_created datetime NOT NULL
);

CREATE TABLE sensor_type(
    id INTEGER PRIMARY KEY,
    type_id INTEGER NOT NULL,
    name VARCHAR(20)
);

CREATE TABLE user(
    id INTEGER PRIMARY KEY,
    username VARCHAR(56),
    password VARCHAR(56)
);

CREATE TABLE settings(
    id INTEGER PRIMARY KEY,
    name VARCHAR(56),
    value VARCHAR(56)
);

/*
* Seed the database
*/

INSERT INTO sensor VALUES (Null, "KECTIT" , "1", "Asim/Call Button", DateTime('now', 'localtime'));
INSERT INTO sensor VALUES (Null, "3Y4D84" ,"3", "ThingBits/Office/Temperature", DateTime('now', 'localtime'));
INSERT INTO sensor VALUES (Null, "412MSN" ,"3", "Home/Boiler Room/Temperature", DateTime('now', 'localtime'));
INSERT INTO sensor VALUES (Null, "R6ZKWA" ,"3", "Home/Master Bedroom/Temperature", DateTime('now', 'localtime'));
INSERT INTO sensor VALUES (Null, "RAR2EG" ,"3", "Home/Attic Bedroom/Temperature", DateTime('now', 'localtime'));
INSERT INTO sensor VALUES (Null, "PZ9WVH" ,"3", "Home/Basement/Temperature", DateTime('now', 'localtime'));
INSERT INTO sensor VALUES (Null, "MKWGS2" ,"3", "Home/Garage Suite/Temperature", DateTime('now', 'localtime'));
INSERT INTO sensor VALUES (Null, "A34ABA" ,"3", "Home/Garage/Status", DateTime('now', 'localtime'));
INSERT INTO sensor VALUES (Null, "JC9H8S" ,"3", "Home/Living Room/Temperature", DateTime('now', 'localtime'));


INSERT INTO sensor_type VALUES (Null, 0, "Presence");
INSERT INTO sensor_type VALUES (Null, 1, "Button");
INSERT INTO sensor_type VALUES (Null, 2, "Motion");
INSERT INTO sensor_type VALUES (Null, 3, "Temp");
INSERT INTO sensor_type VALUES (Null, 4, "Temp/Hum/Light");
INSERT INTO sensor_type VALUES (Null, 5, "Knock");
INSERT INTO sensor_type VALUES (Null, 6, "Clap");
INSERT INTO sensor_type VALUES (Null, 7, "Tilt");
INSERT INTO sensor_type VALUES (Null, 8, "Tilt2");
INSERT INTO sensor_type VALUES (Null, 9, "Light");
INSERT INTO sensor_type VALUES (Null, 10, "Shake");