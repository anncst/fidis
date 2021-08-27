import React from 'react';
import axios from 'axios';
import TabsTable from './TabsTable';

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
        return !this.state.songs.length ? (
        <div className="flex justify-center flex-col items-center min-h-full mt-24">
            <img src="img/empty-box.svg" className="w-1/4"/>
            <div className="text-2xl p-4">No added songs yet</div>
        </div>
        ) : (
        <TabsTable songs = {this.state.songs} />
        ); 
    }
}

export default MyTabs;