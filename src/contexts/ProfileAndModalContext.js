import React, { createContext, useContext } from 'react';
import {ProfileContext} from './ProfileContext';
import {ModalContext} from './ModalContext';

export const ProfileAndModalContext = createContext();

function ProfileAndModalContextProvider(props) {

    const profileContext = useContext(ProfileContext);
    const modalContext = useContext(ModalContext);

    return(
        <ProfileAndModalContext.Provider value={{profileContext: profileContext, modalContext: modalContext}}>
            {props.children}
        </ProfileAndModalContext.Provider>
    )   
}

export default ProfileAndModalContextProvider;