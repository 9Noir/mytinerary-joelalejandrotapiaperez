import { useEffect, useRef, useState } from "react";
import Button from "../Button";
import { NavLink as Anchor } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";
import { useDispatch, useSelector } from "react-redux";
import ProfilePhoto from "../ProfilePhoto";
import { signout } from "../../store/actions/authActions";

export default function NavBar() {
    const user = useSelector((store) => store.auth.user);
    const [showMenu, setShowMenu] = useState(false);
    const navbarRef = useRef(null);
    const dispatch = useDispatch();
    function navbarToggle(close = false) {
        setShowMenu(close ? false : !showMenu);
    }

    useEffect(() => {
        window.addEventListener("resize", () => window.innerWidth >= 768 && setShowMenu(false));
    }, []);
    useEffect(() => {
        function handleOutsideClick(event) {
            if (navbarRef.current && !navbarRef.current.contains(event.target)) {
                setShowMenu(false);
            }
        }

        document.addEventListener("click", handleOutsideClick);

        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, []);

    return (
        <header className={`dark:fixed ${showMenu && "bg-slate-400/20 border-b-2 dark:border-none rounded-b-2xl shadow-lg backdrop-blur"} dark:fixed absolute flex w-full top-0 !z-10  text-slate-50 dark:shadow-2xl dark:backdrop-blur dark:bg-black/70 duration-300 overflow-hidden`}>
            <div className="w-[1291px] mx-auto flex flex-wrap items-center justify-between px-4 font-bold">
                <Anchor to="/home" className="text-2xl sm:text-3xl text-center">
                    My Tinerary
                </Anchor>
                <button onClick={() => navbarToggle()} className={`${showMenu ? "fa-xmark" : "fa-bars"} md:hidden z-40  py-1 text-4xl max-sm:flex fa-solid active:animate-ping`}></button>
                <ThemeSwitcher className={"absolute md:inset-x-0 w-fit mx-auto text-2xl max-md:right-14 max-md:top-1 md:right-4"} />
                <nav className={`${!showMenu && "max-md:hidden"} flex text-lg items-start md:items-center capitalize max-md:w-full max-md:flex-col  md:mr-6 gap-4 py-4 md:py-2`}>
                    <Anchor onClick={() => navbarToggle(true)} to="/home" className="nav-link">
                        Home
                    </Anchor>
                    <Anchor onClick={() => navbarToggle(true)} to="/cities" className="nav-link">
                        Cities
                    </Anchor>
                    {user ? (
                        <>
                            {user.role == "admin" && (
                                <Anchor onClick={() => navbarToggle(true)} to="/users" className="nav-link">
                                    Users
                                </Anchor>
                            )}
                            <Anchor onClick={() => navbarToggle(true)} to="/account" className="flex gap-4 items-center">
                                <ProfilePhoto className="w-7 max-sm:order-2" url={user.photo} name={user.name} />
                                <p className="nav-link md:py-4">{user.name}</p>
                            </Anchor>
                            <button
                                title="Logout"
                                onClick={() => {
                                    navbarToggle(true);
                                    localStorage.token && dispatch(signout());
                                }}
                                className="pt-[0.35rem] sm:hover:scale-110 duration-200 active:animate-ping drop-shadow-lg fa-solid fa-right-to-bracket text-left"></button>
                        </>
                    ) : (
                        <Button onClick={() => navbarToggle(true)} className="px-5 !py-3" to="/signin">
                            <i className="fa-solid fa-user pr-2"></i>Login
                        </Button>
                    )}
                </nav>
            </div>
        </header>
    );
}

// return (
//     <header ref={navbarRef} className="!z-50 w-full  flex justify-center absolute dark:fixed dark:bg-black duration-1000 dark:shadow-lg ">
//         <div className={`flex flex-wrap justify-between items-center px-4 py-2 font-bold w-[1291px] border-b rounded-b-lg text-neutral-100 delay-100 max-sm:transition-all ease-in-out  bg-white/20 backdrop-blur-md dark:bg-black`}>
//             <Anchor to="/home" className="text-2xl sm:text-3xl text-center">
//                 My Tinerary
//             </Anchor>
//             <ThemeSwitcher />
//             <button onClick={() => navbarToggle()} className={`${showMenu ? "fa-xmark" : "fa-bars"} z-40 hidden py-1 text-4xl max-sm:flex fa-solid active:animate-ping`}></button>
//             <nav className={` flex text-lg gap-2 max-sm:w-full max-sm:flex-col sm:items-center rounded-b-xl max-sm:duration-500 transition-all overflow-hidden ${showMenu ? "max-h-0" : ""}`}>
//                 <Anchor onClick={() => navbarToggle(true)} to="/home" className="nav-link">
//                     Home
//                 </Anchor>
//                 <Anchor onClick={() => navbarToggle(true)} to="/cities" className="nav-link">
//                     Cities
//                 </Anchor>

//                 {user ? (
//                     <>
//                         {user.role == "admin" && (
//                             <Anchor onClick={() => navbarToggle(true)} to="/users" className="nav-link">
//                                 Users
//                             </Anchor>
//                         )}
//                         <Anchor onClick={() => navbarToggle(true)} to="/account" className="flex gap-4 items-center">
//                             <ProfilePhoto className="w-7 max-sm:order-2" url={user.photo} name={user.name} />
//                             <p className="max-sm:order-1 nav-link">{user.name}</p>
//                         </Anchor>
//                         <button
//                             title="Logout"
//                             onClick={() => {
//                                 navbarToggle(true);
//                                 localStorage.token && dispatch(signout());
//                             }}
//                             className="sm:!px-0 sm:hover:scale-110 duration-200 active:animate-ping drop-shadow-lg fa-solid fa-right-to-bracket text-left"></button>
//                     </>
//                 ) : (
//                     <Button onClick={() => navbarToggle(true)} className="px-5 !py-2" to="/signin">
//                         <i className="fa-solid fa-user pr-2"></i>Login
//                     </Button>
//                 )}
//             </nav>
//         </div>
//     </header>
// );
