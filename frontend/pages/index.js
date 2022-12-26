import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Category from "../components/Category";
import Navbar from "../components/NavBar";
import Featured from "../components/Featured";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Navbar />
      <Featured />
    </div>
  );
}
