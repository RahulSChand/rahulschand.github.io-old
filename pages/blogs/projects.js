import styles from '@/styles/Home.module.css'
import Header from './comp1.js'
import Image from 'next/image'



function ProjectPanel(props) {
   const { imgSource, text } = props;
 
   return (
     <div class="block rounded-lg bg-gray-100 shadow-lg dark:bg-neutral-700 hover:bg-gray-200">
        
       <a href="#!">
         <div class="flex flex-row">
         <div>
           <img
             class="rounded-t-lg"
             src={imgSource}
             width={200}
             height={300}
             alt=""
           />
         </div>
         <div class="p-6">
           <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
             {text}
           </h5>
         </div>
         </div>
       </a>
      
     </div>
   );
 }

export default function FirstPost() {
    return(
    <main className={styles.main2}>
      <div className='flex flex-col space-y-8'>
      <div>
     <h1 className='text-5xl font-bold font-mono text-center'> Projects </h1>
     </div>
     <div className='w-1/2 basis-1/3'>
     <ProjectPanel
              imgSource=".././work_icons_res/bits_2.jpg"
              text="Work at BITS Pilani &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;"
      />
     </div>
     <div className='w-1/2 basis-1/3'>
     <ProjectPanel
              imgSource=".././work_icons_res/bits_2.jpg"
              text="Work at BITS Pilani &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;"
      />
     </div>
     <div className='w-1/2 basis-1/3'>
        <ProjectPanel
              imgSource=".././work_icons_res/bits_2.jpg"
              text="Work at BITS Pilani &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;"
      />
     </div>
     </div>
     
    </main>
        
    )
  }