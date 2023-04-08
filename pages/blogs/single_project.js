import styles from '@/styles/Home.module.css'
import Header from './comp1.js'
export default function FirstPost() {
    return(
    <main className={styles.main2}>
      <div className='flex flex-col'>
      <div className='basis-1/12'>
     <h1 className='text-5xl font-bold font-mono text-center'> Projects </h1>
     <div>
        <Header src="../git_icon.png" alt="git icon" desc="This is desc"/>
     </div>
     <div>
        <Header src="../git_icon.png" alt="git icon" desc="This is desc"/>
     </div>
     <div>
        <Header src="../git_icon.png" alt="git icon" desc="This is desc"/>
     </div>
     </div>
     </div>
    </main>
        
    )
  }