import express from "express";
import generalControllers from "./controllers/general.js";
import path from 'path'; // Importe path

const { videoController } = generalControllers;
const { userController } = generalControllers;
const { channelController } = generalControllers;
const { findAllVideos, addVideo, findVideo, updateVideo, deleteVideo } = videoController;
const { findAllUsers, addUser, findUser, updateUser, deleteUser} = userController;
const { findAllChannels, addChannel, findChannel, updateChannel, deleteChannel} = channelController;

const routes = express.Router();

// Rotas de API
routes.get('/api/videos', findAllVideos);
routes.post('/api/add/video', addVideo);
routes.get('/api/videos/:id', findVideo);
routes.put('/api/videos/:id', updateVideo);
routes.delete('/api/videos/:id', deleteVideo);

routes.get('/api/users', findAllUsers);
routes.post('/api/add/user', addUser);
routes.get('/api/users/:id', findUser);
routes.put('/api/users/:id', updateUser);
routes.delete('/api/users/:id', deleteUser);

routes.get('/api/channels', findAllChannels);
routes.post('/api/add/channel', addChannel);
routes.get('/api/channels/:id', findChannel);
routes.put('/api/channels/:id', updateChannel);
routes.delete('/api/channels/:id', deleteChannel);

export { routes as default };