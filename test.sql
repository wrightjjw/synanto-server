INSERT INTO Person (name, email) VALUES
    ("Josh", "wright.jjw@gmail.com"),
    ("Abigail", "abigail@test.com"),
    ("Lee", "lee@lee.com"),
    ("Dena", "dena@dena.com");

INSERT INTO Event (name, desc, host, startDate, frequency) VALUES
    ("Event 1", "This is Event 1", 1, "2020-07-08", 1),
    ("Event 2", "This is Event 2", 3, "2020-07-14", NULL);

INSERT INTO PersonEvent (personID, eventID) VALUES
    (2, 1),
    (3, 1),
    (4, 1),
    (1, 2),
    (2, 2);
