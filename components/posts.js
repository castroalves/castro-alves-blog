import Link from "next/link";

import utilStyles from "../styles/utils.module.css";

export default function Posts() {
  const posts = [
    {
      id: 1,
      title: "SSG SSR",
      url: "/posts/ssg-ssr",
    },
    {
      id: 2,
      title: "Pre-rendering",
      url: "/posts/pre-rendering",
    },
    {
      id: 3,
      title: "Usando datas no Postman",
      url: "/posts/usando-datas-no-postman",
    },
    {
      id: 4,
      title: "How to check WordPress user role in an Angular",
      url: "/posts/wordpress-user-role-angular",
    },
  ];

  return (
    <section className="mb-6">
      <h2 className="text-4xl font-bold mb-4">Latest Articles</h2>
      <div>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link href={post.url}>
                <a className="text-blue-500 hover:underline">{post.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}