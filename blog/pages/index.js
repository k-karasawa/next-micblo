import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link"
import Layout from '../components/Layout'
import utilStyle from "../styles/utils.module.css";
import {getPostsDate} from '../lib/post'


//SSGの場合
export async function getStaticProps() {
  const allPostsData = getPostsDate(); 
  console.log(allPostsData);

  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData}) {
  return (
    <Layout>
      <section className={utilStyle.headingMd}>
        <p>
          私はフルスタックエンジニアです/好きな言語はrubyです
        </p>
      </section>

      <section className={ `${utilStyle.headingMd} ${utilStyle.padding1px}`}>
        <h2>🗒エンジニアのブログ</h2>
        <div className={styles.grid}>
          {allPostsData.map(({id, title, date, thumbnail}) => (
            <article key={id}>
              <Link href={`/posts/${id}`}>
                <img src={`${thumbnail}`} className={styles.thumbnailImage} />
              </Link>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyle.lightText}>{date}</small>
            </article>
          ))}
        </div>
      </section>
    </Layout>
)}
