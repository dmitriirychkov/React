import React, { useState } from 'react';

import * as yup from 'yup';

const schema = yup.object().shape({
  username: yup.string().required('Имя пользователя обязательно'),
  email: yup.string().email('Некорректный email').required('Email обязателен'),
});

function App() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = async () => {
    try {
      await schema.validate(formData, { abortEarly: false });
      setErrors({});
      alert('Форма валидна!');
    } catch (err) {
      const newErrors = {};
      err.inner.forEach((error) => {
        newErrors[error.path] = error.message;
      });
      setErrors(newErrors);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Имя пользователя:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && <p className="error">{errors.username}</p>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
}

export default App;
