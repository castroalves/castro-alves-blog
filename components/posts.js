import Link from "next/link";

export default function Posts({ posts }) {
  return (
    <section className="mb-6">
      <h2 className="text-4xl font-bold mb-4">Latest Articles</h2>
      <div>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link href={`/posts/${post.id}`}>
                <a className="text-blue-500 hover:underline">{post.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
