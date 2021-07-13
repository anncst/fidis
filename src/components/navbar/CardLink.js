import {NavLink} from 'react-router-dom';

function CardLink({url, name}){
    return(
        <li className="border-l border-gray-600 first:border-0"><NavLink to={url} activeClassName="font-bold" className="px-3 text-3xl mx-8">{name}</NavLink></li>
    )
}

export default CardLink;