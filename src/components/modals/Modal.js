import React, {useContext} from 'react';
import { ModalContext } from "../../contexts/ModalContext";

function Modal(props){
    const {closeAllModals} = useContext(ModalContext);
    return(
        <div className="fixed z-10 inset-0 overflow-y-auto ">
            <div className="items-end justify-center min-h-screen text-center">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={() => closeAllModals()}></div>
                
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>

                <div className="inline-block bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all my-8 align-middle w-1/4 max-w-xl">
                    <div className="bg-white px-4 pt-5 pb-4 p-6">

                        <div className="absolute top-4 right-4 text-gray-400">
                            <button onClick={() => closeAllModals()}>
                                <i className="fas fa-times"></i>
                            </button>
                        </div>

                        <div className="flex flex-col text-2xl m-10 ">
                            {props.children}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;