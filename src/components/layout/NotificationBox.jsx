import { useSelector } from "react-redux";
import ProfilePhoto from "../ProfilePhoto";
import notificationMessages from "./notificationMessages";
import { hiddenMessagesCodes } from "./notificationMessages";

export default function NotificationBox() {
    const messageCode = useSelector((store) => store.auth.response.message);
    const success = useSelector((store) => store.auth.response.success);
    const user = useSelector((store) => store.auth.user);
    const key = useSelector((store) => store.auth.response.key);

    const messageContent = notificationMessages(messageCode, user);
    if (!messageCode || hiddenMessagesCodes.includes(messageCode)) return <></>;
    return (
        // Agregando key obligo a volver a usar el animate ya que cambia el key con message
        <div key={key} className={`${!success && "from-red-700 to-red-500"} animate-moveAndReturn p-4 fixed right-0 translate-x-[100%] top-[20vh] max-w-sm !z-50 flex items-center gap-4 overflow-hidden rounded-l-lg bg-gradient-to-tl from-blue-700 to-blue-500 text-neutral-200 shadow-xl duration-500`}>
            {user && <ProfilePhoto className="w-14" url={user.photo} name={user.name} />}
            <div className="">
                <h2 className="text-xl font-bold">{messageContent.title}</h2>
                <p>{messageContent.paragraph}</p>
            </div>
            <div className={`animate-decrease bg-neutral-300 h-2 w-0 absolute bottom-0 right-0`}></div>
        </div>
    );
}
