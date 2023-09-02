import ProfilePhoto from "./ProfilePhoto";
import { format } from "date-fns";

export default function Comment({ comment }) {
    // Función para formatear una fecha en un formato específico
    function formatDate(dateString, formatString) {
        const fechaParseada = new Date(dateString);
        return format(fechaParseada, formatString);
    }
    return (
        <div className="flex items-start gap-2 xs:gap-4">
            <ProfilePhoto className={"w-8 xs:w-10"} url={comment.user_id.photo} name={comment.user_id.name} />
            <div>
                <h3 className="font-bold">
                    {comment.user_id.name} <span className="text-xs  dark:text-neutral-400 font-extralight"> {formatDate(comment.createdAt, "dd-MM-yyyy")} </span>
                </h3>
                <p className="text-sm">{comment.content}</p>
            </div>
        </div>
    );
}
