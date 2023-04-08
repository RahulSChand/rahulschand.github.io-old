import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });



export default function Home() {
  return (
    <>
      <Head>
        <title>Rahul Chand Homepage</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <div className="flex-col">
        <main className={styles.main}>
          <div className="basis-1/4">
            <img
              className={styles.borderCircle}
              src="./cat.jpg"
              alt="Next.js Logo"
              width={200}
              height={200}
              style={{
                margin: "auto",
              }}
            />
            <h1 className="text-black text-center text-5xl font-bold">
              Rahul Chand
            </h1>
            <div className="flex flex-row justify-center py-4">
              <div>
                <a href="https://github.com/RahulSChand">
                  <img
                    src="./git_icon.png"
                    className="transition duration-300 ease-in-out hover:scale-125"
                    alt="git icon"
                    width={48}
                    height={48}
                    style={{
                      margin: "auto",
                    }}
                  />
                </a>
              </div>
              <div>
                <a href="https://in.linkedin.com/in/rahulschand">
                  <img
                    src="./linkedn_icon_2.png"
                    className="transition duration-300 ease-in-out hover:scale-125"
                    alt="git icon"
                    width={48}
                    height={48}
                    style={{
                      margin: "auto",
                    }}
                  />
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <p className="text-center py-8 text-2xl font-sans overflow-wrap: normal w-1/2">
                Hello, I'm <span className="font-bold">Rahul</span>, an ML
                engineer. I completed my undergrad in Computer Science from BITS
                Pilani in 2019 & recently worked at Microsoft Research India as
                a Research Fellow. <br></br>
                <br></br>
                Previously I have also spent time at Indian Institute of
                Science(IISC), IIRS & Fintech firm Arcesium as a SDE.
              </p>
            </div>
          </div>
          <div className="basis-1/2">
            <h1 className="text-2xl">
              Link to{" "}
              <a
                className="underline transition duration-300 ease-in-out hover:font-bold"
                href="./resume/rahul_chand_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </h1>
            <h1 className="text-2xl">
              Link to{" "}
              <a
                className="underline transition duration-300 ease-in-out hover:font-bold"
                href="./blogs/card"
              >
                Projects
              </a>
            </h1>
          </div>
          <div className="basis-1/2"></div>

        </main>
      </div>
    </>
  );
}

//https://RahulSChand.github.io/