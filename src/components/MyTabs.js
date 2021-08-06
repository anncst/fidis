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
        return(
            <TabsTable songs = {this.state.songs} />
        )
    }
}

export default MyTabs;