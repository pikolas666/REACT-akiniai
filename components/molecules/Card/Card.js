import React from 'react';
import CardImage from '../../atoms/CardImage/CardImage';
import CardContent from '../../atoms/CardContent/CardContent';
import styles from './Card.module.css';

const Card = ({ title, price, photo, description, location }) => (
  <div className={styles.wrapper}>
    <CardImage src={photo} alt="glasses image" />
    <CardContent title={title} description={description} price={price} location={location} />
  </div>
);

export default Card;
