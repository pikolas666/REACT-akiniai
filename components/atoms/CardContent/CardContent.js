import React from 'react';
import styles from './CardContent.module.css';

const CardContent = ({ title, description, price, location }) => (
  <div className={styles.descriptionWrapper}>
    <h3 className={styles.h3}>{title}</h3>
    <p className={styles.p}>{description}</p>
    <p className={styles.p}>Price: ${price}</p>
    <p className={styles.p}>Location: {location}</p>
  </div>
);

export default CardContent;
