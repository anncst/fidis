import React, { Component, createContext } from 'react';

export const ModalContext = createContext();

class ModalContextProvider extends Component {
    state = { 
        isLoginOpen:false,
        isRegisterOpen:false
     }
     closeAllModals = () =>{
         this.setState({isLoginOpen: false, isRegisterOpen: false});
     }
     openModal = (name) => {
         this.closeAllModals();
         switch(name) {
            case "LOGIN":
                this.setState({isLoginOpen: true});
                break;
            case "REGISTER":
                this.setState({isRegisterOpen: true});
                break;
         }
         
     }

    render() { 
        return ( 
            <ModalContext.Provider value={{...this.state, closeAllModals: this.closeAllModals, openModal: this.openModal}}>
                {this.props.children}
            </ModalContext.Provider>
         );
    }
}
 
export default ModalContextProvider;