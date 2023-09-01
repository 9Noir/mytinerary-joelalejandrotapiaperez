import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { readUsers } from "../store/actions/usersActions";
import ProfilePhoto from "../components/ProfilePhoto";

export default function Users() {
    const dispatch = useDispatch();
    const users = useSelector((store) => store.users.all);

    useEffect(() => {
        dispatch(readUsers());
    }, []);

    return (
        <>
            <div className="w-full h-[5.5rem] bg-slate-600 shadow-lg"></div>
            <main className="max-w-full flex-row items-start dark:text-neutral-300">
                <div className="flex flex-wrap justify-center gap-4 overflow-hidden py-8">
                    {users &&
                        users.map((user, id) => (
                            <div key={id} className="w-80 hover:scale-105 duration-200 group relative border overflow-hidden border-blue-600 gap-4 bg-neutral-50 dark:bg-white/20 rounded-lg shadow-md">
                                {/* <div className="group-hover:flex justify-center hidden inset-0 text-5xl absolute bg-slate-100">
                                    <button className="fa-solid fa-pen-to-square text-blue-600"></button>
                                </div> */}
                                <div className="flex w-full gap-4 p-4">
                                    <ProfilePhoto url={user.photo} name={user.name} />
                                    <div className="grid w-full overflow-clip">
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
                                    <button className="fa-solid fa-user-minus"></button>
                                    <button className="fa-solid fa-pen-to-square"></button>
                                </div>
                            </div>
                        ))}
                </div>
            </main>
        </>
    );
}
