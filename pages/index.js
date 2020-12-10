import React from "react";

import Head from "next/head";
import Link from "next/link";
import { ExternalLink } from "heroicons-react";

import Layout, { siteTitle } from "../components/layout";
import Posts from "../components/posts";
import Projects from "../components/projects";
import { getBlastPosts, getSortedPostsData } from "../lib/get-blog-posts";

export async function getStaticProps() {
  const allPostsData = await getBlastPosts();
  const blogPosts = getSortedPostsData();
  return {
    props: {
      allPostsData,
      blogPosts,
    },
  };
}

export default function Home({ allPostsData, blogPosts }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="mb-6">
        <p>Hello!</p>
        <p>
          I work as a PHP and NodeJS Developer at{" "}
          <a href="https://nextbike.net">Nextbike</a>. I write about PHP,
          JavaScript, and WordPress.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-4xl font-bold my-4">Blog Posts</h2>
        <ul>
          {allPostsData.map(({ id, date, link, title }) => (
            <li key={id}>
              <Link href={link}>
                <a
                  target="_blank"
                  className="text-blue-500 hover:underline flex flex-row items-center"
                >
                  {title.rendered} <ExternalLink size={24} className="ml-1" />
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <Posts posts={blogPosts} />
      <Projects />
    </Layout>
  );
}
