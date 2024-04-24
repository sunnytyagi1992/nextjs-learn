"use client"

import { usePathname } from "next/navigation"
import { AddTodo } from "./Components/shared/AddTodo"
import Link from "next/link";


const Home = () => {
  
  const pathname = usePathname();
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
<>
<nav>
    <ul>
      <li>
      <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">Home </Link>
      </li>
      <li>
        <Link className={`link ${pathname === '/about' ? 'active' : ''}`} href="/about">About</Link>
      </li>
    </ul>
  </nav>    <div className="bg-green-300 w-screen py-20 flex justify-center flex-col items-center">
        <span className="text-3xl font-extrabold uppercase">To-Do-App</span>
        <h1 className="text-3xl font-extrabold uppercase mb-5">Next.js 14.1
        <span className="text-orange-700 ml-2">Sever Actions</span>
        </h1>

        <div className="bg-red-300 text-black flex justify-center flex-col items-center s-[100px]"><AddTodo /></div>
    </div>
</>
  )
}
export default Home