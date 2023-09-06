import { useSelector } from "react-redux";
import ProfilePhoto from "../ProfilePhoto";

export default function NotificationBox() {
    const user = useSelector((store) => store.auth.user);
    if (!user) return <></>;
    return (
        <div className={`${user ? "animate-moveAndReturn" : ""} p-4 fixed right-0 translate-x-[100%] top-[20vh] !z-50 m-auto flex items-center gap-4 w-fit overflow-hidden rounded-lg bg-gradient-to-tl from-blue-600 to-blue-500 border-2 border-blue-600 text-neutral-200 shadow-lg duration-500`}>
            <ProfilePhoto className="w-16" url={user.photo} name={user.name} />
            <div className="">
                <h2 className="text-2xl font-bold">Successful Login!</h2>
                <p className="text-lg">
                    Welcome back, <span className="font-bold">{user.name}</span>! You're in.
                </p>
            </div>
            <div className={`${user ? "animate-decrease" : ""} bg-neutral-300 h-2 w-full absolute bottom-0 right-0`}></div>
        </div>
    );
}
