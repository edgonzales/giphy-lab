// import { useState } from 'react'
import { useState, useEffect } from 'react'
import './App.css'
import GiphyShow from './components/GiphyShow/GiphyShow'
import SearchBar from './components/SearchBar/SearchBar'

function App() {
const [giphy, setGiphy] = useState({});
// const [searchGiphy, setSearchGiphy] = 

  useEffect(() => {
    console.log('USE EFFECT IS RUNNING!')
    const endpoint = "http://api.giphy.com/v1/gifs/search?q=run&api_key=ZeCa7IAoWGQSOizaBTCKGrhWJMWZVkxK&limit=1";

    async function getGyphy() {
      try {
        const response = await fetch(endpoint);
        const body = await response.json(); 
        console.log(body);
        setGiphy(body.data[0]);
      } catch (err) {
        console.log(err);
      }
    }
    getGyphy();
  }, []);

  return (
    <>
      <SearchBar />
      <GiphyShow giphy={giphy} />
    </>
  )
}

export default App