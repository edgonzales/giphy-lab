export default function GiphyShow({giphy}){
    console.log(giphy);
    const url = giphy.images?.downsized?.url;
    
    return(
        <>
        <h1>This is the giphy show!</h1>
        <img src={url} alt="Initial Gif"/>
        </>
    )
}