import Image from 'next/image';
import wallpaper from '@/assets/glasses.jpg'
import styles from './Wallpaper.module.css'

const Wallpaper = () => {
  return (
    <Image className={styles.wallpaper}
        alt="glasses image"
        src={wallpaper}
        width={600}
        height={400}>
   </Image>
  )
}

export default Wallpaper