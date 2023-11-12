import React, { useState, useEffect } from 'react';
import './cadastro.css';
import axios from 'axios';

function AddVideo() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    thumb: null,
    media_file: null,
    ChannelId: '',
  });

  const [channels, setChannels] = useState([]); // Lista de canais disponíveis

  useEffect(() => {
    async function fetchChannels() {
      try {
        const API_BASE_URL = "http://localhost:3001/api";
        const response = await axios.get(`${API_BASE_URL}/channels`);
        setChannels(response.data); // Defina a lista de canais
      } catch (error) {
        console.error('Erro ao buscar canais:', error);
      }
    }

    fetchChannels();
  }, []);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleChannelChange = (e) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      ChannelId: value, // Atualize o estado do canal selecionado
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const API_BASE_URL = "http://localhost:3001/api";
      const response = await axios.post(`${API_BASE_URL}/add/video`, formData);

      if (response.status === 201) {
        alert('Vídeo criado com sucesso!');
        window.location.href = "/";
      }
    } catch (error) {
      alert('Erro ao criar o Vídeo');
      console.error('Erro ao salvar o vídeo:', error);
      console.log(formData)
    }
  };

  return (
    <div className="div_create">
      <div className="create_body">
        <h1>Add Video</h1>
        <div className="scrool_info">
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <input
              type="text"
              id="title"
              name="title"
              placeholder='Digite o título'
              value={formData.title}
              onChange={handleInputChange}
            />
            <textarea
              id="description"
              name="description"
              placeholder='Digite a descrição do vídeo'
              value={formData.description}
              onChange={handleInputChange}
            ></textarea>
            <input
              type="text"
              id="thumb"
              name="thumb"
              placeholder='Digite a url da sua thumb'
              className='text'
              accept="image/*"
              onChange={handleInputChange}
            />
            <input
              type="text"
              id="media_file"
              placeholder='Digite a url do seu video'
              className='text'
              name="media_file"
              accept="video/*"
              onChange={handleInputChange}
            />
            <select
              id="selectedChannel"
              name="ChannelId"
              className='text'
              value={formData.ChannelId}
              onChange={handleChannelChange}
            >
              <option value="">Selecione um canal</option>
              {channels.map((channel) => (
                <option key={channel.id} value={channel.id}>
                  {channel.name}
                </option>
              ))}
            </select>
            <button type="submit">Save</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddVideo;
