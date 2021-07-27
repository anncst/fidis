import React from 'react';
import axios from 'axios';
import {NavLink} from 'react-router-dom';

class MyTabs extends React.Component{

    state = {
        songs:[]
    }

    componentDidMount() {
        axios.get('/songs/favourite')
        .then(res => {
            this.setState({songs: res.data})
        })
    }

    render(){
        let tabsList = this.state.songs.map(song => {
            let chordsList = song.chords.map(chord => {
                return(
                    <span className="border-r border-gray-200 last:border-0 px-2">
                        {chord.symbol}
                    </span>
                )
            })
            return(
                <tr className="border-b border-gray-200">
                    <td><NavLink to={"/song/" + song.id}>{song.title}</NavLink></td>
                    <td><a href="#">{song.author}</a></td>
                    <td className="text-left">{chordsList}</td>
                </tr>
            )
        })
        return(
            <table className="bg-white w-3/4 mx-auto text-2xl">
                <thead>
                    <tr className="bg-primary text-white ">
                        <th>Title</th>
                        <th>Artist</th>
                        <th className="text-left px-2">Chords</th>
                    </tr>
                </thead>
                <tbody>
                    {tabsList}
                </tbody>
            </table>
        )
    }
}

export default MyTabs;