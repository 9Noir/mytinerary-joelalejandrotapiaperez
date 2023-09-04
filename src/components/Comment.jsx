import { useDispatch, useSelector } from "react-redux";
import ProfilePhoto from "./ProfilePhoto";
import { useRef, useState } from "react";
import { deleteItineraryComment, updateItineraryComment } from "../store/actions/itinerariesActions";

export default function Comment({ comment, comments }) {
    const loggedInUser = useSelector((store) => store.auth.user);
    const dispatch = useDispatch();
    const [showEdit, setShowEdit] = useState(false);
    const newCommentRef = useRef(null);
    function formatDate(dateString) {
        const [_, month, day, year] = new Date(dateString).toDateString().split(" ");
        return day + " " + month + " " + year;
    }
    return (
        <div className="flex items-center gap-2 xs:gap-4">
            <ProfilePhoto className={"w-8 xs:w-10"} url={comment.user_id.photo} name={comment.user_id.name} />
            <div className="grid w-full relative">
                <h3 className="font-bold">
                    {comment.user_id.name} <span className="text-xs dark:text-neutral-400 font-normal lowercase"> - {formatDate(comment.createdAt)} </span>
                </h3>
                <div className={`absolute -top-2 space-x-4 text-2xl right-0 ${comment.user_id._id == loggedInUser?._id || "hidden"}`}>
                    <button className={`${!showEdit && "hidden"} fa-regular fa-trash-can hover:scale-125 duration-150`} onClick={() => dispatch(deleteItineraryComment({ commentId: comment._id, itineraryId: comment.itinerary_id }))}></button>
                    <button className={`${showEdit ? "fa-xmark" : "fa-pen-to-square"} fa-solid  hover:scale-125 duration-150`} onClick={() => setShowEdit(!showEdit)}></button>
                </div>

                {showEdit ? (
                    // <textarea placeholder="Share your city adventure..." name="" id="" className="flex bg-slate-700 outline-none p-2 focus:border-blue-600 focus:border-2 border-neutral-500 rounded-lg flex-grow text-white">
                    <div className="relative">
                        <textarea ref={newCommentRef} placeholder="Share your city adventure..." name="" id="" value={comment.content}></textarea>
                        <button onClick={() => dispatch(updateItineraryComment({ comment: comment, newContent: { content: newCommentRef.current.value } }), setShowEdit(!showEdit))} className="-inset-y-4 right-2 text-xl absolute fa-solid fa-paper-plane hover:scale-125 duration-150"></button>
                    </div>
                ) : (
                    <p className="text-sm">{comment.content}</p>
                )}
            </div>
        </div>
    );
}
