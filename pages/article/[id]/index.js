// import { server } from "../../../config";
import Link from "next/link";
import Meta from "../../../components/Meta";

const article = ({ article }) => {
  return (
    <>
      <Meta title={article.title} description={article.description} />
      <h1 style={{ paddingLeft: "5rem", paddingRight: "5rem" }}>
        {article.title}
      </h1>
      <p style={{ paddingLeft: "5rem", paddingRight: "5rem" }}>
        {article.body}
      </p>
      <br />
      <Link href="/">
        <a style={{ color: "#ff6a67" }}>Go Back</a>
      </Link>
    </>
  );
};

// CREATED API

// export const getStaticProps = async (context) => {
//   const res = await fetch(`${server}/api/articles/${context.params.id}`);

//   const article = await res.json();

//   return {
//     props: {
//       article,
//     },
//   };
// };

// export const getStaticPaths = async () => {
//   const res = await fetch(`${server}/api/articles/`);

//   const articles = await res.json();

//   const ids = articles.map((article) => article.id);
//   const paths = ids.map((id) => ({ params: { id: id.toString() } }));

//   return {
//     paths,
//     fallback: false,
//   };
// };

// export default article;

// JSONPLACEHOLDER API

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );

  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);

  const articles = await res.json();

  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

export default article;

// // import { useRouter } from "next/router";
// import Link from "next/link";

// const article = ({ article }) => {
//   // const router = useRouter();
//   // const { id } = router.query;

//   // return <div>This is an article {id}</div>;

//   return (
//     <>
//       <h1>{article.title}</h1>
//       <p>{article.body}</p>
//       <br />
//       <Link href="/">Go Back</Link>
//     </>
//   );
// };

// export const getServerSideProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );

//   const article = await res.json();

//   return {
//     props: {
//       article,
//     },
//   };
// };

// export default article;
