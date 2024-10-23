
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'

import { useState } from 'react'
function App() {
  const [bookmark, setBookmark] = useState([])
  const [reading, setReading] = useState(0)
  const handleBookmark = blogs => {
    const newBookmark = [...bookmark, blogs]
    setBookmark(newBookmark)
  }
  const handleRead = (id,time)=> {
    setReading(reading + time)
    // remove read item
    const remainingRead=bookmark.filter(bookmark=>bookmark.id !==id)
    setBookmark(remainingRead)
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-[1280px] mx-auto'>
        <Blogs
          handleBookmark={handleBookmark}
          handleRead={handleRead}
        ></Blogs>
        <Bookmarks bookmark={bookmark} reading={reading}></Bookmarks>

      </div>
    </>
  )
}

export default App
