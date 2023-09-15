import { useEffect, useState } from 'react'
import './App.css'
import Blogs from './components/blogs/Blogs'
import Bookmarks from './components/bookmarks/Bookmarks'
import Header from './components/header/header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const handleBookmark = bookmark => {
      const newBookmark = [...bookmarks, bookmark]
      setBookmarks(newBookmark);
      console("here")
  }
  
  return (
    <>
      <Header></Header>
      <main className='flex mx-4'>
        <section className='md: w-2/3'>
          <Blogs handleBookmark={handleBookmark}></Blogs>
        </section>
        <section className='md: w-1/3'>
          <Bookmarks bookmarks={bookmarks}></Bookmarks>
        </section>
      </main>
    </>
  )
}

export default App
