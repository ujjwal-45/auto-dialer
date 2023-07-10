import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { Monoton, Revalia } from 'next/font/google';

const mono = Monoton({ weight: ['400'], subsets: ['latin'] });
const reva = Revalia({ weight: ['400'], subsets: ['latin'] });

const Navbar = () => {
  return (
    <header className="  bg-sky-50 z-0">
      <nav className="flex justify-between items-center w-full  text-black px-10 py-8 ">
        <div>
          <div className="flex items-center justify-between space-x-2">
            
            <Link href="/" className="flex space-x-2" >
              <Image src="/logo_2.png" alt="logo" width={50} height={40} ></Image>
              <h1 className={`${reva.className} font-extrabold text-4xl mt-2`}>
               DialSense
            </h1>
            </Link>
            
          </div>
        </div>
        <div className="flex items-center justify-between gap-10">
          <Link href="/services" className="hover:text-cyan-500">
            Services
          </Link>
          <Link href="/services" className="hover:text-cyan-500">
            About us
          </Link>
          <Link href="/services" className="hover:text-cyan-500">
            Pricing
          </Link>
          <Link href="/services" className="hover:text-cyan-500">
            Customers
          </Link>
          <Link href="/upload" className="hover:text-cyan-500 bg-zinc-900 px-5 py-2 rounded-full text-zinc-100">
            Upload
          </Link>
          <button className="bg-zinc-900 text-zinc-100 px-4 py-2 rounded-full  hover:text-cyan-600">
            <Link href="/sign-in" >
              Sign In
            </Link>
          </button>
          
        </div>
      </nav>
    </header>
  );
}

export default Navbar
