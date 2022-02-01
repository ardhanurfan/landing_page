import Head from "next/head";
import Image from "next/image";
import Featured from "../components/Featured";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>MOVIE</title>
        <link rel="icon" href="/favicon.ico" />
        <script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>
      </Head>
      <Featured/>
    </div>
  );
}
