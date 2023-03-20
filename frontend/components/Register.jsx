import React, { useState } from "react";
import styles from "../styles/Register.module.css";
import Link from "next/link";

const Register = () => {
  const [Register, setRegister] = useState(false);

  const backHome = () => {
    window.location.reload()
  }
  return (
    <div className={styles.register}>
      <div className={styles.register_item}>
        <div className={styles.register_input}>
          <div className={styles.back_home}>
            
              <button onClick={backHome}>Back home</button>
         
          </div>

          
          <span>Fill in the form to get notified of events.</span>
          <label htmlFor="">Name</label>
          <input type="text" placeholder="John Doe"/>
          <label htmlFor="">Email</label>
          <input type="text" placeholder="johndoe@gmail.com" />
          <label htmlFor="">Phone</label>
          <input type="text" placeholder="+254727632051"/>
          
          <button>Get notified</button>
        </div>

        <div className={styles.image}>
          <div className={styles.image_title}>
            <span>Party like there is no tomorrow.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
