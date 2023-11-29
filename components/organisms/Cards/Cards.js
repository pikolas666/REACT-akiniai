import Card from '../../molecules/Card/Card';
import styles from './Cards.module.css'

const Cards = ({ data }) => (
  <div className={styles.CardWrapper}>
    {data.map((item) => (
      <Card key={item.id} {...item} />
    ))}
  </div>
);

export default Cards;