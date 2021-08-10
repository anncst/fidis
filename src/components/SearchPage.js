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
        return( 
            <TabsTable songs = {this.state.songs}/>
        )
        
    }
}

export default SearchPage;