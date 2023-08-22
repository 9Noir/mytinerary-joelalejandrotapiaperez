import axios from "axios";
import { useEffect, useState } from "react";
import apiUrl from "../apiUrl.js";
import Activity from "./activity.jsx";
import NoResultsMessage from "./NoResultsMessage.jsx";

export default function Itinerary({ city_id, user }) {
    const [data, setData] = useState([]);
    const [showDetails, setShowDetails] = useState(false);

    useEffect(() => {
        axios(apiUrl + "/itineraries?city_id=" + city_id)
            .then((res) => setData(res.data.response))
            .catch((err) => console.log("Error fetching data: " + err));
    }, []);

    function toggleVisibility(event) {
        setShowDetails(!showDetails);
        event.target.classList.toggle("fa-angle-down");
        event.target.classList.toggle("fa-angle-up");
    }

    return (
        <>
            {data.length > 0 && user ? (
                data.map((each) => (
                    <div key={each._id} className=" flex flex-col max-w-[40rem] gap-4 m-auto bg-slate-100  rounded-lg shadow-md p-4">
                        <h1 className="text-center text-2xl font-semibold">{each.name}</h1>
                        <img className="w-full h-80 object-cover top-0 left-0 rounded-sm" src={each.photo} alt={`Photo of ${each.name}`} />
                        <div className="flex justify-between text-2xl text-slate-500 py-4">
                            <button className="fa-regular fa-heart active:animate-ping"></button>
                            <button onClick={toggleVisibility} className="fa-solid fa-angle-down active:animate-ping"></button>
                        </div>
                        {/* {showDetails && (
                            <>
                                <div className="flex flex-wrap gap-4 justify-between text-center">
                                    <div className="itinerary-details">
                                        <h2>User:</h2>
                                        <img className="h-20 w-20 object-cover rounded-full shadow-md" src={user.photo} alt={`Photo of ${user.name}`} />
                                        <p>{user.name}</p>
                                    </div>
                                    <div className="itinerary-details">
                                        <h2>Hashtags:</h2>
                                        <div className="flex flex-col gap-1 items-center">
                                            {each.tags.map((tag, i) => (
                                                <p key={i} className="border border-slate-400/50 text-slate-500 rounded-md bg-slate-200/70 w-fit px-1">
                                                    {tag}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="itinerary-details">
                                        <h2>Duration:</h2>
                                        <p>{(each.duration / 60).toFixed(2).replace(".00", "")} h</p>
                                    </div>
                                    <div className="itinerary-details">
                                        <h2>Price:</h2>
                                        <p>{each.price} usd</p>
                                    </div>
                                </div>
                                <section className="flex pb-6 gap-4 text-center overflow-x-auto w-full overflow-auto">
                                    <Activity itinerary_id={each._id} />
                                </section>
                            </>
                        )} */}
                    </div>
                ))
            ) : (
                <NoResultsMessage icon="fa-solid fa-mountain-city" title="No Itineraries Yet" text={"Currently, there are no itineraries available for this city. Check back later for updates!"} />
            )}
        </>
    );
}
