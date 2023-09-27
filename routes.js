import express from "express";
import generalControllers from "./controllers/general.js";
import path from 'path'; // Importe path

const { videoController } = generalControllers;
const { findAllVideos, addVideo, findVideo, updateVideo, deleteVideo } = videoController;

const routes = express.Router();

// Rotas de API
routes.get('/api/videos', findAllVideos);
routes.post('/api/videos', addVideo);
routes.get('/api/videos/:id', findVideo);
routes.put('/api/videos/:id', updateVideo);
routes.delete('/api/videos/:id', deleteVideo);

export { routes as default };
