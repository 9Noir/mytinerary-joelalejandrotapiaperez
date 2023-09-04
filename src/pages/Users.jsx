import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { readUsers } from "../store/actions/usersActions";

import ProfilePhoto from "../components/ProfilePhoto";
import { auth, readLikes } from "../store/actions/authActions";

export default function Users() {
    const dispatch = useDispatch();
    const { isLoggedIn } = useSelector((store) => store.auth);
    const loggedInUser = useSelector((store) => store.auth.user);
    const users = useSelector((store) => store.users.all);
    const likes = useSelector((store) => store.auth.likes);

    useEffect(() => {
        dispatch(readUsers());
    }, []);

    return (
        <>
            <div className="w-full py-9 bg-slate-600 shadow-lg"></div>
            <main className="max-w-full flex-row items-start dark:text-neutral-300">
                <div className="flex flex-wrap justify-center gap-4 overflow-hidden py-8">
                    {users &&
                        users.map((user, id) => (
                            <div key={id} className={`${loggedInUser?.mail == user.mail ? "!bg-blue-300 dark:!bg-blue-700/80" : ""} border-blue-600 w-80 hover:scale-105 duration-200 group relative border overflow-hidden  gap-4 bg-neutral-50 dark:bg-white/20 rounded-lg shadow-md`}>
                                {/* <div className="group-hover:flex justify-center hidden inset-0 text-5xl absolute bg-slate-100">
                                    <button className="fa-solid fa-pen-to-square text-blue-600"></button>
                                </div> */}
                                <div className="flex items-center w-full gap-4 p-4">
                                    <ProfilePhoto className="w-10 sm:w-20" url={user.photo} name={user.name} />
                                    <div className="grid overflow-clip">
                                        <h2 title={user.lastName.toUpperCase() + ", " + user.name} className="flex font-bold max-w-[10rem] pr-5 whitespace-nowrap overflow-hidden">
                                            {user.lastName.toUpperCase() + ", " + user.name}
                                        </h2>
                                        <p title={user.country} className="font-light">
                                            {user.country}
                                        </p>
                                        <a title={user.mail} className="text-sm font-medium" href={"mailto:" + user.mail}>
                                            {user.mail}
                                        </a>
                                    </div>
                                </div>

                                <div className="absolute flex inset-y-0 right-0 text-xl text-blue-500 gap-4 p-4">
                                    {loggedInUser?.mail == user.mail && isLoggedIn ? (
                                        <button onClick={() => dispatch(auth(null))} title="Login" className="fa-solid fa-user-minus text-red-400"></button>
                                    ) : (
                                        <button
                                            onClick={() => {
                                                dispatch(auth(user)), dispatch(readLikes(user._id));
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

// <div class="min-h-screen flex bg-black">
//   <div class="m-auto grid w-fit rounded-lg bg-gradient-to-tl from-blue-600 to-blue-500/80 border-2 border-blue-600 p-4 text-neutral-200 shadow-lg duration-500 hover:translate-x-[-100%]">
//     <h2 class="text-lg font-bold">Successful Login!</h2>
//     <p class="">Welcome back, [Username]! You're in.</p>
//   </div>
// </div>
