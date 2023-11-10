export default function GiphyShow({giphy}){
    console.log(giphy);
    const url = giphy.images?.downsized?.url;
    
    return(
        <>
        <img src={url} alt="Initial Gif"/>
        </>
    )
}