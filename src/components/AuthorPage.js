import React from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';

class AuthorPage extends React.Component {

    state = {
        author: null
    }

    componentDidMount() {
        axios.get('/author/' + this.props.name)
        .then(res => {
            this.setState({author: res.data})
        })
    }

    render(){
        if (!this.state.author) {
            return null;
        }

        let tabsList = this.state.author.songs.map(song => {
            let chordsList = song.chords.map(chord => {
                return(
                    <span className="border-r border-gray-200 last:border-0 px-2">
                        {chord.symbol}
                    </span>
                )
            })
            return(
                <tr className="border-b border-gray-200">
                    <td> 
                        <Link to={"/song/" + song.id}>{song.title}</Link>
                    </td>
                    <td><Link to={"/author/" + song.author.name}>{song.author.name}</Link></td>
                    <td className="text-left">{chordsList}</td>
                </tr>
            )
        })
        return(
            <div>
                <div className="text-4xl py-2 px-4">{this.state.author.name}</div>
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
            </div>
        )
    }
}

export default AuthorPage;