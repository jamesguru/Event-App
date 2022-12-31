import React,{useState} from "react";
import styles from "../styles/Login.module.css";
import Link from "next/link";

const Login = ({ newsArticleId, onClickCallback }) => {
    const [login,setLogin] = useState(false)
  return <div className={styles.login}>

    <div className={styles.login_item}>
        <div className={styles.login_input}>
            <div className={styles.back_home}>

                <Link href="/">
                <button >Back home</button>
                </Link>
            

            </div>
          

            <h1>Welcome back</h1>
            <span>Welcome back! please enter your details</span>

            <label htmlFor="">Email</label>
            <input type="text" />
            <label htmlFor="">Password</label>
            <input type="text" />
            <span>Forget password</span>
            <button onClick={(e) => onClickCallback(e, newsArticleId)}>Login</button>

        </div>

        <div className={styles.image}>

        <div className={styles.image_title}>
            <span>Party like there is no tomorrow.</span>
        </div>

        </div>
    </div>
  </div>;
};

export default Login;
