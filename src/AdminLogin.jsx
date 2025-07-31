import React, { useState } from 'react'
import Image3 from './assets/Image3.jpg'

export default function AdminLogin({ onLogin }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onLogin(username, password)
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-[10px]">
      <div className='grid grid-cols-1 xs:w-full sm:grid-cols-2 md:h-[600px] md:w-[700px] '>
        <div className='hidden sm:flex items-center justify-center  bg-cover bg-center rounded-tl rounded-bl' style={{ backgroundImage: `url(${Image3})` }}>
          <p className='text-white font-black text-[50px]'>GrandView</p>
        </div>
    <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center bg-white h-[450px] p-6 rounded-tr rounded-br shadow-md space-y-4 md:h-full"
      >
        <h2 className="text-xl font-semibold">Admin Login</h2>
        <input
          type="text"
          placeholder="Username"
          className="border-b-2 rounded border-gray-400 p-2 w-full"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border-b-2 rounded border-gray-400 p-2 w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="bg-black text-white px-4 py-2 rounded w-full">
          Login
        </button>
      </form>

      </div>
      
    </div>
  )
}
