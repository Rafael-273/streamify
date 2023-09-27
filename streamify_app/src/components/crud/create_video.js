import React, { useState } from 'react';
import './cadastro.css';
import axios from 'axios';

function AddVideo() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    thumb: null,
    media_file: null,
    selectedChannel: '',
  });

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
      selectedChannel: value, // Atualize o estado do canal selecionado
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Crie um objeto FormData para enviar os dados do formulário, incluindo arquivos
      const formDataToSend = new FormData();
      formDataToSend.append('title', formData.title);
      formDataToSend.append('description', formData.description);
      formDataToSend.append('thumb', formData.thumb);
      formDataToSend.append('selectedChannel', formData.selectedChannel);
      formDataToSend.append('media_file', formData.media_file);
  
      // Envie a solicitação POST para o servidor
      const response = await axios.post('/api/videos', formDataToSend);
  
      if (response.status === 201) {
        console.log('Vídeo salvo com sucesso!');
        // Redirecione para a página de destino após o sucesso (por exemplo, a página inicial)
      }
    } catch (error) {
      console.error('Erro ao salvar o vídeo:', error);
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
            <label className="input-file-trigger input-thumb" htmlFor="thumb">
              Selecione a Thumb
            </label>
            <input
              type="file"
              id="thumb"
              name="thumb"
              accept="image/*"
              hidden
              onChange={handleInputChange}
            />
            {formData.thumb && (
              <img src={URL.createObjectURL(formData.thumb)} alt="Thumb Preview" />
            )}
            <select
              id="selectedChannel"
              name="selectedChannel"
              value={formData.selectedChannel}
              onChange={handleChannelChange}
            >
              <option value="">Selecione o Canal</option>
              <option value="canal1">Canal 1</option>
              <option value="canal2">Canal 2</option>
            </select>

            <label className="input-file-trigger input-media" htmlFor="media_file">
              Selecione o Video
            </label>
            <input
              type="file"
              id="media_file"
              name="media_file"
              accept="video/*"
              hidden
              onChange={handleInputChange}
            />
            <button type="submit">Save</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddVideo;
