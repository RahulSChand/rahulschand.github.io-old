import styles from "@/styles/Home.module.css";
import Head from 'next/head'

function TabPanel(props) {
  const { imgSource, text, url } = props;

  return (
    <div class="block max-w-sm rounded-lg bg-teal-50 shadow-xl dark:bg-neutral-700 hover:bg-cyan-100">
      <a href={url}>
        <div className="overflow-hidden">
          <img
            class="rounded-t-lg overflow-hidden transition duration-400 ease-in-out hover:scale-110"
            src={imgSource}
            width={400}
            height={300}
            
            alt=""
          />
        </div>
        <div class="p-6">
          <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            {text}
          </h5>
        </div>
      </a>
    </div>
  );
}

export default function FirstPost() {
  return (
    <>
    <Head>
        <title>Projects & Work</title>
    </Head>
    
    <main className={styles.main2}>
      
      <div className="flex flex-col">
        <h1 className="text-4xl  mb-12 text-center"> Projects & Work </h1>
        <div className="flex justify-center space-x-8 m-20">
          <div class="w-1/4 h-1/4">
            <TabPanel
              imgSource=".././work_icons_res/msr.jpg"
              text="Work at Microsoft Research India"
              url = "./project_folder/iirs_project"
            />
          </div>
          <div class="w-1/4">
            <TabPanel
              imgSource=".././work_icons_res/iisc.jpg"
              text="Work at Video Analytics Lab, IISC"
              url = "./project_folder/iisc_project"
            />
          </div>
          <div class="w-1/4">
            <TabPanel
              imgSource=".././work_icons_res/iirs.jpg"
              text="Work at IIRS &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;"
              url = "./project_folder/iirs_project"
            />
          </div>
          <div class="w-1/4">
            <TabPanel
              imgSource=".././work_icons_res/f_edit_2.png"
              text="Work at BITS Pilani &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;"
              url = "./project_folder/bits_project"
            />
          </div>
        </div>
      </div>
    </main>
    </>
  );
}
