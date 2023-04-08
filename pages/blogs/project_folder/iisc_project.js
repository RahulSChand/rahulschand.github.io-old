import styles from "@/styles/Home.module.css";
//import OneProject from "./copy";
import Link from "next/link";

function OneProject(props) {
  const { imgSource, title, desc, hrefLink } = props;
  return (
    <div class="bg-scroll container px-6 mb-8 mx-auto">
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
    <main className={styles.main2}>
      <div className="flex flex-col">
        <h1 className="text-4xl mb-12 text-center pb-2">
          {" "}
          Work at Video Analytics Lab, IISC{" "}
        </h1>
        <OneProject
          imgSource="../.././work_icons_res/capsFlow.PNG"
          title="CapsFlow: Optical Flow Estimation with Capsule Networks"
          desc=<div>
            <p className="mb-2">
              Worked under{" "}
              <a
                href="http://cds.iisc.ac.in/faculty/venky/"
                className="font-bold underline"
              >
                Prof. Venkatesh Babu
              </a>{" "}
              in the{" "}
              <a className="font-bold underline" href="https://val.cds.iisc.ac.in/">Video analytics Lab</a> on the problem optical flow estimation using Capsule networks.
            </p>
            <p>
              The work was submitted to WACV 2019{" "}
              <a
                href="https://arxiv.org/abs/2304.00306"
                className="font-bold underline"
              >
                (arXiv)
              </a>
            </p>
          </div>
          hrefLink="https://arxiv.org/abs/2304.00306"
        />


        <OneProject
          imgSource="../.././work_icons_res/flow_dataset.PNG"
          title="Released open-source light weight Optical Flow dataset"
          desc=
          <div>
          <p className="mb-3">
          As part of the paper, we also released a light weight optical flow  dataset.
          </p>
          <p className="mb-3">
          Existing optical flow datasets (e.g. FlyingChairs) are prohibitively large (80GB+) which means sanity testing your flow models becomes time & resource consuming. 
          </p>
          <p>
          To overcome this issue, We released a light-weight on the fly generatable dataset (<a className="font-bold underline" href="https://github.com/RahulSChand/Optical-Flow-Shape-Dataset">Github</a>)
          </p>
          </div>
          hrefLink="https://github.com/RahulSChand/Optical-Flow-Shape-Dataset"
        />
      </div>
    </main>
  );
}
