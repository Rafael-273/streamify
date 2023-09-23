import express from "express";
import generalControllers from "./src/controllers/general.js";

const { videoController } = generalControllers;
const { findAllVideos, addVideo, findVideo, updateVideo, deleteVideo } = videoController;

const routes = express.Router();

routes.get("/", (req, res) => {
  return res.json({ name: "Ciclano Fulano" });
});

routes.get("/videos", findAllVideos);
routes.post('/addvideos', addVideo);

export { routes as default };