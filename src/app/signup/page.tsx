import { FormEvent } from 'react'


'use client'


export default function Signup() {
    // const router = useNavigation()

    async function handleSubmit(event: any) {
        event.preventDefault()

        const formData = new FormData(event.cuurentTarget)

        const username = formData.get('username')
        const password = formData.get('password')


        const response = await fetch('http://localhost:3000/api/auth/singup',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
           username: username,
                
                password: password
            }),
        })
console.log(response)
        if (response.ok) {
            console.log(response.status)
            console.log(response.statusText)
            console.log(response.headers)
            console.log(response.url)
            console.log(response.ok)
        }
        else {
            alert(response.statusText)
        }
    }

    return (
        <form className='bg-gray-500 text-white' onSubmit = {handleSubmit}>
            
            <label>Username here</label>
            <input type="text" name="username" />
           
            <label>Password</label>
            <input type="password" name="password" />
            <input type="submit" value="Submit" />
        </form>
    )
}