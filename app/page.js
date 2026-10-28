import Image from "next/image";
import localFont from "next/font/local"; //for apply font style
import Link from "next/link";

const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "800",
});

export default function Home() {
  return (
    <main className="bg-purple-200">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className=" flex flex-col gap-4 items-center justify-center">

          {/* for apply font style */}
          <p className={`text-2xl font-bold ${poppins.className}`}>
            The best URL shortener in the Market
          </p>
          <p className="px-24 text-center">
            We are the most strightforward URL in the world. Most of the url shorteners will track you to give your details for login. We understand your need and hence we have created this URL shortener
          </p>
          <div className=' flex gap-3 justify-start'>
            <Link href="/shorten"><button className='bg-purple-500 shadow-lg p-2 py-1 font-bold rounded-lg text-white'>Try Now</button></Link>
            <Link href="/github"><button className='bg-purple-500 shadow-lg p-2 py-1 font-bold rounded-lg text-white'>Github</button></Link>
          </div>
        </div>

        <div className=" flex justify-start relative">
          <Image className="mix-blend-darken" alt="an Image of a vector" src={"/vector.jpg"} fill={true} ></Image>

        </div>
      </section>
    </main>
  );
}
