import {Formik} from 'formik';
import axios from 'axios';
 
function LoginForm() {
    return(
        <Formik
            initialValues={{
                username: '',
                password: '',
            }}
            onSubmit={(values) => {
                axios.post('/auth/login', values)
                .then(res => {
                    console.log(res)
                })
            }}
        >
            {
                ({values, handleChange, handleSubmit}) => (
                <form className="flex flex-col" onSubmit={handleSubmit}>
                    <label className="mb-1" for="login">Username</label>
                    <div className="border border-gray-300 rounded-lg mb-4">
                        <span className="m-2 text-gray-400">
                            <i className="fas fa-user"></i>
                        </span>
                        <input placeholder="Username" type="text" id="username" className="p-1" onChange={handleChange} value={values.username}/>
                    </div>
                    <label className="mb-1" for="password">Password</label>
                    <div className="border border-gray-300 rounded-lg mb-8">
                        <span className="m-2 text-gray-400">
                            <i className="fas fa-key"></i>
                        </span>
                    <input placeholder="Password" type="password" id="password" className="p-1" onChange={handleChange} value={values.password}/>
                    </div>
                    <button className="bg-primary rounded-lg text-white py-2 px-4" type="submit">Login</button>
                </form>
                )
            }
        </Formik>
        
    )
}

export default LoginForm