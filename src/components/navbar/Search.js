import React from 'react';
import {Link} from 'react-router-dom';

class Search extends React.Component{
    state = {
        search: ""
    }

    render() {

        const handleChange = (e) => {
            this.setState({search: e.target.value})
        }

        return(
            <div className="ml-auto flex">
                <input placeholder="Search" className="border text-3xl rounded-l-xl px-2 border-gray-300" onChange={(e) => handleChange(e)}/>
                <Link to={"/search?q=" + this.state.search} className="bg-primary text-3xl rounded-r-xl px-3 border border-l-0 border-gray-300 text-white flex">
                    <img src="/img/search.svg" className="w-5 text-white self-center"/>
                </Link>
            </div>
        )
    }
    
}

export default Search;