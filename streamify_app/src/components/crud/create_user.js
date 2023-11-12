import React, { useState } from 'react';
import './cadastro.css';
import axios from 'axios';

function AddUser() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    password: '',
    email: '',
    telephone: '',
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
      const API_BASE_URL = "http://localhost:3001/api";
      const response = await axios.post(`${API_BASE_URL}add/user`, formData);

      if (response.status === 201) {
        alert('Usuário criado com sucesso!');
        window.location.href = "/"; 
      }
    } catch (error) {
      console.error('Erro ao criar o usuário:', error);
      alert('Erro ao criar seu usuário');
    }
  };

  return (
    <div className="div_create">
      <div className="create_body">
        <h1>Create User</h1>
        <div className="scrool_info">
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <input
              type="text"
              id="firstName"
              className='text'
              name="firstName"
              placeholder='Digite o primeiro nome'
              value={formData.firstName}
              onChange={handleInputChange}
            />
            <input
              type="text"
              id="lastName"
              className='text'
              name="lastName"
              placeholder='Digite o sobrenome'
              value={formData.lastName}
              onChange={handleInputChange}
            />
            <input
              type="number"
              id="age"
              className='text'
              name="age"
              placeholder='Digite a idade'
              value={formData.age}
              onChange={handleInputChange}
            />
            <input
              type="password"
              className='text'
              id="password"
              name="password"
              placeholder='Digite a senha'
              value={formData.password}
              onChange={handleInputChange}
            />
            <input
              type="email"
              className='text'
              id="email"
              name="email"
              placeholder='Digite o e-mail'
              value={formData.email}
              onChange={handleInputChange}
            />
            <input
              type="text"
              id="telephone"
              className='text'
              name="telephone"
              placeholder='Digite o telefone'
              value={formData.telephone}
              onChange={handleInputChange}
            />
            <button type="submit">Save</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddUser;
