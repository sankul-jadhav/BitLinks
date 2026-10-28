
import Link from "next/link";

export default function About() {
  return (
    <main className="flex-1 bg-purple-100 px-6 py-6">
      <section className="mx-auto max-w-4xl">
        <div className="rounded-2xl bg-purple-200 p-8 md:p-12 md:py-6">
          <p className="about-text mb-3 font-bold text-xl  tracking-widest text-purple-700">
            About BitLinks
          </p>

          <h1 className="mb-5 text-3xl font-extrabold md:text-4xl">
            Short links. Simple sharing.
          </h1>

          <p className="mb-8 text-lg leading-8 text-gray-700">
            BitLinks is a simple and easy URL shortener designed to turn long,
            complicated URLs into short, easy-to-share links. Our goal
            is to make sharing links straightforward and convenient.
          </p>

          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-xl bg-white p-5 shadow-sm">
              <h2 className="mb-2 text-lg font-bold text-purple-700">
                Easy to Use
              </h2>
              <p className="text-gray-600">
                Create a short link in just a few simple steps.
              </p>
            </div>

            <div className="rounded-xl bg-white p-5 shadow-sm">
              <h2 className="mb-2 text-lg font-bold text-purple-700">
                Custom Links
              </h2>
              <p className="text-gray-600">
                Choose your preferred short URL text when generating a link.
              </p>
            </div>

            <div className="rounded-xl bg-white p-5 shadow-sm">
              <h2 className="mb-2 text-lg font-bold text-purple-700">
                Simple Sharing
              </h2>
              <p className="text-gray-600">
                Share shorter links that are easier to remember and use.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/shorten"
              className="inline-block rounded-lg bg-purple-600 px-6 py-3 font-bold text-white shadow-lg transition hover:bg-purple-700"
            >
              Create Your Short URL
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
