import Head from 'next/head'
import { getSortedPostsData } from '../../../../lib/posts'

import styles from "@/styles/Home.module.css";

export default function Home({ allPostsData }) {
  return (
    <main className={styles.main2}>
    <div>
      <div className='mb-12'>
        <p className='text-4xl font-mono'>List of my Blogs & Tutorials</p>
        </div>
        <ol>
          {allPostsData.map(({ id, date, title }) => (
            <li className="pb-2" key={id}>
            <a className="underline text-lg transition duration-300 ease-in-out hover:font-bold" 
            href={`/blogs/pages/posts/${id}`}>&gt;{' '}{title}</a> 
          </li>
          ))}
        </ol>
        </div>
      </main>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
