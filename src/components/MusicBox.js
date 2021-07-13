
function MusicBox(props) {
    return (
        <div className="shadow-lg p-2 rounded-md font-bold bg-white m-4 text-2xl">{props.title} - {props.artist}</div>
    )
}

export default MusicBox;