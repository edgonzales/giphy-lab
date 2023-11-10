import { useState } from "react"


export default function SearchBar({setSearchGiphy}) {
    
    const [searchTerm, setSearchTerm] = useState('');

    function handleChange(e) {
        setSearchTerm(e.target.value);
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        setSearchGiphy(searchTerm);
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" value={searchTerm} onChange={handleChange} placeholder="Search for gif" /> <br />
            <button type="Submit">Search</button>
        </form>
        
    )
}