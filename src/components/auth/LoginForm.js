import {Formik} from 'formik';
import axios from 'axios';
import {useContext} from 'react'
import {ModalContext} from '../../contexts/ModalContext'
 
function LoginForm({reloadProfile}) {
    const {closeAllModals} = useContext(ModalContext);

    return(
        <Formik
            initialValues={{
                username: '',
                password: '',
            }}
            onSubmit={(values) => {
                axios.post('/auth/login', values)
                .then(res => {
                    reloadProfile();
                    closeAllModals();
                })
            }}
        >
            {
                ({values, handleChange, handleSubmit}) => (
                <form className="flex flex-col items-start" onSubmit={handleSubmit}>
                    <label className="mb-1 px-2" for="login">Username</label>
                    <div className="border border-gray-300 rounded-lg mb-4 w-full flex">
                        <span className="text-gray-400">
                            <i className="fas fa-user self-center m-3"></i>
                        </span>
                        <input placeholder="Username" type="text" id="username" className="p-1 w-full" onChange={handleChange} value={values.username}/>
                    </div>
                    <label className="mb-1 px-2" for="password">Password</label>
                    <div className="border border-gray-300 rounded-lg mb-8 w-full flex">
                        <span className="text-gray-400">
                            <i className="fas fa-key self-center m-3"></i>
                        </span>
                    <input placeholder="Password" type="password" id="password" className="p-1 w-full" onChange={handleChange} value={values.password}/>
                    </div>
                    <button className="bg-primary rounded-lg text-white py-2 px-4 w-full" type="submit">Login</button>
                </form>
                )
            }
        </Formik>
        
    )
}

export default LoginForm