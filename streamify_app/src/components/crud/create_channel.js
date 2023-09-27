import React, { useState } from 'react';
import './cadastro.css';
import axios from 'axios';

function AddChannel() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    cover: null,
    banner: null,
  });

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('description', formData.description);
      formDataToSend.append('cover', formData.cover);
      formDataToSend.append('banner', formData.banner);

      const response = await axios.post('/api/channels', formDataToSend);

      if (response.status === 201) {
        console.log('Canal criado com sucesso!');
        // Redirecione para a página de destino após o sucesso (por exemplo, a página inicial)
      }
    } catch (error) {
      console.error('Erro ao criar o canal:', error);
    }
  };

  return (
    <div className="div_create">
      <div className="create_body">
        <h1>Add Channel</h1>
        <div className="scrool_info">
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <input
              type="text"
              id="title"
              name="name"
              placeholder='Digite o nome do canal'
              value={formData.name}
              onChange={handleInputChange}
            />
            <textarea
              id="description"
              name="description"
              placeholder='Digite a descrição do canal'
              value={formData.description}
              onChange={handleInputChange}
            ></textarea>
            <label className="input-file-trigger input-cover" htmlFor="cover">
              Selecione a Capa
            </label>
            <input
              type="file"
              id="cover"
              name="cover"
              accept="image/*"
              hidden
              onChange={handleInputChange}
            />
            {formData.cover && (
              <img src={URL.createObjectURL(formData.cover)} alt="Cover Preview" />
            )}
            <label className="input-file-trigger input-banner" htmlFor="banner">
              Selecione o Banner
            </label>
            <input
              type="file"
              id="banner"
              name="banner"
              accept="image/*"
              hidden
              onChange={handleInputChange}
            />
            {formData.banner && (
              <img src={URL.createObjectURL(formData.banner)} alt="Banner Preview" />
            )}
            <button type="submit">Save</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddChannel;
