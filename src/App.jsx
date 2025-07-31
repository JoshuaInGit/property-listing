import React, { useState } from 'react';
import Listing from './Listing';
import AdminLogin from './AdminLogin';
import EditForm from './EditForm';
import LandingPage from './LandingPage';

export default function App() {
  const [isAdmin, setIsAdmin] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const [showEdit, setShowEdit] = useState(false)
  const [posts, setPosts] = useState([])

  const handleLogin = (username, password) => {
    if (username === '1' && password === '1') {
      setIsAdmin(true)
      setShowLogin(false)
    } else {
      alert('Invalid credentials')
    }
  }

  return (
    <>
    {showLogin ? (
        <AdminLogin onLogin={handleLogin} />
      ) : showEdit ? (
        <EditForm
          setShowEdit={setShowEdit}
          setPosts={setPosts}
          posts={posts}
        />
      ):(
        <>
          <LandingPage
    isAdmin={isAdmin}
          setShowLogin={setShowLogin}
          setShowEdit={setShowEdit}
    />
        <Listing
          posts={posts}
        />
        </>
      )}
    
    </>
  )
}