import FavouriteButton from "./FavouriteButton";
import reactStringReplace from "react-string-replace";
import ChordCircle from "./ChordCircle";

function Song({song, chordsImg}){
    let chords = song.chords.map(chord => {
        return(
            <li><img src={"/img/" + chordsImg[chord]} className="h-36 mr-10" /></li>
        )
    })
    return(
        <div>
            <div className="relative">
                <h2 className="text-6xl font-bold mt-12">{song.title}</h2>
                <h3 className="text-xl">By {song.artist}</h3>
                <div className="absolute top-0 right-0">
                    <FavouriteButton />
                </div>
                
            </div>
            <div className="flex mt-20">
                <div>
                    <div className="text-4xl text-left">Chords</div>
                    <ul className="flex"> 
                        {chords}
                    </ul>
                </div>
                <div className="text-4xl text-left ml-10">
                    Strumming
                    <img src="/img/strumming.svg" className="h-36" />
                </div>
            </div>
            <div className="whitespace-pre-line text-left text-xl mt-8 leading-14">
                {reactStringReplace(song.text, /({..?})/g, (match) =>{
                    return (
                        <span className="relative">
                            <ChordCircle chord={match} />
                        </span>
                    )
                } )}
            </div>
        </div>
    )
}

export default Song;