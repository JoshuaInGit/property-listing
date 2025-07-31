import React, { useState, useRef } from 'react'
import Image2 from './assets/Image2.jpg'

export default function EditForm({ setShowEdit, setPosts, posts }) {
  const [tempPost, setTempPost] = useState({ name: '', rooms: '', Sqft: '', image: null, loc: '',park:'' })
  const fileInputRef = useRef(null);

  const handleAdd = () => {
    if (!tempPost.name || !tempPost.rooms || !tempPost.Sqft || !tempPost.loc || !tempPost.park ||!tempPost.image) {
      alert('Please fill all fields')
      return
    }
    setPosts([...posts, tempPost])
    setTempPost({ name: '', rooms: '', Sqft: '', image: null, loc:'', park:'' })
    if (fileInputRef.current) {
      fileInputRef.current.value = ''; // Step 2: clear file input manually
    }
  }

  const handlePost = () => {
    if (!tempPost.name || !tempPost.rooms || !tempPost.Sqft || !tempPost.loc || !tempPost.park) {
      alert('Please fill all fields')
      return
    }
    setPosts([...posts, tempPost])
    setTempPost({ name: '', rooms: '', Sqft: '', image: null, loc:'', park:'' })
    setShowEdit(false)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''; // Step 2: clear file input manually
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-center bg-cover p-4" style={{ backgroundImage: `url(${Image2})` }}>
      <div className="bg-white/10 backdrop-blur-sm  p-6 rounded shadow-md w-[400px] space-y-4">
        <h2 className="text-xl font-semibold">Add Property</h2>

        <label className='flex items-center justify-center bg-black h-[50px] text-white'>
          Choose Image
        <input
          type="file"
          accept="image/*"
           ref={fileInputRef}
          onChange={(e) => setTempPost({ ...tempPost, image: e.target.files[0] })}
          className='hidden'
        />
        </label>
       

        <input
          type="text"
          placeholder="House Name"
          className="border p-2 w-full"
          value={tempPost.name}
          onChange={(e) => setTempPost({ ...tempPost, name: e.target.value })}
        />

         <input
          type="number"
          placeholder="Parking Space"
          className="border p-2 w-full"
          value={tempPost.park}
          onChange={(e) => setTempPost({ ...tempPost, park: e.target.value })}
        />

        <input
          type="number"
          placeholder="Number of Rooms"
          className="border p-2 w-full"
          value={tempPost.rooms}
          onChange={(e) => setTempPost({ ...tempPost, rooms: e.target.value })}
        />

        <input
          type="text"
          placeholder="Location"
          className="border p-2 w-full"
          value={tempPost.loc}
          onChange={(e) => setTempPost({ ...tempPost,loc: e.target.value })}
        />

        <input
          type="number"
          placeholder="Sqft"
          className="border p-2 w-full"
          value={tempPost.Sqft}
          onChange={(e) => setTempPost({ ...tempPost, Sqft: e.target.value })}
        />

        <div className="flex gap-3 justify-between">
          <button
            onClick={handleAdd}
            className="bg-green-500 text-white px-4 py-2 rounded w-full"
          >
            Add
          </button>
          <button
            onClick={handlePost}
            className="bg-blue-500 text-white px-4 py-2 rounded w-full"
          >
            Post
          </button>
          <button
            onClick={() => setShowEdit(false)}
            className="bg-gray-500 text-white px-4 py-2 rounded w-full"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  )
}
