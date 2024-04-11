'use client'


import { useState, useEffect } from 'react'
 
function Profile() {
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
 
  return (
    <div>
        <h1>hello</h1>
      <h1 className='text-white text-3xl'>{map(data.users.name)}</h1>
      <p>{data.users.password}</p>
    </div>
  )
}

export default Profile