import {User, Video, Channel} from "../models/clientsModel.js";

async function findAllVideos(req, res) {
    try {
      const videos = await Video.findAll();
      res.json(videos);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao buscar vídeos' });
    }
}
  
export default { findAllVideos };
