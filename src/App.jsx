// import { useState } from 'react'
import { useState, useEffect } from 'react'
import './App.css'
import GiphyShow from './components/GiphyShow/GiphyShow'
import SearchBar from './components/SearchBar/SearchBar'

function App() {
const [giphy, setGiphy] = useState({});
const [searchGiphy, setSearchGiphy] = useState("fly");

  useEffect(() => {
    console.log('USE EFFECT IS RUNNING!')
    const endpoint = `http://api.giphy.com/v1/gifs/search?q=${searchGiphy}n&api_key=ZeCa7IAoWGQSOizaBTCKGrhWJMWZVkxK&limit=1`;

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
  }, [searchGiphy]);

  return (
    <>
      <h1>Search for Giphys!</h1>
      <SearchBar setSearchGiphy={setSearchGiphy} />
      <GiphyShow giphy={giphy} />
    </>
  )
}

export default App