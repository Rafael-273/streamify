import express from "express";
import routes from "./routes.js";
import { Sequelize } from "sequelize";
import path from 'path';

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const app = express();
const sequelize = new Sequelize("mysql://root:5456@localhost:3306/video_platform");

app.use(express.json());
app.use(express.static(path.join(__dirname, 'client/build')));
app.use("/", routes);

sequelize
  .sync()
  .then(() => {
    console.log(`Banco de dados conectado`);
    app.listen(3001, () => {
      console.log("Servidor iniciado na porta 3001");
    });
  })
  .catch((error) => {
    console.error("Erro ao sincronizar banco de dados:", error);
  });
