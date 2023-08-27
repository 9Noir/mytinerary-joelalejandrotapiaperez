import { useEffect, useState } from "react";
import Activity from "./ActivityCard.jsx";
import { useDispatch, useSelector } from "react-redux";
import readActivities from "../store/actions/activitiesActions.js";

export default function Itinerary({ itineraryData, user }) {
    const [showDetails, setShowDetails] = useState(false);
    const activities = useSelector((store) => store.activities.activities);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(readActivities(itineraryData._id));
    }, []);

    return (
        <>
            <div key={itineraryData._id} className=" flex flex-col max-w-[40rem] gap-4 m-auto bg-slate-100  rounded-lg shadow-md p-4">
                <h1 className="text-center text-2xl font-semibold">{itineraryData.name}</h1>
                <img className="w-full h-80 object-cover top-0 left-0 rounded-sm" src={itineraryData.photo} alt={`Photo of ${itineraryData.name}`} />
                <div className=" flex justify-between text-2xl text-slate-500 py-4">
                    <button className="fa-regular fa-heart active:animate-ping"></button>
                    <button onClick={() => setShowDetails(!showDetails)} className={`${showDetails ? "fa-angle-up" : "fa-angle-down"} fa-solid fa-angle-down active:animate-ping`}></button>
                </div>
                <div className={`flex flex-col transition-all duration-700 ease-in-out overflow-hidden ${showDetails ? "max-h-screen" : "max-h-0"}`}>
                    <div className="flex flex-wrap gap-4 justify-between text-center">
                        <div className="itinerary-details">
                            <h2>User:</h2>
                            <img className="h-20 w-20 object-cover rounded-full shadow-md" src={user.photo} alt={`Photo of ${user.name}`} />
                            <p>{user.name}</p>
                        </div>
                        <div className="itinerary-details">
                            <h2>Hashtags:</h2>
                            <div className="flex flex-col gap-1 items-center">
                                {itineraryData.tags.map((tag, i) => (
                                    <p key={i} className="border border-slate-400/50 text-slate-500 rounded-md bg-slate-200/70 w-fit px-1">
                                        {tag}
                                    </p>
                                ))}
                            </div>
                        </div>
                        <div className="itinerary-details">
                            <h2>Duration:</h2>
                            <p>{(itineraryData.duration / 60).toFixed(2).replace(".00", "")} h</p>
                        </div>
                        <div className="itinerary-details">
                            <h2>Price:</h2>
                            <p>{itineraryData.price} usd</p>
                        </div>
                    </div>
                    <section className="flex items-center justify-start overflow-x-auto">
                        {activities?.map((each, i) => (
                            <Activity key={i} activityData={each} />
                        ))}
                    </section>
                </div>
            </div>
        </>
    );
}
