import styles from "@/styles/Home.module.css";
//import OneProject from "./copy";
import Link from "next/link";


function OneProject(props) {
    const { imgSource, title, desc, hrefLink } = props;
    return (
      <div class="container px-6 mb-8 mx-auto">
        <section class="text-gray-800">
          <div class="flex flex-wrap flex-row">
            <div class="grow-0 shrink-0 overflow-hidden">
              <img
                src={imgSource}
                className="shadow-lg overflow-hidden rounded-lg mb-6 transition duration-300 ease-in-out hover:scale-110"
                width={400}
                height={400}
                alt=""
              />
            </div>
  
            <div class="pl-8 grow-0 shrink-0 basis-auto w-1/2 text-left">
              <Link href={hrefLink} >
                <h5 class="text-xl font-semibold mb-6 hover:underline">
                  {title}
                </h5>
              </Link>
              <div class="mb-6 flex space-x-4 justify-center md:justify-start"></div>
              <p>{desc}</p>
            </div>
          </div>
        </section>
      </div>
    );
  }

export default function FirstPost() {
    return(
        <main className={styles.main2}>
        <div className="flex flex-col">
        <h1 className="text-4xl mb-12 text-center pb-2"> Work at Video Analytics Lab @ IISC </h1>
        <OneProject
            imgSource = "../.././work_icons_res/paper_emnlp.jpg"
            title = "CapsFlow: Optical Flow Estimation with Capsule Networks"
            desc = "CapsFlow: Optical Flow Estimation with Capsule Networks"
            hrefLink = "https://arxiv.org/abs/2304.00306"
        />
        
        
        <OneProject
            imgSource = "../.././work_icons_res/paper_emnlp.jpg"
            title = "CapsFlow: Optical Flow Estimation with Capsule Networks"
            desc = "CapsFlow: Optical Flow Estimation with Capsule Networks"
            hrefLink = "https://arxiv.org/abs/2304.00306"
        />
        
        
        <OneProject
            imgSource = "../.././work_icons_res/paper_emnlp.jpg"
            title = "CapsFlow: Optical Flow Estimation with Capsule Networks"
            desc = "CapsFlow: Optical Flow Estimation with Capsule Networks"
            hrefLink = "https://arxiv.org/abs/2304.00306"
        />
        
        </div>
        </main>
    )
  }