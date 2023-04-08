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
        <h1 className="text-4xl font-mono mb-12 text-center pb-2">
          {" "}
          Work at Indian Institute of Remote Sensing(IIRS), ISRO, as an intern
          (Summer 2017){" "}
        </h1>
        <OneProject
          imgSource="../.././work_icons_res/iirs_work_2.PNG"
          title="Vehicular Traffic Analysis"
          desc=<div className="text-lg">
          <p className="mb-4">Spent Summer 2017 as an intern in the <span className="font-bold">Geo-informatics Department</span> at IIRS. Worked under <a className="underline" href="https://www.iirs.gov.in/Ashutosh_Kumar_Jha"> Ashutosh Kumar Jha</a> on road asset management analysis as part of the Urban Planning Project. </p>
          
          <p className="mb-8">
          Developed a deep learning solution on Keras using Faster-RCNN and FCN for mapping of road-assets in the context of Indian roads. The model was finetuned on images of Dehradun roads obtained from IIRS.
          </p>

          <p>
            You can read the final report sent to the Urban & Regional Planning Department <a className="underline font-bold" href="https://github.com/RahulSChand/IIRS-Vehicle-Detection/blob/master/IIRS_Journal_Report_2017.docx">here</a>
          </p>
          </div>
          hrefLink="https://github.com/RahulSChand/IIRS-Vehicle-Detection"
        />
      </div>
    </main>
  );
}
