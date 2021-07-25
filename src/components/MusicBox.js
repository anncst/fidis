
function MusicBox(props) {
    return (
        <div className="shadow-lg p-2 rounded-md font-bold bg-white m-4 text-2xl">
            <a href={"/song/" + props.id}>
                {props.title} - {props.artist}
            </a>
        </div>
    )
}

export default MusicBox;