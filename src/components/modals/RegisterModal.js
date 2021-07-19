import React from 'react';
import Modal from "./Modal"

function RegisterModal(){
    return(
        <Modal>
            <h1 className="text-3xl text-center mb-10">Register to <span className="text-primary">fidis!</span></h1>
            <label className="mb-1" for="login">Login</label>
            <div className="border border-gray-300 rounded-lg mb-4">
                <span className="m-2 text-gray-400">
                    <i className="fas fa-user"></i>
                </span>
                <input placeholder="Login" type="text" id="login" className="p-1" />
            </div>
            <label className="mb-1" for="email">Email</label>
            <div className="border border-gray-300 rounded-lg mb-4">
                <span className="m-2 text-gray-400">
                    <i className="fas fa-user"></i>
                </span>
                <input placeholder="Email" type="email" id="email" className="p-1" />
            </div>
            <label className="mb-1" for="password">Password</label>
            <div className="border border-gray-300 rounded-lg mb-8">
                <span className="m-2 text-gray-400">
                    <i className="fas fa-key"></i>
                </span>
            <input placeholder="Password" type="password" id="password" className="p-1"/>
            </div>
            <label className="mb-1" for="confirmpassword">Confirm Password</label>
            <div className="border border-gray-300 rounded-lg mb-8">
                <span className="m-2 text-gray-400">
                    <i className="fas fa-key"></i>
                </span>
            <input placeholder="Password" type="password" id="confirmpassword" className="p-1"/>
            </div>
            <button className="bg-primary rounded-lg text-white p-2">Register</button>
        </Modal>
    )
}

export default RegisterModal;