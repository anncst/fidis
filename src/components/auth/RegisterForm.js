import React from 'react';
import {Formik , ErrorMessage} from 'formik'
import axios from 'axios'
import {useContext} from 'react'
import {ModalContext} from '../../contexts/ModalContext'
import { ProfileContext } from '../../contexts/ProfileContext';


function RegisterForm () {
    const {closeAllModals} = useContext(ModalContext);
    const {reloadProfile} = useContext(ProfileContext);
    return( 
        <Formik
            initialValues={{ 
                username: "", 
                emial:"",
                password: "",
                confirmPassword: "",
            }}
            validate={values => {
                const errors = {};
                if(values.password !== values.confirmPassword){
                    errors.confirmPassword = "Password don't match"
                }
                return errors;
                }  
            }
            onSubmit={values => {
                axios.post('/auth/register', values)
                .then(res =>{
                    reloadProfile();
                    closeAllModals();
                })
            }}
        
        >
            {({
                values,
                handleSubmit,
                handleChange,
            }) => (
                <form onSubmit={handleSubmit}>
                    <label className="mb-1" for="username">Username</label>
                    <div className="border border-gray-300 rounded-lg mb-4">
                        <span className="text-gray-400">
                            <i className="fas fa-user m-3"></i>
                        </span>
                        <input placeholder="Username" type="text" id="username" className="p-1" value={values.username} onChange={handleChange} />
                    </div>
                    <label className="mb-1" for="email">Email</label>
                    <div className="border border-gray-300 rounded-lg mb-4">
                        <span className="text-gray-400">
                            <i className="fas fa-user m-3"></i>
                        </span>
                        <input placeholder="Email" type="email" id="email" className="p-1" value={values.email} onChange={handleChange}/>
                    </div>
                    <label className="mb-1" for="password">Password</label>
                    <div className="border border-gray-300 rounded-lg mb-8">
                        <span className="text-gray-400">
                            <i className="fas fa-key m-3"></i>
                        </span>
                        <input placeholder="Password" type="password" id="password" className="p-1" value={values.password} onChange={handleChange}/>
                    </div>
                    <label className="mb-1" for="confirmpassword">Confirm Password</label>
                    <div className="border border-gray-300 rounded-lg mb-8 ">
                        <span className="text-gray-400">
                            <i className="fas fa-key m-3"></i>
                        </span>
                        <input placeholder="Password" type="password" id="confirmPassword" className="p-1" value={values.confirmPassword} onChange={handleChange}/>
                        <div className="flex justify-center bg-red-200">
                            <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-lg"/>
                        </div>
                        
                    </div>
                    <button className="bg-primary rounded-lg text-white p-2 w-full" type="submit">Register</button>
                </form>    
            )}  
        </Formik>
    )
}

export default RegisterForm;