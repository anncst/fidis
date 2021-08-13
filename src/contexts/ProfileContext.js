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
    
      reloadProfile = (profile) => {
        if(!profile){
          axios.get('/profile/')
          .then(res => {
            this.setState({profile: res.data})
          })
        }else{
          this.setState({profile:profile})
        }
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