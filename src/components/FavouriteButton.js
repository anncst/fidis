import React from "react";
import axios from 'axios';
import { ProfileAndModalContext } from '../contexts/ProfileAndModalContext';

//add ProfileContext

class FavouriteButton extends React.Component{

    static contextType = ProfileAndModalContext;

    state = {
        liked: this.props.liked,
    }

    handleClick = () => {
        if(this.context.profileContext.profile){
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
            this.context.modalContext.openModal("LOGIN")
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