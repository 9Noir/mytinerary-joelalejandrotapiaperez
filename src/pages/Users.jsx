import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { readUsers, clearUserData } from "../store/actions/usersActions";
import ProfilePhoto from "../components/ProfilePhoto";
import { auth } from "../store/actions/authActions";

export default function Users() {
    const dispatch = useDispatch();
    const { isLoggedIn } = useSelector((store) => store.auth);
    const loggedInUser = useSelector((store) => store.auth.user);
    const users = useSelector((store) => store.users.all);

    useEffect(() => {
        dispatch(readUsers());
    }, []);

    return (
        <>
            <div className="w-full py-8 bg-slate-600 shadow-lg"></div>
            <main className="max-w-full flex-row items-start dark:text-neutral-300">
                <div className="flex flex-wrap justify-center gap-4 overflow-hidden py-8">
                    {users &&
                        users.map((user, id) => (
                            <div key={id} className={`${loggedInUser?.email == user.email ? "!bg-blue-300 dark:!bg-blue-700/80" : ""} border-blue-600 w-80 hover:scale-105 duration-200 group relative border overflow-hidden  gap-4 bg-neutral-50 dark:bg-white/20 rounded-lg shadow-md`}>
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
                                <div className="absolute flex inset-y-0 right-0 text-xl text-blue-500 gap-4 p-4">
                                    {loggedInUser?.email == user.email && isLoggedIn ? (
                                        <button onClick={() => (dispatch(clearUserData()), dispatch(auth(null)))} title="Login" className="fa-solid fa-user-minus text-red-400"></button>
                                    ) : (
                                        <button
                                            onClick={() => {
                                                user && dispatch(clearUserData()), dispatch(auth(user));
                                            }}
                                            title="Login"
                                            className="fa-solid fa-user"></button>
                                    )}
                                    <button title="Edit" className="fa-solid fa-pen-to-square"></button>
                                </div>
                            </div>
                        ))}
                </div>
            </main>
        </>
    );
}
