function InputLabel({id,text}){
    return(
        <div className="text-xl flex flex-col items-start">
            <label htmlFor={id} className="my-2 ">{text}</label>
            <input className="border border-gray-300 rounded-lg px-10 py-1" id={id} />
         </div>
    )
}

export default InputLabel;