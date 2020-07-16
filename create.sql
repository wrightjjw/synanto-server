CREATE TABLE IF NOT EXISTS Person (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name varchar(64) NOT NULL,
    email varchar(256) NOT NULL
);

CREATE TABLE IF NOT EXISTS Event (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name varchar(64) NOT NULL,
    desc varchar(256),
    host INTEGER NOT NULL,
    startDate DATE NOT NULL,
    frequency INTEGER,
    FOREIGN KEY (host) REFERENCES Person(id)
);

CREATE TABLE IF NOT EXISTS PersonEvent (
    personID INTEGER,
    eventID INTEGER,
    FOREIGN KEY (personID) REFERENCES Person(id),
    FOREIGN KEY (eventID) REFERENCES Event(id)
);

CREATE TRIGGER IF NOT EXISTS AddEventHost
AFTER INSERT ON Event
BEGIN
INSERT INTO PersonEvent(personId, eventID)
VALUES (NEW.host, NEW.id);
END;
