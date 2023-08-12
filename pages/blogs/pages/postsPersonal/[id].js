import { getAllPostIdsPersonal, getPostDataPersonal } from '../../../../lib/posts';
import styles from "@/styles/Home.module.css";
import Markdown from "react-markdown";
// @ts-expect-error https://github.com/react-syntax-highlighter/react-syntax-highlighter/issues/407
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
// @ts-expect-error https://github.com/react-syntax-highlighter/react-syntax-highlighter/issues/407
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";







  export async function getStaticPaths() {
    // Return a list of possible value for id
    const paths = getAllPostIdsPersonal();
    return {
        paths,
        fallback: false,
  };
  }

  export async function getStaticProps({ params }) {
    // Add the "await" keyword like this:
    const postData = await getPostDataPersonal(params.id);
  
    return {
      props: {
        postData,
      },
    };
  }

//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//         Prism.highlightAll();
//     }
// }, []);

  export default function Post({ postData }) {
    //console.log(postData.contentHtml)
    return (
      <main>
      <p className='font-mono text-xl pt-4 text-center font-bold'>
        {postData.title}
      </p>
      <p className='font-mono text-center text-s'>
        {postData.date}
      </p>
      <p className='font-mono text-center text-s'>
        {postData.name}
      </p>
      <p className='font-mono text-center text-sm'>------------</p>

      <div className={styles.markdown}>
      <Markdown
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");

          return match ? (
            <SyntaxHighlighter
              style={materialDark}
              PreTag="div"
              language='python'
              children={String(children).replace(/\n$/, "")}
              {...props}
            />
          ) : (
            <code className={className ? className : ""} {...props}>
              {children}
            </code>
          );
        }
      }}
    >
      {postData.contentHtml}
    </Markdown>
    </div>
    <div className={styles.main3}>
      {''}
    </div>
    </main>
    );
  }