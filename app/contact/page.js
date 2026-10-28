
import Link from "next/link";

export default function Contact() {
  return (
    <main className="flex-1 bg-purple-100 px-6 py-6">
      <section className="mx-auto max-w-2xl rounded-2xl bg-purple-200 p-8 text-center shadow-sm md:p-12 md:py-6">
        <p className="contact-text mb-3 font-bold uppercase tracking-widest text-purple-700">
          Get in Touch
        </p>

        <h1 className="mb-4 text-xl font-bold md:text-3xl">
          Contact Us
        </h1>

        <p className="mb-8 leading-7 text-gray-700">
          Have a question, suggestion, or feedback about BitLinks?
          Feel free to contact me. I'd be happy to hear from you!
        </p>

        <div className="rounded-xl bg-white p-6">
          <h2 className="mb-2 text-xl font-bold text-purple-700">
            Email
          </h2>

          <a
            href="mailto:jadhavsankul448@gmail.com"
            className="break-all text-gray-700 underline decoration-purple-500 underline-offset-4 hover:text-purple-700"
          >
            jadhavsankul448@gmail.com
          </a>

          <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="mailto:jadhavsankul448@gmail.com?subject=BitLinks%20Enquiry"
              className="rounded-lg bg-purple-600 px-6 py-3 font-bold text-white shadow-lg transition hover:bg-purple-700"
            >
              Email Me
            </a>

            <a
              href="https://github.com/sankul-jadhav"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-purple-500 px-6 py-3 font-bold text-white shadow-lg transition hover:bg-purple-700"
            >
              Visit GitHub
            </a>
          </div>
        </div>

        <Link
          href="/"
          className="mt-8 inline-block font-semibold text-purple-700 hover:underline"
        >
          ← Back to Home
        </Link>
      </section>
    </main>
  );
}
