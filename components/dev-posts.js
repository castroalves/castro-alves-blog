import Link from "next/link";

export default function DevPosts({ posts }) {
  const flags = {
    pt: "/images/pt.svg",
    en: "/images/en.svg",
  };

  return (
    <section className="mb-6">
      <h2 className="text-4xl font-bold my-4">DEV Posts</h2>
      <ul>
        {posts.map(({ id, url, title }) => (
          <li key={id}>
            <Link href={url}>
              <a
                target="_blank"
                title={title}
                className="text-blue-500 hover:underline"
              >
                {title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
