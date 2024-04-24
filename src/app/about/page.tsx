'use client'


import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
 
function Profile() {
  const pathname = usePathname()
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)
 
  useEffect(() => {
    fetch('https://dummyjson.com/user')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })

      
  }, [])

  console.log(data)
 
  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>
 
  return (<>
    <nav>
    <ul>
      <li>
      <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">Home </Link>
      </li>
      <li>
        <Link className={`link ${pathname === '/about' ? 'active' : ''}`} href="/about">About</Link>
      </li>
    </ul>
  </nav>
    <div>
        <h1>hello</h1>
     
    </div>

    </>
  )
}

export default Profile