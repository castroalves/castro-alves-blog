import Head from "next/head";
import Link from "next/link";

const name = "Cadu de Castro Alves";
export const siteTitle = "Backend Developer @ nextbike";

export default function Layout({ children, home }) {
  return (
    <div className="flex flex-col px-4">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className="flex flex-col p-8 justify-center">
        {home ? (
          <div className="flex flex-col text-center">
            <img
              src="/images/profile.jpg"
              className="w-60 rounded-full mx-auto"
              alt={name}
            />
            <h1 className="text-2xl font-bold py-4">{name}</h1>
          </div>
        ) : (
          <div className="flex flex-col text-center">
            <Link href="/">
              <a>
                <img
                  src="/images/profile.jpg"
                  className="w-40 rounded-full mx-auto"
                  alt={name}
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
