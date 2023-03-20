import React, { useState } from "react";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import Login from "./Login";
import Register from "./Register";

const Navbar = () => {
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);

  const handleSaveNote = (e, articleId) => {
    const event = e || window.event;
    event.preventDefault();
    setArticleId(articleId);

    setLogin(false);
  };

  const handleLogin = () => {
    setLogin(true);
  };

  const handleRegister = () => {
    setRegister(true);
  };
  return (
    <>
      <div className={styles.container}>
        <span className={styles.logo}>

        <Link href={`/`}>
          MVX
          </Link>
        </span>

        <div className={styles.menu}>
          <span>
          <Link href={`/`}>
           Home
           </Link>
          </span>
          <span>About us</span>

          <span>
          <Link href={`/MCS`}>
            MCs
            </Link>
          </span>

          <span>Events organizers</span>
        </div>

        <div className={styles.auth}>
          
          <span className={styles.register} onClick={handleRegister}>
            Get notified with events
          </span>
        </div>
      </div>

      
      {register && <Register />}
    </>
  );
};

export default Navbar;
