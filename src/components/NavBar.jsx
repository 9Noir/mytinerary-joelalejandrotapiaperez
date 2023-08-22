import { useEffect, useRef, useState } from "react";
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
        <header className="!z-50 flex justify-center">
            <div className={"absolute flex flex-wrap justify-between items-center p-4 w-full font-bold max-w-[1291px] mx-auto text-slate-100 " + (showMenu && "bg-slate-700")}>
                <Anchor to="/home" className="text-3xl text-center">
                    My Tinerary
                </Anchor>
                <button onClick={navbarToggle} className={`${showMenu ? "fa-xmark" : "fa-bars"} hidden py-1 text-4xl max-sm:flex fa-solid active:animate-ping`}></button>
                <nav className={"flex text-lg [&>*]:p-3 gap-2 max-sm:w-full max-sm:flex-col  sm:items-center " + (showMenu || "max-sm:hidden")}>
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
