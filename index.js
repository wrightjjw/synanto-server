var config = require("./config");
var express = require("express");
var sqlite = require("sqlite3");
var cors = require("cors");

var app = express();
app.use(cors());

app.get("/db/event/home", (request, response) => {
    let db = new sqlite.Database("data.db");
    db.all("SELECT Event.id AS eid, Event.name AS ename, Event.desc AS edesc, \
            Person.name AS pname FROM Event, Person \
            WHERE Person.id = Event.host", (err, rows) => {
        if (err) console.log(err);
        response.send(rows);
    });
    db.close();
});

app.get("/db/event/:id", (request, response) => {
    let db = new sqlite.Database("data.db");
    db.all(`SELECT Event.name AS ename, desc, Person.name AS pname, startDate, frequency \
            FROM Event, Person \
            WHERE Event.id = ${request.params.id}
            AND Person.id = host`, (err, rows) => {
        if (err) console.log(err);
        response.send(rows);
    });
    db.close();
});

app.get("/db/event/:id/people", (request, response) => {
    let db = new sqlite.Database("data.db");
    db.all(`SELECT Person.name AS pname \
            FROM Person, PersonEvent \
            WHERE PersonEvent.personID = Person.id \
            AND PersonEvent.eventID = ${request.params.id}`, (err, rows) => {
        if (err) console.log(err);
        response.send(rows);
    });
    db.close();
});

app.post("/db/event", (request, response) => {
    if (request.body.password === config.password) {
        let db = new sqlite.Database("data.db");
        db.run(`INSERT INTO Event (name, desc, host, startDate) \
                VALUES (${request.body.name}, ${request.body.desc}, ${request.body.date}, ${request.body.date});`);
    }
})

app.listen(config.port, () => {
    console.log(`Starting Synanto server on port ${config.port}`);
});
