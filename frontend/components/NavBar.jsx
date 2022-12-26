import React from 'react';
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
 <div className={styles.container}>

    <span className={styles.logo}>MVX</span>

    <div className={styles.menu}>
        <span>Home</span>
        <span>About us</span>
        <span>MCs</span>

    </div>

    <div className={styles.auth}>
        <span className={styles.login}>Login</span>
        <span className={styles.register}>Register</span>
    </div>
 </div>
  )
}

export default Navbar