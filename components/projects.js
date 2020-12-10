import Link from "next/link";

export default function Projects() {
  const links = [
    {
      id: 1,
      title: "WP Link Bio - WordPress Plugin",
      link: "https://wordpress.org/plugins/wp-link-bio/",
    },
    {
      id: 2,
      title: "Anchor Links - Chrome Extension",
      link:
        "https://chrome.google.com/webstore/detail/anchor-links/bfkhlokhnbbgioljjghkekhpkpkdfmem",
    },
  ];

  return (
    <section className="mb-6">
      <h2 className="text-4xl font-bold mb-4">Projects</h2>
      <div className="">
        <ul className="">
          {links.map(({ id, title, link }) => (
            <li key={id}>
              <Link href={link}>
                <a className="text-blue-500 hover:underline" target="_blank">
                  {title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
