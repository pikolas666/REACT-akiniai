import React, { useState } from 'react';
import styles from './Form.module.css';

const ContactForm = () => {
  const [letterTitle, setLetterTitle] = useState('');
  const [letterContent, setLetterContent] = useState('');
  const [senderName, setSenderName] = useState('');
  const [checkbox, setCheckbox] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
   
  };
  

  if(!checkbox){
    console.log('prašau pažymėt checkboxa')
  } else {
    console.log(`title: ${letterTitle}, content${letterContent}, senderName${senderName},`)
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        placeholder="letterTitle"
        type="text"
        value={letterTitle}
        onChange={(e) => setLetterTitle(e.target.value)}
        required
      />

      <textarea
        className={styles.input}
        placeholder="letterContent"
        type="text"
        value={letterContent}
        onChange={(e) => setLetterContent(e.target.value)}
        required
      />

      <input
        className={styles.input}
        placeholder="senderName"
        type="text"
        value={senderName}
        onChange={(e) => setSenderName(e.target.value)}
        required
      />

      <label className={styles.checkbox}>
        <input
          className={styles.input}
          type="checkbox"
          checked={checkbox}
          onChange={(e) => setCheckbox(e.target.checked)}
          required
        />
        Sutinku, kad su manim butu susisiekta el. pastu
      </label>

      <button className={styles.button} type="submit">
        Siusti pranesima
      </button>
    </form>
  );
};

export default ContactForm;
