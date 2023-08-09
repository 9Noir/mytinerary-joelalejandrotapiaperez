import { useRef } from "react";
import Button from "./Button";
import { NavLink as Anchor, useLocation } from "react-router-dom";

export default function NavBar() {
    const navRef = useRef(null);
    const menuRef = useRef(null);
    const location = useLocation();
    const isHome = location.pathname.startsWith("/home");

    function navbarToggle() {
        navRef.current.classList.toggle("max-sm:hidden");
        menuRef.current.classList.toggle("fa-bars");
        menuRef.current.classList.toggle("fa-xmark");
    }

    return (
        <header className={`z-10 flex flex-wrap justify-between items-center p-4 w-full font-bold max-w-[1291px] mx-auto ${isHome ? "" : "text-slate-100"}`}>
            <Anchor to="/home" className="text-3xl text-center">
                My Tinerary
            </Anchor>
            <button ref={menuRef} onClick={navbarToggle} className="hidden py-1 text-4xl max-sm:flex fa-solid fa-bars"></button>
            <nav ref={navRef} className="flex text-lg [&>*]:p-3 gap-2 max-sm:w-full max-sm:flex-col max-sm:hidden sm:items-center">
                <Anchor to="/home" className="hover:decoration-blue-500 hover:underline underline-offset-8 decoration-4">
                    Home
                </Anchor>
                <Anchor to="/cities" className="hover:decoration-blue-500 hover:underline underline-offset-8 decoration-4">
                    Cities
                </Anchor>
                <Button className="px-5" to="/signin">
                    <i className="fa-solid fa-user pr-2"></i>Login
                </Button>
            </nav>
        </header>
    );
}
