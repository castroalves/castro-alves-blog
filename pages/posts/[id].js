import fs from "fs";
import path from "path";

import Head from "next/head";
import ReactMarkdown from "react-markdown";
import { PrismAsync as SyntaxHighlighter } from "react-syntax-highlighter";
import dracula from "react-syntax-highlighter/dist/cjs/styles/prism/dracula";
import moment from "moment";

import Layout from "../../components/layout";
import matter from "gray-matter";

const CodeBlock = ({ language, value }) => {
  return (
    <SyntaxHighlighter
      showLineNumbers={true}
      language={language}
      style={dracula}
    >
      {value}
    </SyntaxHighlighter>
  );
};

function Post({ content, data }) {
  const { title, date } = data;
  const publishedOn = moment(date).format("MM/DD/YYYY");

  return (
    <Layout>
      <Head>
        <title>{title} | Cadu de Castro Alves</title>
      </Head>
      <h2 className="text-5xl leading-tight font-bold mb-6">{title}</h2>
      <p className="font-semibold mb-2">{publishedOn}</p>
      <ReactMarkdown
        escapeHtml={false}
        source={content}
        renderers={{ code: CodeBlock }}
      />
    </Layout>
  );
}

export default Post;

export async function getStaticPaths() {
  const files = fs.readdirSync("posts", "utf-8");
  const paths = files.map((filename) => ({
    params: {
      id: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const markdownWithMetaData = fs
    .readFileSync(path.join("posts", `${id}.md`), {
      encoding: "utf-8",
    })
    .toString();

  const parsedMarkdown = matter(markdownWithMetaData);

  return {
    props: {
      content: parsedMarkdown.content,
      data: parsedMarkdown.data,
    },
  };
}
