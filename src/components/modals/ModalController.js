import React, {useContext} from 'react';
import LoginModal from "./LoginModal";
import {ModalContext} from "../../contexts/ModalContext";
import RegisterModal from "./RegisterModal";


const ModalController = () => {
    const {isLoginOpen, isRegisterOpen} = useContext(ModalContext);
    
    return(
        <div>
            {isLoginOpen ? <LoginModal /> : null}
            {isRegisterOpen ? <RegisterModal /> : null}
        </div>
    )
}
export default ModalController;