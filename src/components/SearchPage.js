import React from 'react';
import axios from 'axios';
import TabsTable from './TabsTable';

class SearchPage extends React.Component {
    state = {
        songs: []
    }

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const q = query.get('q')
        axios.get('/search?q=' + q)
        .then(res => {
            this.setState({songs:res.data})
        })

    }
    render() {
        return !this.state.songs.length ? (
        <div className="flex justify-center flex-col items-center min-h-full mt-24">
            <img src="img/empty-box.svg" className="w-1/4"/>
            <h1 className="text-2xl p-4">Nothing found</h1>
        </div>
        ) : (
        <TabsTable songs = {this.state.songs}/>
        );  
    }
}

export default SearchPage;