const sqlite3 = require("sqlite3").verbose();

console.log("Inicializando base de datos...");

const db = new sqlite3.Database("./database/database.sqlite", (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Base de datos conectada");
  }
});

db.serialize(() => {
  console.log("Creando tabla people...");

  db.run(
    `
        CREATE TABLE IF NOT EXISTS people (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            birthDate TEXT NOT NULL
        )
    `,
    (err) => {
      if (err) {
        console.error("Error creando tabla:", err);
      } else {
        console.log("Tabla creada correctamente");
      }
    },
  );
});

module.exports = db;
