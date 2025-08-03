import React, { useState,useRef } from 'react';
import Listing from './Listing';
import AdminLogin from './AdminLogin';
import EditForm from './EditForm';
import LandingPage from './LandingPage';
import About from './About';
import Contact from './Contacts';

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

  const homeRef = useRef(null);
  const propertyRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

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
        <div>
          <LandingPage  scrollToproperty={() => scrollTo(propertyRef)} scrollToabout={() => scrollTo(aboutRef)} scrollTocontact={() => scrollTo(contactRef)}
    isAdmin={isAdmin}
          setShowLogin={setShowLogin}
          setShowEdit={setShowEdit}
    />
        </div>
          <div ref={propertyRef}>
            <Listing scrollTohome={() => scrollTo(homeRef)} scrollToabout={() => scrollTo(aboutRef)} scrollTocontact={() => scrollTo(contactRef)}
          posts={posts}
        />
          </div>
        <div ref={aboutRef}>
          <About scrollToproperty={() => scrollTo(propertyRef)} scrollTohome={() => scrollTo(homeRef)} scrollTocontact={() => scrollTo(contactRef)}/>
        </div>
        <div ref={contactRef}>
          <Contact scrollToproperty={() => scrollTo(propertyRef)} scrollToabout={() => scrollTo(aboutRef)} scrollTohome={() => scrollTo(homeRef)}/>
        </div>
        </>
      )}
    
    </>
  )
}