import React from 'react';
import LoginForm from '../auth/LoginForm';
import Modal from "./Modal"

function LoginModal({reloadProfile}){
    
    return(
        <Modal>
            <h1 className="text-3xl text-center mb-10">Login to <span className="text-primary">fidis!</span></h1>
            <LoginForm reloadProfile = {reloadProfile}/>
        </Modal>
    )
}

export default LoginModal;