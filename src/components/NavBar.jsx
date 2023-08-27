import { useEffect, useState } from "react";
import Button from "./Button";
import { NavLink as Anchor, useLocation } from "react-router-dom";

export default function NavBar() {
    const [showMenu, setShowMenu] = useState(false);
    const location = useLocation();

    function navbarToggle() {
        setShowMenu(!showMenu);
    }

    useEffect(() => {
        // Cuando la ubicación cambia (se accede a otra página), oculta el menú
        setShowMenu(false);
    }, [location]);

    return (
        <header className="!z-50 w-full absolute flex justify-center">
            <div className={"flex flex-wrap justify-between items-center p-4 font-bold w-[1291px] text-slate-100 delay-100 max-sm:transition-all ease-in-out" + (showMenu && " bg-slate-900")}>
                <Anchor to="/home" className="text-3xl text-center">
                    My Tinerary
                </Anchor>
                <button onClick={navbarToggle} className={`${showMenu ? "fa-xmark" : "fa-bars"} z-40 hidden py-1 text-4xl max-sm:flex fa-solid active:animate-ping`}></button>
                <nav className={`max-sm:p-4 flex text-lg [&>*]:p-3 gap-2 max-sm:w-full max-sm:flex-col  sm:items-center rounded-b-xl max-sm:bg-slate-900 max-sm:absolute max-sm:left-0 max-sm:transition-all max-sm:duration-500 ease-in-out ${showMenu ? "top-16" : "-top-56"}`}>
                    <Anchor to="/home" className="hover:decoration-slate-300 hover:underline underline-offset-8 decoration-4">
                        Home
                    </Anchor>
                    <Anchor to="/cities" className="hover:decoration-slate-300 hover:underline underline-offset-8 decoration-4">
                        Cities
                    </Anchor>
                    <Button className="px-5" to="/signin">
                        <i className="fa-solid fa-user pr-2"></i>Login
                    </Button>
                </nav>
            </div>
        </header>
    );
}
