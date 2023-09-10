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
        <header ref={navbarRef} className="!z-50 w-full  flex justify-center absolute dark:fixed dark:bg-black duration-500 dark:shadow-lg ">
            <div className={"flex flex-wrap justify-between items-center px-4 py-2 font-bold w-[1291px] text-neutral-100 delay-100 max-sm:transition-all ease-in-out " + (showMenu && "max-sm:bg-slate-600 dark:bg-black")}>
                <Anchor to="/home" className="text-2xl sm:text-3xl text-center">
                    My Tinerary
                </Anchor>
                <div className="flex gap-2">
                    <ThemeSwitcher />
                    <button onClick={() => navbarToggle()} className={`${showMenu ? "fa-xmark" : "fa-bars"} z-40 hidden py-1 text-4xl max-sm:flex fa-solid active:animate-ping`}></button>
                    <nav className={`max-sm:p-4 flex text-lg [&>*]:p-3 gap-2 max-sm:w-full max-sm:flex-col sm:items-center rounded-b-xl max-sm:bg-slate-600 dark:max-sm:bg-black max-sm:absolute max-sm:left-0 max-sm:duration-500 ${showMenu ? "max-sm:top-16" : "max-sm:-translate-y-[110%]"}`}>
                        <Anchor onClick={() => navbarToggle(true)} to="/home" className="hover:decoration-slate-300 hover:underline underline-offset-8 decoration-4">
                            Home
                        </Anchor>
                        <Anchor onClick={() => navbarToggle(true)} to="/cities" className="hover:decoration-slate-300 hover:underline underline-offset-8 decoration-4">
                            Cities
                        </Anchor>

                        {user ? (
                            <>
                                <Anchor onClick={() => navbarToggle(true)} to="/users" className="hover:decoration-slate-300 hover:underline underline-offset-8 decoration-4">
                                    Users
                                </Anchor>
                                <Anchor onClick={() => navbarToggle(true)} to="/account" className="flex gap-4 items-center">
                                    <ProfilePhoto className="w-7" url={user.photo} name={user.name} />
                                    <p className="max-sm:hidden">{user.name}</p>
                                </Anchor>
                                <button title="Logout" onClick={() => localStorage.token && dispatch(signout())} className="!px-0 hover:scale-110 duration-200 active:animate-ping drop-shadow-lg fa-solid fa-right-to-bracket"></button>
                            </>
                        ) : (
                            <Button className="px-5 !py-2" to="/signin">
                                <i className="fa-solid fa-user pr-2"></i>Login
                            </Button>
                        )}
                    </nav>
                </div>
            </div>
        </header>
    );
}
