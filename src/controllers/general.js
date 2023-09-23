import {User, Video, Channel} from "../models/GeneralModel.js";

function findAllUsers(req, res) {
  User.findAll().then((result) => res.json(result));
}

function findUser(req, res) {
  User.findByPk(req.params.id).then((result) => {
    if (!result) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }
    res.json(result);
  });
}

function findAllVideos(req, res) {
    Video.findAll().then((result) => res.json(result));
}

function findVideo(req, res) {
    Video.findByPk(req.params.id).then((result) => {
        if (!result) {
        return res.status(404).json({ error: 'Vídeo não encontrado' });
        }
        res.json(result);
    });
}

function findAllChannels(req, res) {
    Channel.findAll().then((result) => res.json(result));
}

function findChannel(req, res) {
    Channel.findByPk(req.params.id).then((result) => {
        if (!result) {
        return res.status(404).json({ error: 'Canal não encontrado' });
        }
        res.json(result);
    });
}

function addUser(req, res) {
  const { firstName, lastName, age, password, email, photo, telephone } = req.body;

  User.create({
    firstName,
    lastName,
    age,
    password,
    email,
    photo,
    telephone,
  }).then((result) => res.json(result));
}

function addVideo(req, res) {
    const { title, description, thumb, banner, favorited, media_file } = req.body;
  
    Video.create({
      title,
      description,
      thumb,
      banner,
      favorited,
      media_file,
    }).then((result) => res.json(result));
}

function addChannel(req, res) {
    const { name, description, cover, banner } = req.body;
  
    Channel.create({
      name,
      description,
      cover,
      banner,
    }).then((result) => res.json(result));
}

async function updateUser(req, res) {
  const userId = req.params.id;
  const { firstName, lastName, age, password, email, photo, telephone } = req.body;

  const userToUpdate = await User.findByPk(userId);

  if (!userToUpdate) {
    return res.status(404).json({ error: 'Usuário não encontrado' });
  }

  userToUpdate.firstName = firstName;
  userToUpdate.lastName = lastName;
  userToUpdate.age = age;
  userToUpdate.password = password;
  userToUpdate.email = email;
  userToUpdate.photo = photo;
  userToUpdate.telephone = telephone;

  await userToUpdate.save();

  res.json(userToUpdate);
}

async function updateVideo(req, res) {
    const videoId = req.params.id;
    const { title, description, thumb, banner, favorited, media_file } = req.body;
  
    const videoToUpdate = await Video.findByPk(videoId);
  
    if (!videoToUpdate) {
      return res.status(404).json({ error: 'Vídeo não encontrado' });
    }
  
    // Atualize os campos desejados
    videoToUpdate.title = title;
    videoToUpdate.description = description;
    videoToUpdate.thumb = thumb;
    videoToUpdate.banner = banner;
    videoToUpdate.favorited = favorited;
    videoToUpdate.media_file = media_file;
  
    await videoToUpdate.save();
  
    res.json(videoToUpdate);
}

async function updateChannel(req, res) {
    const channelId = req.params.id;
    const { name, description, cover, banner } = req.body;
  
    const channelToUpdate = await Channel.findByPk(channelId);
  
    if (!channelToUpdate) {
      return res.status(404).json({ error: 'Canal não encontrado' });
    }
  
    // Atualize os campos desejados
    channelToUpdate.name = name;
    channelToUpdate.description = description;
    channelToUpdate.cover = cover;
    channelToUpdate.banner = banner;
  
    await channelToUpdate.save();
  
    res.json(channelToUpdate);
}

async function deleteUser(req, res) {
  const userId = req.params.id;

  const userToDelete = await User.findByPk(userId);

  if (!userToDelete) {
    return res.status(404).json({ error: 'Usuário não encontrado' });
  }

  await userToDelete.destroy();

  User.findAll().then((result) => res.json(result));
}

async function deleteVideo(req, res) {
  const videoId = req.params.id;

  const videoToDelete = await Video.findByPk(videoId);

  if (!videoToDelete) {
    return res.status(404).json({ error: 'Vídeo não encontrado' });
  }

  await videoToDelete.destroy();

  Video.findAll().then((result) => res.json(result));
}

async function deleteChannel(req, res) {
  const channelId = req.params.id;

  const channelToDelete = await Channel.findByPk(channelId);

  if (!channelToDelete) {
    return res.status(404).json({ error: 'Canal não encontrado' });
  }

  await channelToDelete.destroy();

  Channel.findAll().then((result) => res.json(result));
}

export default {
    userController: {
      findAllUsers,
      findUser,
      addUser,
      updateUser,
      deleteUser,
    },
    videoController: {
      findAllVideos,
      findVideo,
      addVideo,
      updateVideo,
      deleteVideo,
    },
    channelController: {
      findAllChannels,
      findChannel,
      addChannel,
      updateChannel,
      deleteChannel,
    },
};