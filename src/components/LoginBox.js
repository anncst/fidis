import { ModalContext } from '../contexts/ModalContext';
import LoginForm from './auth/LoginForm';

function LoginBox({reloadProfile}) {
    return(
        <div className="bg-white p-6 rounded-xl text-xl">
            <h1 className="text-3xl text-center mb-10">Login to <span className="text-primary">fidis!</span></h1>
            <LoginForm reloadProfile = {reloadProfile} />
            <ModalContext.Consumer>{({openModal}) => (
                <div className="pt-4">Don't have an account? <button className="text-primary" onMouseDown={() => {openModal("REGISTER")}}>Register here</button></div>
            )}
            </ModalContext.Consumer>
        </div> 
    )
}

export default LoginBox;