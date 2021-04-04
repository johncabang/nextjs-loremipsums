import { server } from "../config";
// import Head from "next/head";
import ArticleList from "../components/ArticleList";

export default function Home({ articles }) {
  // console.log(articles);
  return (
    <div>
      {/* <Head>
        <title>List of Lorem Ipsums</title>
        <meta name="keywords" content="lorem ipsum" />
      </Head> */}
      <ArticleList articles={articles} />
    </div>
  );
}

export const getStaticProps = async () => {
  // Will receive an error "TypeError: Only absolute URLs are supported"
  // Should be: const res = await fetch(`http://localhost:3000/api/articles`);

  const res = await fetch(`${server}/api/articles`);

  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};

// export const getStaticProps = async () => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts?_limit=5`
//   );
//   const articles = await res.json();

//   return {
//     props: {
//       articles,
//     },
//   };
// };
