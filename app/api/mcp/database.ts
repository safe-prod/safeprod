import sqlite3 from "sqlite3" 
import { open } from "sqlite"

const db = await open({
  filename: "/database.db",
  driver: sqlite3.Database
})

await db.exec(`
  CREATE TABLE IF NOT EXISTS journal (
    id INTEGER PRIMARY KEY,
    lineItem TEXT NOT NULL,
    debit DECIMAL(10, 2) NOT NULL,
    credit DECIMAL(10, 2) NOT NULL
  )
`)

await db.exec(`
  INSERT INTO
  journal(lineItem, debit, credit)
  VALUES("Cash", 100, 0)
`)

export const DBResult = await db.all(
  `SELECT * FROM journal`
)

await db.close()
