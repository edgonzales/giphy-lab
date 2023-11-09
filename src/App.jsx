// import { useState } from 'react'
import './App.css'
import GiphyShow from './components/GiphShow/GiphShow'
import SearchBar from './components/SearchBar/SearchBar'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <SearchBar />
      <GiphyShow />
     
    </>
  )
}

export default App