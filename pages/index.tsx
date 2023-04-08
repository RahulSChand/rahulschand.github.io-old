import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });



export default function Home() {
  return (
    <>
      <Head>
        <title>Rahul Chand Homepage</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <div className="flex-col">
        <p className="text-red-500">Hello World</p>
      </div>
    </>
  );
}

//https://RahulSChand.github.io/
