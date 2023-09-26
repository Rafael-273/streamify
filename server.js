import express from "express";
import routes from "./routes.js";
import { Sequelize } from "sequelize";

const app = express();
const sequelize = new Sequelize("mysql://root:5456@localhost:3306/video_platform");

app.use(express.json());
app.use("/", routes);

sequelize
  .sync()
  .then(() => {
    console.log(`Banco de dados conectado`);
    app.listen(3000, () => {
      console.log("Servidor iniciado na porta 3000");
    });
  })
  .catch((error) => {
    console.error("Erro ao sincronizar banco de dados:", error);
  });
