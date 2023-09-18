import Head from "next/head";

import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });



export default function Home() {
  return (
    <>
      <Head>
      
      {/* <!-- Google tag (gtag.js) --> */}
        <title>Rahul Chand Website</title>
        <meta name="description" content="Rahul Chand personal site :) :)"/>
      </Head>
      <div>
        <main className={styles.main}>
          <div className="basis-1/4 pt-6">
            <img
              className={styles.borderCircle}
              src="./cat.jpg"
              alt="Next.js Logo"
              width={200}
              height={150}
              style={{
                margin: "auto",
              }}
            />
            <h1 className="text-black text-center text-5xl font-bold pt-3 dark:text-white">
              Rahul Chand
            </h1>
            <div className="flex flex-row justify-center py-4">
              <div>
                <a href="https://github.com/RahulSChand">
                  <img
                    src="./git_icon_blue2.png"
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
            {/* <div className="flex-row">
                <a href="">
                  <img
                    src="./mail_icon.png"
                    className="transition duration-300 ease-in-out hover:scale-125"
                    alt="git icon"
                    width={48}
                    height={48}
                    style={{
                      margin: "auto",
                    }}
                  />
                  <div>chandrahul0320@gmail.com</div>
                </a>
              </div> */}
            <div className="flex pb-4">
              <p className="text-center text-xl font-sans">
              
              Hi 🤝 I'm <span className="font-bold">Rahul</span>. 
                I completed my undergrad in CS from BITS
                Pilani in 2019 &
                <br></br>
                recently worked at Microsoft Research on Extreme Classification. 
                <br>
                </br>
                Right now working on the <span className="underline">current</span> thing. 
                {/* <br></br>Check out my new <a className="underline font-semibold" target="_blank"
                rel="noopener noreferrer" href="https://github.com/RahulSChand/gpu_poor">github project</a>. */}
                {/* <br></br>Previously also spent time @ IISC, IIRS & Arcesium. */}
                
                <br></br>
                <br></br>
                
                
                
                {/* <span className="text-red-500 text-base">Currently looking for oportunities in the field of LLMs, scalable AI or ML optimization.</span> */}

              </p>
            </div>
            <hr className="border-gray-400"></hr>
          </div>
          <div className="basis-1/2 justify-center">
            <h1 className="font-mono justify-center text-center">
              
              <a
                className="underline transition duration-300 text-lg ease-in-out hover:font-bold"
                href="./resume/rahul_chand_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </h1>
            <h1 className="font-mono text-center">
              
              <a
                className="underline transition duration-300 ease-in-out hover:font-bold text-lg"
                href="./blogs/card"
              >
                Projects
              </a>
            </h1>
            <h1 className="font-mono text-center text-lg">
              
              <a
                className="underline transition duration-300 ease-in-out hover:font-bold"
                href="./blogs/pages/posts/landing"
              >
                Technical Blog
              </a>
            </h1>
            <h2 className="font-mono text-center">
              
              <a
                className="underline transition duration-300 ease-in-out hover:font-bold"
                href="./blogs/pages/postsPersonal/landing"
              >
                Personal Blog
              </a>
            </h2>
          </div>
          
          <div className="basis-1/2 justify-center text-center">
          <span className="text-base font-mono text-center">Contact: chandrahul0320[at]gmail[.]com</span>
          </div>
        </main>
      </div>
    </>
  );
}

//https://RahulSChand.github.io/
