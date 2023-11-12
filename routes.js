import express from "express";
import generalControllers from "./controllers/general.js";
import path from 'path';

const { videoController } = generalControllers;
const { userController } = generalControllers;
const { channelController } = generalControllers;
const { findAllVideos, addVideo, findVideo, updateVideo, deleteVideo } = videoController;
const { findAllUsers, addUser, findUser, updateUser, deleteUser} = userController;
const { findAllChannels, addChannel, findChannel, updateChannel, deleteChannel} = channelController;

const routes = express.Router();

import fs from 'fs';
import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Streamify API',
      version: '1.0.0',
      description: 'Streamify Documentation',
    },
  },
  // Caminho para os arquivos de anotação no seu código
  apis: ['routes.js'],
};


const specs = swaggerJsdoc(options);

// Salva a especificação OpenAPI em um arquivo JSON
fs.writeFileSync('openapi-spec.json', JSON.stringify(specs, null, 2));


// Adicione no final do seu arquivo de rotas
import swaggerUi from 'swagger-ui-express';

// Adiciona a rota de documentação do Swagger
routes.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));


/**
 * @openapi
 * /api/videos:
 *   get:
 *     summary: Retorna todos os vídeos.
 *     responses:
 *       '200':
 *         description: Sucesso.
 */
routes.get('/api/videos', findAllVideos);

/**
 * @openapi
 * /api/add/video:
 *   post:
 *     summary: Adiciona um novo vídeo.
 *     responses:
 *       '200':
 *         description: Sucesso.
 */
routes.post('/api/add/video', addVideo);

/**
 * @openapi
 * /api/video/{id}:
 *   get:
 *     summary: Retorna um vídeo pelo ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do vídeo.
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Sucesso.
 */
routes.get('/api/video/:id', findVideo);

/**
 * @openapi
 * /api/videos/{id}:
 *   put:
 *     summary: Atualiza um vídeo pelo ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do vídeo.
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Sucesso.
 */
routes.put('/api/videos/:id', updateVideo);

/**
 * @openapi
 * /api/videos/{id}:
 *   delete:
 *     summary: Deleta um vídeo pelo ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do vídeo.
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Sucesso.
 */
routes.delete('/api/videos/:id', deleteVideo);

/**
 * @openapi
 * /api/users:
 *   get:
 *     summary: Retorna todos os usuários.
 *     responses:
 *       '200':
 *         description: Sucesso.
 */
routes.get('/api/users', findAllUsers);

/**
 * @openapi
 * /api/add/user:
 *   post:
 *     summary: Adiciona um novo usuário.
 *     responses:
 *       '200':
 *         description: Sucesso.
 */
routes.post('/api/add/user', addUser);

/**
 * @openapi
 * /api/users/{id}:
 *   get:
 *     summary: Retorna um usuário pelo ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do usuário.
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Sucesso.
 */
routes.get('/api/users/:id', findUser);

/**
 * @openapi
 * /api/users/{id}:
 *   put:
 *     summary: Atualiza um usuário pelo ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do usuário.
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Sucesso.
 */
routes.put('/api/users/:id', updateUser);

/**
 * @openapi
 * /api/users/{id}:
 *   delete:
 *     summary: Deleta um usuário pelo ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do usuário.
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Sucesso.
 */
routes.delete('/api/users/:id', deleteUser);

/**
 * @openapi
 * /api/channels:
 *   get:
 *     summary: Retorna todos os canais.
 *     responses:
 *       '200':
 *         description: Sucesso.
 */
routes.get('/api/channels', findAllChannels);

/**
 * @openapi
 * /api/add/channel:
 *   post:
 *     summary: Adiciona um novo canal.
 *     responses:
 *       '200':
 *         description: Sucesso.
 */
routes.post('/api/add/channel', addChannel);

/**
 * @openapi
 * /api/channels/{id}:
 *   get:
 *     summary: Retorna um canal pelo ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do canal.
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Sucesso.
 */
routes.get('/api/channels/:id', findChannel);

/**
 * @openapi
 * /api/channels/{id}:
 *   put:
 *     summary: Atualiza um canal pelo ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do canal.
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Sucesso.
 */
routes.put('/api/channels/:id', updateChannel);

/**
 * @openapi
 * /api/channels/{id}:
 *   delete:
 *     summary: Deleta um canal pelo ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do canal.
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Sucesso.
 */
routes.delete('/api/channels/:id', deleteChannel);

export { routes as default };
