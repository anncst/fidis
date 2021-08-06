import React from "react";
import axios from 'axios';
import TabsTable from './TabsTable';

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
        return(
            <div>
                <span className="flex flex-row items-center py-2 px-4 rounded-lg"> 
                        {!this.state.author.image ? null : 
                            <img src={this.state.author.image.url} className="rounded-full"/>
                        }
                        <div className="text-4xl py-2 px-4">{this.state.author.name}</div>
                    </span>
                <TabsTable songs = {this.state.author.songs} />
            </div>
        )
        
    }
}

export default AuthorPage;