import Cards from "./navbar/Cards";
import Search from "./navbar/Search";
import {Link} from "react-router-dom";
import Account from "./navbar/Account"

function Navbar(){
    return(
        <nav className="flex items-center my-5">
            <Link to="/"><img src="/img/guitar.svg" alt="logo" className="h-14"/></Link>
            <Cards />
            <Search />
            <Account />
        </nav>
        )
}

export default Navbar;