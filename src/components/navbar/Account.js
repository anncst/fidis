import axios from 'axios';
import React from 'react';
import { ModalContext } from '../../contexts/ModalContext';

class Account extends React.Component{

    constructor(props) {
        super(props);
        this.state = {showMenu: false};
    }

    handleClick = () => {
        this.setState({showMenu: !this.state.showMenu});
    }

    hide = () => {
        this.setState({showMenu: false});
    }

    logout = () => {
        axios.get('/auth/logout')
        .then(() => {
            window.location.reload();
        })
    }

    render(){
        return(
            <div className="ml-10 relative" onBlur={this.hide}>
                <button className="text-gray-700 flex items-center hover:bg-gray-200 px-2 py-1 rounded-lg text-l" onClick={this.handleClick}>
                    {this.props.profile ? <span className="px-4 py-2 text-xl ">{this.props.profile.username}</span> : null}
                    
                    <i className="fas fa-user-circle fa-2x text-gray-500"></i>
                    <i className="fas fa-caret-down fa-lg mx-1 text-gray-500"></i>
                </button>
                {this.state.showMenu &&
                    <div className="absolute mt-1 right-0 bg-white p-2 rounded-lg text-xl w-full z-30">
                        <ModalContext.Consumer>{({openModal}) => {
                            return this.props.profile ? (
                                <ul> 
                                    <li><button className="py-2 px-4 hover:bg-gray-100 rounded-lg w-full" onMouseDown={this.logout}>My profile</button></li>
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
    }
}

export default Account;