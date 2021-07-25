import React from 'react';
import MusicBox from './MusicBox';
import axios from 'axios';

class RecentlyPlayed extends React.Component{
    
    state = {
        songs:[],
    }

    componentDidMount(){
        axios.get('/history')
        .then(res =>{
            this.setState({songs:res.data});
        })
    }
    render(){
        if (!this.state.songs.length) return null;
        let musicBoxes = this.state.songs.map(song => {
            return(
                <MusicBox title = {song.title} artist = {song.author} id = {song.id}/>
            )
        });
        return(
            <div>
                <h2 className="text-2xl">Recently played:</h2>
                {musicBoxes}
            </div>
        )
    }
    
}

export default RecentlyPlayed