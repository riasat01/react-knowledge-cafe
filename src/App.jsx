import './App.css'
import Blogs from './components/blogs/Blogs'
import Bookmarks from './components/bookmarks/Bookmarks'
import Header from './components/header/header'

function App() {
  return (
    <>
      <Header></Header>
      <main className='flex mx-4'>
        <section className='md: w-2/3'>
          <Blogs></Blogs>
        </section>
        <section className='md: w-1/3'>
          <Bookmarks></Bookmarks>
        </section>
      </main>
    </>
  )
}

export default App
