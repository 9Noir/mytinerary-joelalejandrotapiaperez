import React, { useEffect, useState } from "react";
import Activity from "./ActivityCard.jsx";
import { useDispatch, useSelector } from "react-redux";
import readActivities from "../store/actions/activitiesActions.js";
import NoResultsMessage from "./NoResultsMessage.jsx";
import ProfilePhoto from "./ProfilePhoto.jsx";
import { format } from "date-fns";

export default function Itinerary({ itineraryData, user }) {
    const [showDetails, setShowDetails] = useState(false);
    const [like, setLike] = useState(false);
    const activities = useSelector((store) => store.activities[itineraryData._id]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(readActivities(itineraryData._id));
    }, []);

    // Función para formatear una fecha en un formato específico
    function formatDate(dateString, formatString) {
        const fechaParseada = new Date(dateString);
        return format(fechaParseada, formatString);
    }

    return (
        <>
            <div key={itineraryData._id} className="relative overflow-hidden w-[min(100%,30rem)] border bg-slate-50 dark:bg-black dark:border dark:border-slate-700 rounded-lg shadow-xl">
                <div className="absolute left-0 top-0 p-4 text-neutral-100 font-bold">
                    <button onClick={() => setLike(!like)} className={`text-4xl drop-shadow-sm fa-heart active:animate-ping ${like ? "fa-solid text-red-600" : "fa-regular"}`}></button>
                    <div className="text-center">{itineraryData.likes.length}</div>
                    {/* <div className="flex justify-between gap-4 p-4 bg-gradient-to-b from-black/50">
                        <button onClick={() => setLike(!like)} className={` text-4xl drop-shadow-sm fa-heart active:animate-ping ${like ? "fa-solid" : "fa-regular"}`}></button>
                        <div>{itineraryData.likes.length}</div>
                        <h1 className="text-rigth text-3xl font-bold rounded-lg">{itineraryData.name}</h1>
                    </div>
                    <div className="flex justify-between w-full text-xl font-semibold p-4 bg-gradient-to-t from-black/50">
                        <p>
                            <i className="fa-solid fa-money-bill-wave"></i> {itineraryData.price} usd
                        </p>
                        <p>
                            <i className="fa-regular fa-clock"></i> {(itineraryData.duration / 60).toFixed(2).replace(".00", "")} h
                        </p>
                    </div> */}
                </div>
                <img className="w-full aspect-video object-cover" src={itineraryData.photo} alt={`Photo of ${itineraryData.name}`} />
                <div className="flex p-4 pb-0 gap-4">
                    <div className="flex flex-col items-center min-w-[5rem]">
                        <ProfilePhoto url={itineraryData.creator.photo} name={itineraryData.creator.name} />
                        <p className="text-xs font-light mt-1">Created by</p>
                        <p className="leading-3 font-bold">{itineraryData.creator.name}</p>
                    </div>
                    <div className="grid w-full">
                        <h1 className="text-rigth p-0 m-0 text-lg font-bold rounded-lg">{itineraryData.name.toUpperCase()}</h1>
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
                                <p key={i} className="rounded-full bg-blue-700 text-neutral-100 px-3 py-1">
                                    {tag}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <button onClick={() => setShowDetails(!showDetails)} className={`${showDetails ? "fa-angle-up" : "fa-angle-down"} animate-bounce fa-solid text-4xl text-neutral-500 active:animate-ping mt-4`}></button>
                    <div className={`flex flex-col gap-4 transition-all duration-300 ease-in-out overflow-hidden ${showDetails ? "max-h-screen" : "max-h-0"}`}>
                        <h2 className="text-center text-lg font-bold">ACTIVITIES</h2>
                        <section className="flex items-center justify-start overflow-x-auto gap-8 px-4 pb-4">
                            {!activities && <NoResultsMessage title="No Activities Yet" text="Currently, there are no activities available for this itineray. Check back later for updates!" />}
                            {activities?.map((each, i) => (
                                <Activity key={i} activityData={each} />
                            ))}
                        </section>

                        {/* <h2 className="text-center text-lg font-bold  dark:text-neutral-300">COMMENTS</h2> */}
                        <h2 className="text-center text-lg font-bold dark:text-neutral-300">COMMENTS</h2>
                        <section className="border border-slate-300 dark:border-slate-700 mx-4 mb-4 bg-slate-50 dark:bg-black p-2 xs:p-4 rounded-b-lg">
                            <div className="mt-4 space-y-4">
                                {/* <div className="flex items-start gap-4">
                                    <ProfilePhoto size="3rem" url="https://i.pinimg.com/736x/ae/97/a4/ae97a427d1c25d59f514c204c64df00c.jpg" name="Snoopy" />
                                    <div>
                                        <h3 className="font-bold">
                                            Snoopy <span className="font-normal">- 25min ago</span>
                                        </h3>
                                        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora eius, beatae ipsam quia tempore, quidem vero dolores iure suscipit quis culpa exercitationem repudiandae, reprehenderit placeat incidunt. Harum quis natus praesentium.</p>
                                    </div>
                                </div> */}
                                {[...itineraryData.comments]
                                    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                                    .map((comment, i) => (
                                        <div key={i} className="flex items-start gap-2 xs:gap-4">
                                            <ProfilePhoto className={"w-8 xs:w-10"} url={comment.user.photo} name="Snoopy" />
                                            <div>
                                                <h3 className="font-bold">
                                                    {comment.user.name} <span className="text-xs  dark:text-neutral-400 font-extralight"> {formatDate(comment.createdAt, "dd-MM-yyyy")} </span>
                                                </h3>
                                                <p className="text-sm">{comment.content}</p>
                                            </div>
                                        </div>
                                    ))}
                                <div className="flex items-center gap-4">
                                    <ProfilePhoto className="w-8 ml-3" size="2rem" url="https://pbs.twimg.com/media/EvumtCWXEBE0CdF.jpg" name="Snoopy" />
                                    {/* <textarea className="w-full outline-none focus:ring-blue-600 ring-2 ring-transparent px-4 py-2 rounded-lg shadow-md"></textarea> */}
                                    <input type="text" className="w-full outline-none bg-slate-200/60 dark:bg-slate-700 focus:ring-blue-600 ring-2 ring-transparent px-4 py-2 rounded-lg shadow-md" placeholder="" />
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
}
