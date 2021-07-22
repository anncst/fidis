import React from 'react';
import {Formik , ErrorMessage} from 'formik'
import axios from 'axios'

function RegisterForm () {
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
                console.log(values.password, values.confirmPassword)
                if(values.password !== values.confirmPassword){
                    errors.confirmPassword = "Password don't match"
                }
                return errors;
                }  
            }
            onSubmit={values => {
                axios.post('/auth/register', values)
                .then(res =>{
                    console.log(res)
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
                        <span className="m-2 text-gray-400">
                            <i className="fas fa-user"></i>
                        </span>
                        <input placeholder="Username" type="text" id="username" className="p-1" value={values.username} onChange={handleChange} />
                    </div>
                    <label className="mb-1" for="email">Email</label>
                    <div className="border border-gray-300 rounded-lg mb-4">
                        <span className="m-2 text-gray-400">
                            <i className="fas fa-user"></i>
                        </span>
                        <input placeholder="Email" type="email" id="email" className="p-1" value={values.email} onChange={handleChange}/>
                    </div>
                    <label className="mb-1" for="password">Password</label>
                    <div className="border border-gray-300 rounded-lg mb-8">
                        <span className="m-2 text-gray-400">
                            <i className="fas fa-key"></i>
                        </span>
                        <input placeholder="Password" type="password" id="password" className="p-1" value={values.password} onChange={handleChange}/>
                    </div>
                    <label className="mb-1" for="confirmpassword">Confirm Password</label>
                    <div className="border border-gray-300 rounded-lg mb-8">
                        <span className="m-2 text-gray-400">
                            <i className="fas fa-key"></i>
                        </span>
                        <input placeholder="Password" type="password" id="confirmPassword" className="p-1" value={values.confirmPassword} onChange={handleChange}/>
                        <ErrorMessage name="confirmPassword" component="div"/>
                    </div>
                    <button className="bg-primary rounded-lg text-white p-2" type="submit">Register</button>
                </form>    
            )}  
        </Formik>
    )
}

export default RegisterForm;