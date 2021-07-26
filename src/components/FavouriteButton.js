import React from "react";
import axios from 'axios';
import { ModalContext } from '../contexts/ModalContext';

class FavouriteButton extends React.Component{

    static contextType = ModalContext;

    state = {
        liked: this.props.liked,
        loggedIn: false
    }

    componentDidMount(){
        console.log(this.props.profile)
        if(this.props.profile) {
            this.setState({
                loggedIn: true
            })
        }
    }

    handleClick = () => {
        if(this.state.loggedIn){
            this.setState(state => ({
                liked: !state.liked
            }));
    
            if (!this.state.liked) {
                axios.put(`/song/${this.props.songId}/liked`)// zapisać polubienie
            } else {
                axios.delete(`/song/${this.props.songId}/liked`)
                // usunąć polubienie
            }
        } else{
            this.context.openModal("LOGIN")
        }
    }
        

    render(){
        return(
            <div>
                <button className="text-3xl" onClick={this.handleClick}> <i className={this.state.liked ? "fas fa-heart text-secondary" : "far fa-heart"}></i></button>
            </div>
        )
    } 
}

export default FavouriteButton;