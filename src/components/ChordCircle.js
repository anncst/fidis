
function ChordCircle({chord}){

    chord = chord.replace(/{|}/g, "");
    return(
        <span className="shadow-lg text-white text-xl font-bold rounded-full h-8 w-8 bg-secondary flex items-center justify-center absolute left-0 -top-8">{chord}</span>
    )
}

export default ChordCircle;