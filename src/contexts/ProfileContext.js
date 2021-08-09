import React, { createContext } from 'react';
import axios from 'axios';

export const ProfileContext = createContext();

class ProfileContextProvider extends React.Component {

    state = {
        profile: null,
      }
    
      componentDidMount() {
        this.reloadProfile();
      }
    
      reloadProfile = () => {
        axios.get('/profile/')
        .then(res => {
          this.setState({profile: res.data})
        })
      }

    render(){
        return(
            <ProfileContext.Provider value={{...this.state, reloadProfile : this.reloadProfile}}>
                {this.props.children}
            </ProfileContext.Provider>
        )
    }
}

export default ProfileContextProvider;