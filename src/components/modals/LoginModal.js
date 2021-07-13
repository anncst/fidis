import React from 'react';
import Modal from "./Modal"

function LoginModal(){
    return(
        <Modal>
            <h1 className="text-3xl text-center mb-10">Login to <span className="text-primary">Fidis!</span></h1>
            <label className="mb-1" for="login">Login</label>
            <div className="border border-gray-300 rounded-lg mb-4">
                <span className="m-2 text-gray-400">
                    <i className="fas fa-user"></i>
                </span>
                <input placeholder="Login" type="text" id="login" className="p-1" />
            </div>
            <label className="mb-1" for="password">Password</label>
            <div className="border border-gray-300 rounded-lg mb-8">
                <span className="m-2 text-gray-400">
                    <i className="fas fa-key"></i>
                </span>
            <input placeholder="Password" type="password" id="password" className="p-1"/>
            </div>
            <button className="bg-primary rounded-lg text-white p-2">Login</button>
        </Modal>
    )
}

export default LoginModal;