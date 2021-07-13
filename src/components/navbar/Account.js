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

    render(){
        return(
            <div className="ml-10 relative" onBlur={this.hide}>
                <button className="text-black flex items-center opacity-25 hover:bg-primary px-2 py-1 rounded-lg" onClick={this.handleClick}>
                    <i className="fas fa-user-circle fa-2x"></i>
                    <i className="fas fa-caret-down fa-lg mx-1"></i>
                </button>
                {this.state.showMenu &&
                    <div className="absolute right-0 bg-white p-2 rounded-lg text-xl">
                        <ModalContext.Consumer>{({openModal}) => {
                            return (
                                <ul>
                                    <li><button className="py-1 px-8 hover:bg-gray-100 rounded-lg w-full" onMouseDown={() => {openModal("LOGIN")}}>Login</button></li>
                                    <li><button className="py-1 px-8 hover:bg-gray-100 rounded-lg w-full" onMouseDown={() => {openModal("REGISTER")}}>Register</button></li>
                                    {/* <li className="py-1 px-8 hover:bg-gray-100 rounded-lg"><a>Logout</a></li> */}
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