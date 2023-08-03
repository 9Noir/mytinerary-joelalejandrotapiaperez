export default function NavBar() {
    return (
        <header className="sticky top-0 z-10 flex flex-wrap justify-between items-center p-4 w-full font-bold">
            <a href="#" className="text-3xl text-center">
                My Tinerary
            </a>
            <input type="radio" id="open-nav" className="peer/open-nav hidden" name="menu-navbar" />
            <input type="radio" name="menu-navbar" className="peer/close-nav hidden" id="close-nav" defaultChecked />
            <label htmlFor="open-nav" className="hidden py-1 text-4xl hover:cursor-pointer max-xs:peer-checked/close-nav:flex fa-solid fa-bars"></label>
            <label htmlFor="close-nav" className="hidden py-1 text-4xl hover:cursor-pointer max-xs:peer-checked/open-nav:flex fa-solid fa-xmark"></label>
            <nav className="flex text-lg [&>*]:p-3 gap-2 max-xs:w-full max-xs:flex-col max-xs:peer-checked/close-nav:hidden">
                <a href="#">Home</a>
                <a href="#">Cities</a>
                <a href="#" className="bg-blue-700 rounded-lg text-white">
                    <i className="fa-solid fa-user pr-2"></i>Login
                </a>
            </nav>
        </header>
    );
}
