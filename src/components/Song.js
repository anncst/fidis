import FavouriteButton from "./FavouriteButton";
import reactStringReplace from "react-string-replace";
import ChordCircle from "./ChordCircle";
import React from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';

class Song extends React.Component{
    state = {
        song:null,
    }

    componentDidMount(){
        axios.get('/song/' + this.props.id)
        .then(res =>{
            this.setState({song:res.data});
        })
    }

    render(){
        if(!this.state.song) return null;

        let chords = this.state.song.chords.map(chord => {
            return(
                <li><img src={"/img/" + chord.img} className="h-36 mr-10" /></li>
            )
        })
        return(
            <div>
                <div className="relative">
                    <h2 className="text-6xl font-bold mt-12">{this.state.song.title}</h2>
                    <Link to={"/author/" + this.state.song.author.name} className="text-xl">By {this.state.song.author.name}</Link>
                    <h3 className="text-xl">Added by </h3>
                    <div className="absolute top-0 right-0">
                        <FavouriteButton liked = {this.state.song.liked} songId = {this.props.id}/>
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
                    {reactStringReplace(this.state.song.text, /({..?})/g, (match) =>{
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
    
}

export default Song;