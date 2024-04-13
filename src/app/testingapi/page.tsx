"use client"
import { useState, useEffect } from 'react'


function TestingApi(){



    const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)
 
  useEffect(() => {
    fetch('http://localhost:3000/api/test')
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
     
    </div>
  )



}

export default TestingApi;