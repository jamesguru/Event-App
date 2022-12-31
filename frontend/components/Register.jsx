import React, { useState } from "react";
import styles from "../styles/Register.module.css";
import Link from "next/link";

const Register = () => {
  const [Register, setRegister] = useState(false);
  return (
    <div className={styles.register}>
      <div className={styles.register_item}>
        <div className={styles.register_input}>
          <div className={styles.back_home}>
            <Link href="/">
              <button>Back home</button>
            </Link>
          </div>

          <h1>Create Account</h1>
          <span>Fill in the forms to register.</span>
          <label htmlFor="">Username</label>
          <input type="text" />

          <label htmlFor="">Email</label>
          <input type="text" />
          <label htmlFor="">Password</label>
          <input type="text" />
          <span>Forget password</span>
          <button>Register</button>
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
