import axios from 'axios';
import React from 'react';
import { ModalContext } from '../../contexts/ModalContext';
import { ProfileContext } from '../../contexts/ProfileContext';
import {Link} from 'react-router-dom';

class Account extends React.Component{

    constructor(props) {
        super(props);
        this.state = {showMenu: false};
    }

    handleClick = () => {
        this.setState({showMenu: !this.state.showMenu});
    }

    hide = (e) => {
        if(this.dropdownMenu && !this.dropdownMenu.contains(e.relatedTarget)) {
            this.setState({showMenu: false});
        }
    }

    logout = () => {
        axios.get('/auth/logout')
        .then(() => {
            window.location.href='/'
        })
    }

    render(){
        return(
            <ProfileContext.Consumer>
                {({profile}) =>{ 
                    return(
                        <div className="ml-10 relative" onBlur={this.hide}>
                            <button className="text-gray-700 flex items-center hover:bg-gray-200 px-2 py-1 rounded-lg text-l" onClick={this.handleClick}>
                                {profile ? <span className="px-4 py-2 text-xl ">{profile.username}</span> : null}
                                <i className="fas fa-user-circle fa-2x text-gray-500"></i>
                                <i className="fas fa-caret-down fa-lg mx-1 text-gray-500"></i>
                            </button>
                            {this.state.showMenu &&
                            <div className="absolute mt-1 right-0 bg-white p-2 rounded-lg text-xl z-30 w-full min-w-32" ref={(element) => {this.dropdownMenu = element}}>
                                <ModalContext.Consumer>{({openModal}) => {
                                    return profile ? (
                                        <ul> 
                                            <li><Link to="/profile/" className="py-2 px-4 hover:bg-gray-100 rounded-lg w-full">My profile</Link></li>
                                            <li><button className="py-2 px-4 hover:bg-gray-100 rounded-lg w-full" onMouseDown={this.logout}>Logout</button></li>
                                        </ul> 
                                    ) : (
                                        <ul>
                                            <li><button className="py-2 px-4 hover:bg-gray-100 rounded-lg w-full" onMouseDown={() => {openModal("LOGIN")}}>Login</button></li>
                                            <li><button className="py-2 px-4 hover:bg-gray-100 rounded-lg w-full" onMouseDown={() => {openModal("REGISTER")}}>Register</button></li>
                                        </ul>
                                    )
                                }}
                                </ModalContext.Consumer>
                            </div>
                            }
                        </div>
                    )
                }}
            </ProfileContext.Consumer>
            
        )
    }
}

export default Account;