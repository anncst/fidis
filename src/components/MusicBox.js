import {NavLink} from 'react-router-dom';

function MusicBox(props) {
    return (
        <div className="shadow-lg p-2 rounded-md font-bold bg-white m-4 text-2xl">
            <NavLink to={"/song/" + props.id}>
                {props.title} - {props.artist}
            </NavLink>
        </div>
    )
}

export default MusicBox;