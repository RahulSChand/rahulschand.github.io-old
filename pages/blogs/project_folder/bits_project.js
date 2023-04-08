import styles from "@/styles/Home.module.css";
//import OneProject from "./copy";
import Link from "next/link";

function OneProject(props) {
  const { imgSource, title, desc, hrefLink } = props;
  return (
    
    <div  class="container px-6 mb-8 mx-auto">
      <section class="text-gray-800">
        <div class="flex flex-wrap flex-row">
          <div class="grow-0 shrink-0 overflow-hidden">
            <a href={hrefLink} target="_blank" rel="noopener noreferrer">
              <img
                src={imgSource}
                className="shadow-lg overflow-hidden rounded-3xl mb-6 transition duration-300 ease-in-out hover:scale-110"
                width={400}
                height={400}
                alt=""
              />
            </a>
          </div>

          <div class="pl-8 grow-0 shrink-0 basis-auto w-1/2 text-left">
            <a href={hrefLink} target="_blank" rel="noopener noreferrer">
              <h5 class="text-xl font-semibold mb-6 underline">{title}</h5>
            </a>
            <div class="mb-6 flex space-x-4 justify-center md:justify-start"></div>
            {/* <p className="text-lg">{desc}</p> */}
            {desc}
          </div>
        </div>
      </section>
    </div>
    
  );
}

export default function FirstPost() {
  return (
    <main className={styles.main2} >
      <div className="flex flex-col">
        <h1 className="text-4xl font-mono mb-12 text-center pb-2">
          {" "}
          Work at BITS Pilani as CS undergrad (2015-2019){" "}
        </h1>

        <OneProject
          imgSource="../.././work_icons_res/teach_asst_cat.jpg"
          title="Teaching Assistant"
          desc=<div className="text-lg">
            <p className="mb-2">
              Teaching assitant for the following courses:{" "}
            </p>

            <p>
              <span className="font-bold">Fall 2018: </span> Data Mining,
              Principles of Programming Languages & Computer Programming
            </p>
            <p>
              <span className="font-bold">Spring 2018: </span> Data Structues &
              Algorithms & Database Systems
            </p>
            <p>
              <span className="font-bold">Fall 2017: </span> Logic in Computer
              Science
            </p>
          </div>
          hrefLink="#"
        />

        <OneProject
          imgSource="../.././work_icons_res/paper_bits.PNG"
          title="TensorFlow implementation for 'Multi-Granularity Hierarchical Attention Fusion Networks' paper by Alibaba"
          desc="TensorFlow implementation of the paper for Squad dataset, completed as part of Neural Networks course project"
          hrefLink="https://github.com/RahulSChand/Multi-Granularity-Hierarchical-Attention-Fusion-Networks-for-Question-Answering---TensorFlow"
        />

        <OneProject
          imgSource="../.././work_icons_res/compiler.png"
          title="Compiler Construction"
          desc="Designed & Developed a compiler for a C-subtype language"
          hrefLink="https://github.com/RahulSChand/Compiler-Construction"
        />
      </div>
    </main>
  );
}
