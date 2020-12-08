import Head from "next/head";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import Layout from "../../components/layout";
import { getAllPostsIds, getPostData } from "../../lib/posts";
import moment from "moment";

const CodeBlock = ({ language, value }) => {
  return (
    <SyntaxHighlighter showLineNumbers={true} language={language}>
      {value}
    </SyntaxHighlighter>
  );
};

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  delete postData.orig;
  return {
    props: postData,
  };
}

export async function getStaticPaths() {
  const paths = getAllPostsIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ content, data }) {
  const { title, date } = data;
  const publishedOn = moment(date).format("MM/DD/YYYY");

  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <h2 className="text-4xl font-bold mb-6">{title}</h2>
      <p className="font-semibold mb-2">{publishedOn}</p>
      <ReactMarkdown
        escapeHtml={true}
        source={content}
        renderers={{ code: CodeBlock }}
      />
    </Layout>
  );
}
