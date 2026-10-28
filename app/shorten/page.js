"use client"
import Link from 'next/link'
import React, { useState } from 'react'


const Shorten = () => {
  const [url, seturl] = useState("")
  const [shorturl, setshorturl] = useState("")
  const [generated, setgenerated] = useState("")

  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "url": url, //change here from copy paste code from postman , for reffer see 42.00 in video 136
      "shorturl": shorturl //change here from copy paste code from postman, for reffer see 42.00 in video 136
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("/api/generate", requestOptions) //change here from copy paste code from postman, for reffer see 42.00, 43.00, 43.45, 44.11 in video 136

      .then((response) => response.json()) 
      .then((result) => {
        setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
        seturl("")
        setshorturl("")
        console.log(result)
        alert(result.message)
      })
      .catch((error) => console.error(error));
  }

  return (
    <div className=' w-full max-w-lg mx-auto  bg-purple-200 my-8 p-4 rounded-lg flex flex-col gap-4'>
      <h1 className='font-bold text-xl'>Generate your short URLs</h1>
      <div className='flex flex-col gap-2'>
        <input type="text"
          value={url}
          className="py-2 px-4  focus:outline-purple-600 rounded-md bg-white"
          placeholder='Enter your URL'
          onChange={e => { seturl(e.target.value) }} />

        <input type="text"
          value={shorturl}
          className='py-2 px-4  focus:outline-purple-600 rounded-md bg-white'
          placeholder='Enter your preferred short URL text'
          onChange={e => { setshorturl(e.target.value) }} />
        <button onClick={generate} disabled={url.length <=3 || shorturl.length <=3} className='text-white my-3 py-1.5 bg-purple-500 shadow-lg p-2 font-bold rounded-lg disabled:bg-purple-400' >Generate</button>
      </div>

      {generated && <> <span className='font-bold text-lg'>Your link</span><code><Link target='_blank' href={generated}>{generated}</Link>
      </code></>}

    </div>
  )
}

export default Shorten
