import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { readUsers, clearUserData } from "../store/actions/usersActions";
import ProfilePhoto from "../components/ProfilePhoto";
import { auth } from "../store/actions/authActions";
import { Navigate } from "react-router-dom";
import { Link as Anchor } from "react-router-dom";
import BgImg from "../components/BgImg";

export default function Users() {
    const dispatch = useDispatch();
    const loggedInUser = useSelector((store) => store.auth.user);
    const users = useSelector((store) => store.users.all);
    useEffect(() => {
        dispatch(readUsers());
    }, []);

    return !localStorage.token || loggedInUser?.role !== "admin" ? (
        <Navigate to="/cities" />
    ) : (
        <>
            <BgImg className="!h-[50vh] object-bottom" url="../img/users.jpg" />
            <section className="h-[50vh] flex flex-col justify-center text-center text-neutral-100">
                <div className="max-w-[1291px] m-auto">
                    <h1 className="text-4xl font-bold mb-4">Users</h1>
                    <p className="text-2xl max-w-sm">Discover our community members. Explore their profiles and interests.</p>
                </div>
            </section>

            <main className="max-w-full flex-row items-start dark:text-neutral-300">
                <div className="flex flex-wrap justify-center gap-4 overflow-hidden py-8">
                    {users &&
                        users.map((user, id) => (
                            <div key={id} className={`${loggedInUser?.email == user.email && "bg-gradient-to-tl from-blue-700 to-blue-500 text-neutral-200 "} w-80 hover:scale-105 duration-200 group relative overflow-hidden  gap-4 bg-neutral-50 dark:bg-white/20 rounded-lg shadow-md`}>
                                <div className="flex items-center w-full gap-4 p-4">
                                    <div className="relative flex">
                                        <ProfilePhoto className="w-10 sm:w-20" url={user.photo} name={user.name} />
                                        <div className="absolute w-full -bottom-6 sm:-bottom-2 flex">
                                            <p className={`${user.role == "admin" ? "bg-red-600" : "bg-blue-600"} mx-auto capitalize text-white font-medium px-2 py-1 text-[0.5rem] sm:text-xs rounded-full`}>{user.role}</p>
                                        </div>
                                    </div>
                                    <div className="grid overflow-clip">
                                        <h2 title={user.lastName.toUpperCase() + ", " + user.name} className="flex font-bold max-w-[10rem] pr-5 whitespace-nowrap truncate">
                                            {user.lastName.toUpperCase() + ", " + user.name}
                                        </h2>
                                        <p title={user.country} className="font-light">
                                            {user.country}
                                        </p>
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => {
                                                    navigator.clipboard.writeText(user.email);
                                                }}
                                                className="fa-regular fa-copy"></button>
                                            <a title={user.email} className="text-sm font-medium" href={"mailto:" + user.email}>
                                                {user.email}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute flex items-center inset-y-0 right-0 text-xl text-blue-500 gap-4 p-4">
                                    {loggedInUser?.email == user.email ? (
                                        <button onClick={() => (dispatch(clearUserData()), dispatch(auth(null)))} title="Login" className="fa-solid fa-user-minus text-red-400"></button>
                                    ) : (
                                        <button
                                            onClick={() => {
                                                user && dispatch(clearUserData()), dispatch(auth(user));
                                            }}
                                            title="Login"
                                            className="fa-solid fa-user"></button>
                                    )}
                                    <Anchor to="/account" title="View more" className={`${loggedInUser?.email == user.email && "text-neutral-200"} fa-solid fa-eye`}></Anchor>
                                </div>
                            </div>
                        ))}
                </div>
            </main>
        </>
    );
}
