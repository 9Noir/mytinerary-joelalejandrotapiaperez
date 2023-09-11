import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { readUsers, clearUserData } from "../store/actions/usersActions";
import ProfilePhoto from "../components/ProfilePhoto";
import { auth } from "../store/actions/authActions";
import { Navigate } from "react-router-dom";
import { Link as Anchor } from "react-router-dom";

export default function Users() {
    const dispatch = useDispatch();
    const loggedInUser = useSelector((store) => store.auth.user);
    const users = useSelector((store) => store.users.all);

    useEffect(() => {
        dispatch(readUsers());
    }, []);

    return !localStorage.token ? (
        <Navigate to="/cities" />
    ) : (
        <>
            <div className="w-full py-8 bg-slate-600 shadow-lg"></div>
            <main className="max-w-full flex-row items-start dark:text-neutral-300">
                <div className="flex flex-wrap justify-center gap-4 overflow-hidden py-8">
                    {users &&
                        users.map((user, id) => (
                            <div key={id} className={`${loggedInUser?.email == user.email && "bg-gradient-to-tl from-blue-700 to-blue-500 text-neutral-200 "} w-80 hover:scale-105 duration-200 group relative overflow-hidden  gap-4 bg-neutral-50 dark:bg-white/20 rounded-lg shadow-md`}>
                                <div className="flex items-center w-full gap-4 p-4">
                                    <ProfilePhoto className="w-10 sm:w-20" url={user.photo} name={user.name} />
                                    <div className="grid overflow-clip">
                                        <h2 title={user.lastName.toUpperCase() + ", " + user.name} className="flex font-bold max-w-[10rem] pr-5 whitespace-nowrap overflow-hidden">
                                            {user.lastName.toUpperCase() + ", " + user.name}
                                        </h2>
                                        <p title={user.country} className="font-light">
                                            {user.country}
                                        </p>
                                        <a title={user.email} className="text-sm font-medium" href={"mailto:" + user.email}>
                                            {user.email}
                                        </a>
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
                                    <Anchor to="/account" title="Edit" className={`${loggedInUser?.email == user.email && "text-neutral-200"} fa-solid fa-pen-to-square`}></Anchor>
                                </div>
                            </div>
                        ))}
                </div>
            </main>
        </>
    );
}
