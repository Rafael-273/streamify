import express from "express";
import routes from "./routes.js";
import { Sequelize } from "sequelize"; // Importe Sequelize diretamente

const app = express();
const sequelize = new Sequelize("mysql://username:password@localhost:3306/database_name"); // Substitua com sua configuração

app.use(express.json());
app.use("/", routes);

sequelize
  .sync()
  .then(() => {
    console.log(`Banco de dados conectado: ${process.env.DB_NAME}`);
    app.listen(3000, () => {
      console.log("Servidor iniciado na porta 3000");
    });
  })
  .catch((error) => {
    console.error("Erro ao sincronizar banco de dados:", error);
  });
