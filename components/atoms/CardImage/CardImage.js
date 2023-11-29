import Image from 'next/image';
import React from 'react';
import styles from './CardImage.module.css';

const CardImage = ({ src, alt }) => (
  <div className={styles.image}>
    <Image src={src} alt={alt} layout="responsive" width={200} height={200} />
  </div>
);

export default CardImage;