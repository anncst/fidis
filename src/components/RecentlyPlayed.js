import MusicBox from './MusicBox';

function RecentlyPlayed ({list}){
    
    let musicBoxes = list.map(song => {
        return(
            <MusicBox title = {song.title} artist = {song.artist}/>
        )
    });
    return(
        <div>
            <h2 className="text-2xl">Recently played:</h2>
            {musicBoxes}
        </div>
    )
}

export default RecentlyPlayed