import { useEffect, useRef, useState } from "react";
import Activity from "./ActivityCard.jsx";
import { useDispatch, useSelector } from "react-redux";
import readActivities from "../store/actions/activitiesActions.js";
import { toggleLike, createItineraryComment } from "../store/actions/itinerariesActions.js";
import NoResultsMessage from "./NoResultsMessage.jsx";
import ProfilePhoto from "./ProfilePhoto.jsx";
import Button from "./Button.jsx";
import Comment from "./Comment.jsx";

export default function Itinerary({ itineraryData }) {
    const [showDetails, setShowDetails] = useState(false);
    const activities = useSelector((store) => store.activities[itineraryData._id]);
    const loggedInUser = useSelector((store) => store.auth.user);
    const dispatch = useDispatch();
    const newCommentRef = useRef(null);

    useEffect(() => {
        dispatch(readActivities(itineraryData._id));
    }, []);

    const foundLikeId = itineraryData.likes.find((like) => like.user_id._id === loggedInUser?._id)?._id || null;
    function handlerLike() {
        loggedInUser && dispatch(toggleLike({ _id: foundLikeId, user_id: loggedInUser._id, itinerary_id: itineraryData._id }));
    }
    function submitComment(e) {
        e.preventDefault();
        const newComment = { content: newCommentRef.current.value, user_id: loggedInUser._id, itinerary_id: itineraryData._id };
        newComment.content && dispatch(createItineraryComment(newComment));
        newCommentRef.current.value = "";
    }
    return (
        <>
            <div className="relative overflow-hidden w-[min(100%,34rem)] border bg-slate-50 dark:bg-black dark:border dark:border-slate-700 rounded-lg shadow-xl">
                <div className="absolute left-0 top-0 px-4 py-2 rounded-lg text-2xl gap-2 text-neutral-100 flex bg-neutral-600/50 m-4">
                    <button onClick={handlerLike} className={` drop-shadow-sm fa-heart active:animate-ping ${!loggedInUser ? "fa-solid" : foundLikeId ? "fa-solid text-red-600" : "fa-regular"}`}></button>
                    <div className="text-lg leading-none text-center">{itineraryData.likes.length}</div>
                </div>
                <img className="w-full aspect-video object-cover" src={itineraryData.photo} alt={`Photo of ${itineraryData.name}`} />
                <div className="flex p-4 pb-0 gap-4">
                    <div className="flex flex-col items-center min-w-[5rem]">
                        <ProfilePhoto className="w-14 sm:w-20" url={itineraryData.creator.photo} name={itineraryData.creator.name} />
                        <p className="text-xs font-light mt-1">Created by</p>
                        <p className="leading-3 font-bold text-center">{itineraryData.creator.name}</p>
                    </div>
                    <div className="grid w-full">
                        <h1 className="text-rigth text-lg font-bold rounded-lg">{itineraryData.name.toUpperCase()}</h1>
                        <div className="flex flex-wrap justify-between w-full text-lg font-medium">
                            <p title="Price">
                                <i className="fa-solid fa-money-bill-wave"></i> ${itineraryData.price}
                            </p>
                            <p title="Duration">
                                <i className="fa-regular fa-clock"></i> {(itineraryData.duration / 60).toFixed(2).replace(".00", "")} h
                            </p>
                        </div>
                        <div title="Hashtags" className="flex flex-wrap items-start gap-2 mt-4">
                            {itineraryData.tags.map((tag, i) => (
                                <p key={i} className="rounded-full text-sm bg-blue-700 dark:bg-transparent border-4 shadow-md dark:shadow-blue-500 border-blue-700 text-neutral-100 px-3 leading-6">
                                    {tag}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <button onClick={() => setShowDetails(!showDetails)} className={`${showDetails ? "fa-angle-up" : "fa-angle-down"} fa-solid text-4xl text-neutral-500 drop-shadow-lg active:animate-ping mt-4`}></button>
                    <div className={`flex flex-col gap-4 ${showDetails ? "max-h-full" : "max-h-0"}`}>
                        <h2 className="text-center text-lg font-bold">ACTIVITIES</h2>
                        <section className="flex items-center justify-start overflow-x-auto gap-8 px-4 pb-4">
                            {!activities && <NoResultsMessage title="No Activities Yet" text="Currently, there are no activities available for this itineray. Check back later for updates!" />}
                            {activities?.map((acitivity) => (
                                <Activity key={acitivity._id} activityData={acitivity} />
                            ))}
                        </section>

                        <h2 className="text-center text-lg font-bold dark:text-neutral-300">COMMENTS</h2>
                        <section className=" border border-slate-300 dark:border-slate-700 mx-4 mb-4 bg-slate-50 dark:bg-black p-2 xs:p-4 rounded-lg">
                            <div className="my-auto space-y-4">
                                <div className="flex items-start gap-4">
                                    <ProfilePhoto className={`${loggedInUser && "border-2 border-blue-600 brightness-125"} w-10 `} url={loggedInUser ? loggedInUser.photo : "https://pbs.twimg.com/media/EvumtCWXEBE0CdF.jpg"} name="Snoopy" />
                                    <form className="grid w-full gap-2">
                                        <textarea disabled={!loggedInUser} ref={newCommentRef} onChange={(e) => ((e.target.style.height = "auto"), (e.target.style.height = e.target.scrollHeight + "px"))} name="newComment" id="newComment" placeholder="Share your city adventure..."></textarea>
                                        <button type="submit" disabled={!loggedInUser} onClick={loggedInUser && submitComment} className="bg-blue-600 disabled:bg-neutral-500 disabled:hover:scale-100 text-neutral-200 justify-self-end w-fit px-8 py-2 rounded-lg fa-solid fa-paper-plane hover:scale-125 duration-150"></button>
                                    </form>
                                </div>
                                {[...itineraryData.comments]
                                    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                                    .map((comment) => (
                                        <Comment key={comment._id} comment={comment} comments={itineraryData.comments} />
                                    ))}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
}
