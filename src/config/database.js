require("dotenv").config();
const { Client } = require("pg");

const client = new Client({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 5432, // Adiciona a porta, se não estiver no .env, o padrão é 5432
});

async function runConnection() {
  try {
    // Conectando ao banco de dados
    await client.connect();
    console.log("The database connection was successful.");
  } catch (error) {
    console.error("Unable to connect to database:", error);
  }
}

runConnection();

module.exports = client;
