import Social from "./footer/Social";

function Footer(){
    return(
        <footer className="bg-white py-8">
            <div className="text-center m-2">Follow us on</div>
            <Social />
            <div className="text-center mt-4">&hearts; Małpunia</div>
            
            <div className="text-center mt-4">Fidis &copy; 2021</div>
        </footer>
    )
}

export default Footer;