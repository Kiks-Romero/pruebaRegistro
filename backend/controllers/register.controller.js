const db = require("../db");

const createPerson = (req, res) => {
  const { name, birthDate } = req.body;

  db.run(
    "INSERT INTO people(name,birthDate) VALUES(?,?)",
    [name, birthDate],
    function (err) {
      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        message: "Person created",
        id: this.lastID,
      });
    },
  );
};

const getPeople = (req, res) => {
  console.log("GET PEOPLE");

  db.all("SELECT * FROM people", (err, rows) => {
    console.log(err);
    console.log(rows);

    if (err) {
      return res.status(500).json(err);
    }

    res.json(rows);
  });
};
module.exports = {
  createPerson,
  getPeople,
};
