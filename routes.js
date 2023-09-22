import express from "express";
import videos from "./src/controllers/clients.js";

const routes = express.Router();

routes.get("/", (req, res) => {
  return res.json({ name: "Ciclano Fulano" });
});

routes.get("/videos", videos.findAllVideos);

export { routes as default };
