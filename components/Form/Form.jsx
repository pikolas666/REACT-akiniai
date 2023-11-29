
import React, { useState } from 'react';
import axios from 'axios';
import styles from './Form.module.css';

const GlassesForm = ({ fetchData }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [photo, setPhoto] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'https://64ec4552f9b2b70f2bfa0585.mockapi.io/akiniai',
        {
          title,
          description,
          price,
          location,
          photo,
        }
      );

      // Assuming the response includes the newly added glasses data
      const newGlasses = response.data;

      if (response.status === 201) {
        // Clear the form
        setTitle('');
        setDescription('');
        setPrice('');
        setLocation('');
        setPhoto('');

        // Fetch data again
        fetchData();
      }
    } catch (error) {
      console.error('Error adding glasses:', error);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        placeholder="title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <input
        className={styles.input}
        placeholder="description"
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />

      <input
        className={styles.input}
        placeholder="price"
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />

      <input
        className={styles.input}
        placeholder="location"
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        required
      />

      <input
        className={styles.input}
        placeholder="Image url"
        type="text"
        value={photo}
        onChange={(e) => setPhoto(e.target.value)}
        required
      />

      <button className={styles.button} type="submit">
        Add Glasses
      </button>
    </form>
  );
};

export default GlassesForm;