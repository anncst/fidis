import React from "react";
import axios from 'axios'

class FavouriteButton extends React.Component{
    state = {
        liked: this.props.liked
    }


    handleClick = () => {

        this.setState(state => ({
            liked: !state.liked
        }));

        if (!this.state.liked) {
            axios.put(`/song/${this.props.songId}/liked`)// zapisać polubienie
        } else {
            axios.delete(`/song/${this.props.songId}/liked`)
            // usunąć polubienie
        }
    }

    render(){
        return(
            <div>
                <button className="text-3xl" onClick={this.handleClick}><i className={this.state.liked ? "fas fa-heart text-secondary" : "far fa-heart"}></i></button>
            </div>
        )
    } 
}

export default FavouriteButton;