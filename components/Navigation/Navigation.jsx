// import Link from 'next/link';
// import styles from '@/components/Navigation/Navigation.module.css';

// const Navigation = () => (

//   const [showNav, setShowNav] = useState(false);
  
//   const toggleNav = () => {
//       console.log('hit')
//     setShowNav(!showNav);
//     console.log(showNav)

//   };

//   <nav className={styles.nav}>
//     <Link href="/">Pagrindinis</Link>
//     <Link href="/akiniai">Akiniai</Link>
//     <Link href="/kontaktai">Kontaktai</Link>
//   </nav>
// );

// export default Navigation;

import React from 'react';
import {useState} from 'react'
import Link from 'next/link'
import styles from './Navigation.module.css'; 

const Navigation = () => {
    const [showNav, setShowNav] = useState(false);
  
    const toggleNav = () => {
        console.log('hit')
      setShowNav(!showNav);
      console.log(showNav)

    };
  
    return (
        <>
        <div className={styles.wrapper}>
            <div className={styles.burgerIcon} onClick={toggleNav}>
                &#9776; 
            </div>
            <div className={styles.nav}>
        
                <nav className={styles.nav}>
                  <Link href="/">Pagrindinis</Link>
                  <Link href="/akiniai">Akiniai</Link>
                  <Link href="/kontaktai">Kontaktai</Link>
                </nav>
            
            </div>
           
        </div>
         <div className={showNav ? styles.show : styles.dontShow}>
            <Link href="/">Pagrindinis</Link>
            <Link href="/akiniai">Akiniai</Link>
            <Link href="/kontaktai">Kontaktai</Link>
         
     </div>
     </>
    );
  };
  
  export default Navigation;