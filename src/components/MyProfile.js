import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime)

class MyProfile extends React.Component {

    state = {
        profile: null
    }

    componentDidMount() {
        axios.get('/profile/')
        .then(res => {
            this.setState({profile: res.data})
        })
    }

    render(){
        if(!this.state.profile) return null;

        const lastOnline = dayjs(this.state.profile.lastOnline).fromNow();

        return(
            <div className="flex flex-col bg-white h-screen">
                <h1>{this.state.profile.username}</h1>
                <div>Last online: {lastOnline}</div>
                <span>{this.state.profile.bio}</span>
                <span>Email: {this.state.profile.email} <Link><i class="fas fa-pencil-alt"></i></Link></span>
            </div>
        )
    }
}

export default MyProfile;