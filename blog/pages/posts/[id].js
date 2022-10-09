import Layout from "../../components/Layout";
import { getAllPostIds } from "../../lib/post";

export async function getStaticPaths() {
    const paths = getAllPostIds();

    return {
        paths,
        fallback: false,
    }
}

export function getStaticProps({params}) {
    
}

export default function Post() {
    return (
        <Layout>動的ルーティグ設定</Layout>
    );
}