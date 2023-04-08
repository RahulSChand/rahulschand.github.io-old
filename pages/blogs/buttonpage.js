import styles from '@/styles/Home.module.css'
import Header from './comp1.js'




export default function FirstPost() {
    return(
    <main className={styles.main2}>
      <div className='flex flex-row flex-wrap  space-x-8 place-content-center'>
      <button 
    type="button"
    class="inline-block p-4 rounded bg-gray-100  hover:text-gray-600 hover:bg-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-300">
    Button 1
  </button>
  <button 
    type="button"
    class="inline-block p-4 rounded bg-gray-100 hover:text-gray-600 hover:bg-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-300">
    Button 2
  </button>
  <button 
    type="button"
    class="inline-block p-4 rounded bg-gray-100 hover:text-gray-600 hover:bg-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-300">
    Button 3
  </button>
     </div>
    </main>
        
    )
  }