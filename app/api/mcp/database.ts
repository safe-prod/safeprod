import sqlite3 from "sqlite3"

const db = new sqlite3.Database("database.db")

db.exec(
  `
  CREATE TABLE IF NOT EXISTS journal (
    id INTEGER PRIMARY KEY,
    lineItem TEXT NOT NULL,
    debit DECIMAL(10, 2) NOT NULL,
    credit DECIMAL(10, 2) NOT NULL,
  )
  `,
  (err) => {}
)

db.run(
  `INSERT INTO
   products(lineItem, debit, credit)
   VALUES(?, ?, ?)
  `,
  ["Cash", 100, 0],
  (err) => {}
)

const DBResult = db.all(
  `SELECT * FROM journal`,
  [],
  (err, rows) => {
    DBResult = rows
  }
)

db.close()

export { DBResult }
