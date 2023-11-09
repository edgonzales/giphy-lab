// import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import GiphyShow from './components/GiphyShow/GiphyShow'
import SearchBar from './components/SearchBar/SearchBar'

function App() {
  // const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('USE EFFECT IS RUNNING!')


  })

  return (
    <>
      <SearchBar />
      <GiphyShow />
    </>
  )
}

export default App