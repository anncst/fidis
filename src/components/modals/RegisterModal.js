import React from 'react';
import Modal from "./Modal";
import RegisterForm from "../auth/RegisterForm";

function RegisterModal ({reloadProfile}) {
    return(
        <Modal>
            <h1 className="text-3xl text-center mb-10">Register to <span className="text-primary">fidis!</span></h1>
            <RegisterForm reloadProfile = {reloadProfile} />
        </Modal>
    )
}
    

export default RegisterModal;