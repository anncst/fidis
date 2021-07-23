import React, {useContext} from 'react';
import LoginModal from "./LoginModal";
import {ModalContext} from "../../contexts/ModalContext";
import RegisterModal from "./RegisterModal";


const ModalController = ({reloadProfile}) => {
    const {isLoginOpen, isRegisterOpen} = useContext(ModalContext);
    
    return(
        <div>
            {isLoginOpen ? <LoginModal reloadProfile = {reloadProfile} /> : null}
            {isRegisterOpen ? <RegisterModal reloadProfile = {reloadProfile}/> : null}
        </div>
    )
}
export default ModalController;