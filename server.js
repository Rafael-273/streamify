import express from "express";
import routes from "./routes.js";
import { Sequelize } from "sequelize";
import path from 'path';
import cors from "cors"; 

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const app = express();
const sequelize = new Sequelize("mysql://root:5456@localhost:3306/video_platform");

app.use(express.json());
app.use(express.static(path.join(__dirname, 'client/build')));
app.use("/", routes);


const corsOptions = {
  origin: "http://localhost:3000", // Altere para a origem do seu aplicativo React
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

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
