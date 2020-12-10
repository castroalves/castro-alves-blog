import Link from "next/link";
import Image from "next/image";

export default function Posts({ posts }) {
  const flags = {
    pt: "/images/pt.svg",
    en: "/images/en.svg",
  };

  return (
    <section className="mb-6 sm:text-small">
      <h2 className="text-4xl font-bold mb-4">Latest Articles</h2>
      <div>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link href={`/posts/${post.id}`}>
                <a className="text-blue-500 hover:underline">
                  <Image
                    src={flags[post.language]}
                    alt={post.title}
                    width={18}
                    height={18}
                  />
                  <span className="ml-2">{post.title}</span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
