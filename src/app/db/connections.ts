import sqlite3 from "sqlite3";
import path from "path";
import dotenv from "dotenv";
dotenv.config();

class Database {
  private db: sqlite3.Database;

  constructor() {
    const dbPath = path.join(process.cwd(), "../../database.sqlite");
    this.db = new sqlite3.Database(dbPath);
    // Aca podemos condicionalmente crear las tablas si no existen con una variable de entorno
    this.init().catch((err) => {
      console.error("Error initializing database:", err)
    })

    console.log(dbPath);
  }

  private async init() {
    if (process.env.POPULATE_DB === "true") {
      await this.run(`
         CREATE TABLE IF NOT EXISTS usuarios (
          id TEXT PRIMARY KEY,
          nombre TEXT NOT NULL,
          apellido TEXT NOT NULL,
          email TEXT NOT NULL UNIQUE,
          telefono TEXT NOT NULL,
          contrasena TEXT NOT NULL,
          docente INTEGER DEFAULT 0,
          institucion TEXT,
          pais TEXT,
          provincia TEXT,
          ciudad TEXT,
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
      `);
    }
  }

  async run(sql: string, params: any[] = []): Promise<void> {
    return new Promise((resolve, reject) => {
      this.db.run(sql, params, function (err) {
        if (err) reject(err);
        else resolve();
      });
    });
  }

  async get<T>(sql: string, params: any[] = []): Promise<T | undefined> {
    return new Promise((resolve, reject) => {
      this.db.get(sql, params, (err, row) => {
        if (err) reject(err);
        else resolve(row as T);
      });
    });
  }

  async all<T>(sql: string, params: any[] = []): Promise<T[]> {
    return new Promise((resolve, reject) => {
      this.db.all(sql, params, (err, rows) => {
        if (err) reject(err);
        else resolve(rows as T[]);
      });
    });
  }

  close(): void {
    this.db.close();
  }
}


export const database = new Database();