import { useRef } from "react";
export default function NavBar() {
    const navRef = useRef(null);
    const menuRef = useRef(null);

    function navbarToggle() {
        navRef.current.classList.toggle("max-xs:hidden");
        menuRef.current.classList.toggle("fa-bars")
        menuRef.current.classList.toggle("fa-xmark")
    }

    return (
        <header className="sticky top-0 z-10 flex flex-wrap justify-between items-center p-4 w-full font-bold">
            <a href="#" className="text-3xl text-center">
                My Tinerary
            </a>
            <button ref={menuRef} onClick={navbarToggle} className="hidden py-1 text-4xl max-xs:flex fa-solid fa-bars"></button>
            <nav ref={navRef} className="flex text-lg [&>*]:p-3 gap-2 max-xs:w-full max-xs:flex-col max-xs:hidden">
                <a href="#">Home</a>
                <a href="#">Cities</a>
                <a href="#" className="bg-blue-700 rounded-lg text-white">
                    <i className="fa-solid fa-user pr-2"></i>Login
                </a>
            </nav>
        </header>
    );
}
