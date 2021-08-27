import React from 'react';
import axios from 'axios';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import {ProfileContext} from '../contexts/ProfileContext'
import {Formik} from 'formik';
import TabsTable from './TabsTable'

dayjs.extend(relativeTime)

class Profile extends React.Component {
    static contextType = ProfileContext;

    state = {
        profile: null,
        bioEditMode: false,
        bio: null,
    }

    componentDidMount() {
        console.log(this.props.username)
        if(this.props.username){
            axios.get('/profile/' + this.props.username)
            .then(res => {
                this.setState({profile: res.data})
                console.log(this.state.profile)
            })
        } else{
            axios.get('/myprofile/')
            .then(res => {
                this.setState({profile: res.data})
                this.setState({bio: res.data.bio})
            })
        }
        
    }
    
    handleEditModeClick = () => {
        this.setState({bioEditMode: true})
    }

    handleChange = (event) => {
        this.setState({bio: event.target.value})
    }

    handleSaveBioClick = () => {
        this.setState({bioEditMode: false})
        axios.post('/myprofile/edit', {bio: this.state.bio})
        .then(res => {
            const {reloadProfile} = this.context;
            this.setState({profile: res.data})
            reloadProfile(this.state.profile);
        })
    }

    render(){

        if(!this.state.profile) return null;

        const lastOnline = dayjs(this.state.profile.lastOnline).fromNow();

        return(
            <div>
                <div className="flex flex-row bg-white items-center border-b-2 rounded-lg relative">
                    {this.props.username ? null : 
                        this.state.bioEditMode ? (
                            <button onClick={this.handleSaveBioClick}><i className="fas fa-save fa-lg absolute top-6 right-6"></i></button>
                            ) : (
                            <button onClick={this.handleEditModeClick}><i className="fas fa-pencil-alt absolute top-6 right-6"></i></button>
                            )}
                    <i className="fas fa-user-circle fa-10x text-gray-500 py-2 px-4"></i>
                    <div className="flex flex-col justify-center items-start">
                        <div className="text-2xl font-bold">{this.state.profile.username}</div>
                        {this.state.bioEditMode ? <textarea className="border rounded-lg border-gray-400 text-lg" rows="2" cols="100" onChange={this.handleChange} value={this.state.bio}></textarea> : <div className="text-lg">{this.state.bio}</div>}
                        <div className="justify-self-end pt-5 text-sm">Last online: <span className="text-green-500"> {lastOnline}</span></div>
                    </div>
                </div>
                {this.props.username ? (<TabsTable songs = {this.state.profile.favouriteSongs}/>) : (
                    <div className="window-full bg-white rounded-lg flex flex-col items-center">
                        <div className="text-3xl mb-4 font-bold">Settings</div>
                        <Formik
                            initialValues={{email: this.state.profile.email, password: '', username: this.state.profile.username}}
                            onSubmit={(values) => {
                                axios.post('/myprofile/edit', values)
                                .then(res => {
                                    const {reloadProfile} = this.context;
                                    this.setState({profile: res.data})
                                    reloadProfile(this.state.profile);
                                })
                            }}
                        >
                        {({values, handleChange, handleSubmit}) => (
                            <form className="grid grid-cols-3 gap-4 max-w-lg justify-items-start m-4" onSubmit={handleSubmit}>
                                <label className="text-2xl">Username: </label>
                                <input className="text-2xl border rounded-lg px-4 col-span-2" value={values.username} onChange={handleChange} type="username" name="username"/>
                                <label className="text-2xl">E-mail: </label>
                                <input className="text-2xl border rounded-lg px-4 col-span-2" value={values.email} onChange={handleChange} type="email" name="email"/>
                                <label className="text-2xl">Password: </label>
                                <input className="text-2xl px-4 rounded-lg border col-span-2" value={values.password} onChange={handleChange} type="password" name="password"/>
                                <button type="submit" className="bg-primary rounded-lg text-white py-2 px-4 mx-auto col-span-3 w-1/3 text-lg">Save</button>
                            </form>
                        )}
                        </Formik>
                    </div>)
                }
                
            </div>
            
        )
    }
}

export default Profile;