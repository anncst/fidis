import React from "react";

class FavouriteButton extends React.Component{
    constructor(props) {
        super(props);
        this.state = {liked: false};
    }

    componentDidMount() {
        // sprawdzić czy jest polubiona, 
    }

    handleClick = () => {
        this.setState(state => ({
            liked: !state.liked
        }));

        // if (true) {
        //     // zapisać polubienie
        // } else {
        //     // usunąć polubienie
        // }
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