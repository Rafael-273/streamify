import express from "express";
import generalControllers from "./controllers/general.js";
import path from 'path'; // Importe path

const { videoController } = generalControllers;
const { userController } = generalControllers;
const { findAllVideos, addVideo, findVideo, updateVideo, deleteVideo } = videoController;
const { findAllUsers, addUser, findUser, updateUser, deleteUser} = userController

const routes = express.Router();

// Rotas de API
routes.get('/api/videos', findAllVideos);
routes.post('/api/videos', addVideo);
routes.get('/api/videos/:id', findVideo);
routes.put('/api/videos/:id', updateVideo);
routes.delete('/api/videos/:id', deleteVideo);
routes.get('/api/users', findAllUsers);
routes.post('/api/users', addUser);
routes.get('/api/users/:id', findUser);
routes.put('/api/users/:id', updateUser);
routes.delete('/api/users/:id', deleteUser);

export { routes as default };
