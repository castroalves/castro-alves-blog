import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const name = "Cadu de Castro Alves";
export const siteTitle = "Cadu de Castro Alves";

export default function Layout({ children, home }) {
  return (
    <div className="flex flex-col px-4">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/images/favicon-transparent.png" />
        <meta
          name="description"
          content="PHP, JavaScript, and Web Development"
        />
        <meta
          property="og:image"
          content="https://og-image.now.sh/**castroalves.dev**.png?theme=dark&amp;md=1&amp;fontSize=150px&amp;images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-white-logo.svg&images=https%3A%2F%2Fcastroalves.dev%2Fimages%2Ffavicon.png"
        />
        <meta name="og:title" content={siteTitle} />
        <meta
          name="og:description"
          content="PHP, JavaScript, and Web Development"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className="flex flex-col p-8 justify-center">
        {home ? (
          <div className="text-center">
            <Image
              src="/images/profile.jpg"
              className="rounded-full"
              alt={name}
              width={200}
              height={200}
            />
            <h1 className="text-2xl font-bold py-4">{name}</h1>
          </div>
        ) : (
          <div className="flex flex-col text-center">
            <Link href="/">
              <a>
                <Image
                  src="/images/profile.jpg"
                  className="w-40 rounded-full mx-auto"
                  alt={name}
                  width={200}
                  height={200}
                />
              </a>
            </Link>
            <h2 className="text-2xl font-bold py-4">
              <Link href="/">
                <a className="text-gray-900">{name}</a>
              </Link>
            </h2>
          </div>
        )}
        <div className="social-links flex">
          <ul className="w-1/2 mx-auto flex justify-center font-semibold">
            <li>
              <a
                href="https://github.com/castroalves"
                className="bg-gray-900 py-2 px-4 text-white rounded mr-2"
                target="_blank"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/castroalves"
                className="bg-blue-400 py-2 px-4 text-white rounded mr-2"
                target="_blank"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://dev.to/castroalves"
                className="bg-gray-600 py-2 px-4 text-white rounded"
                target="_blank"
              >
                DEV
              </a>
            </li>
          </ul>
        </div>
      </header>
      <main className="sm:w-1/2 sm:mx-auto text-xl text-gray-900 leading-loose">
        <div className="main-content">{children}</div>
        {!home && (
          <div className="text-left py-6">
            <Link href="/">
              <a className="bg-yellow-400 hover:bg-opacity-80 text-black font-semibold display-block py-2 px-4 rounded">
                ← Back to home
              </a>
            </Link>
          </div>
        )}
      </main>
      <footer className="py-6 text-center font-semibold text-gray-700">
        &copy; {new Date().getFullYear()} Cadu de Castro Alves
      </footer>
    </div>
  );
}
