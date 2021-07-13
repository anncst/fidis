function InputLabel({id,text}){
    return(
        <div className="text-xl flex flex-col items-start">
            <label htmlFor={id} className="my-2">{text}</label>
            <input id={id} />
         </div>
    )
}

export default InputLabel;