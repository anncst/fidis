function Search(){
    return(
        <div className="ml-auto flex">
            <input placeholder="Search" className="border text-3xl rounded-l-xl px-2 border-gray-300" />
            <button className="bg-primary text-3xl rounded-r-xl px-3 border border-l-0 border-gray-300 text-white">
                <img src="/img/search.svg" className="w-5 text-white"/>
            </button>
        </div>
    )
}

export default Search;