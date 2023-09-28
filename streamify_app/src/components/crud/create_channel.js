import React, { useState, useEffect } from 'react';
import './cadastro.css';
import axios from 'axios';


function AddChannel() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    cover: '',
    banner: '',
    UserId: '',
  });

  const [users, setUsers] = useState([]); // Lista de usuários disponíveis

  useEffect(() => {
    async function fetchUsers() {
      try {
        const API_BASE_URL = "http://localhost:3001/api";
        const response = await axios.get(`${API_BASE_URL}/users`);
        setUsers(response.data); // Defina a lista de usuários
      } catch (error) {
        console.error('Erro ao buscar usuários:', error);
      }
    }

    fetchUsers();
  }, []);

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
      const API_BASE_URL = "http://localhost:3001/api";
      const response = await axios.post(`${API_BASE_URL}/add/channel`, formData);

      if (response.status === 201) {
        alert('Canal criado com sucesso!');
        window.location.href = "/";
      }
    } catch (error) {
      console.error('Erro ao criar o canal:', error.response.data);
      alert('Erro ao criar o canal');
    }
  };

  return (
    <div className="div_create">
      <div className="create_body">
        <h1>Add Event</h1>
        <div className="scrool_info">
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <input
              type="text"
              id="title"
              name="name"
              placeholder='Digite o nome do evento'
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
            <input
              type="text"
              id="cover"
              className='text'
              name="cover"
              placeholder='Digite a url de sua capa'
              onChange={handleInputChange}
            />
            <input
              type="text"
              id="banner"
              className='text'
              name="banner"
              placeholder='Digite a url de seu banner'
              onChange={handleInputChange}
            />
            <select
              id="userId"
              name="UserId"
              className='text'
              value={formData.userId}
              onChange={handleInputChange}
            >
              <option value="">Selecione um usuário</option>
              {users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.firstName} {user.lastName}
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

export default AddChannel;
