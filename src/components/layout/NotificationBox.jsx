import { useSelector } from "react-redux";
import ProfilePhoto from "../ProfilePhoto";
import notificationMessages from "./notificationMessages";

export default function NotificationBox() {
    const messageCode = useSelector((store) => store.auth.response.message);
    const success = useSelector((store) => store.auth.response.success);
    const user = useSelector((store) => store.auth.user);
    const key = useSelector((store) => store.auth.response.key);
    const messageContent = notificationMessages(messageCode,user);
    if (!messageCode) return <></>;
    return (
        // Agregando key obligo a volver a usar el animate ya que cambia el key con message
        <div key={key} className={`${!success && "from-red-700 to-red-500"} animate-moveAndReturn p-4 fixed right-0 translate-x-[100%] top-[20vh] max-w-xs !z-50 flex items-center gap-4 overflow-hidden rounded-l-lg bg-gradient-to-tl from-blue-700 to-blue-500 text-neutral-200 shadow-xl duration-500`}>
            {user && <ProfilePhoto className="w-14" url={user.photo} name={user.name} />}
            <div className="">
                <h2 className="text-xl font-bold">{messageContent.title}</h2>
                <p>{messageContent.paragraph}</p>
                {/* <h2 className="text-2xl font-bold">Successful Login!</h2>
                <p className="text-lg">
                    Welcome back, <span className="font-bold">{user.name}</span>! You're in.
                </p> */}
            </div>
            <div className={`animate-decrease bg-neutral-300 h-2 w-0 absolute bottom-0 right-0`}></div>
        </div>
    );
}
