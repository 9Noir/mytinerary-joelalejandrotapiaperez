import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../components/Button";
import Itinerary from "../components/ItineraryCard";
import BgImg from "../components/BgImg";
import { useDispatch, useSelector } from "react-redux";
import { readCity } from "../store/actions/citiesActions";
import readItineraries from "../store/actions/itinerariesActions";
import NoResultsMessage from "../components/NoResultsMessage";


export default function City() {
    const { city_id } = useParams();
    const city = useSelector((store) => store.cities.city);
    const itineraries = useSelector((store) => store.itineraries.itineraries);
    const itineraryRef = useRef(null);
    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(readCity(city_id));
        dispatch(readItineraries(city_id));
    }, []);

    function scrollToItinerary() {
        itineraryRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (!city) return <></>;

    return (
        <>
            <BgImg url={city.photo} className={"h-1/2"} />
            <main className="">
                <section className="flex flex-col gap-4 items-center h-screen">
                    <div className="h-screen flex flex-col justify-center items-center text-slate-100 text-center max-w-2xl gap-4">
                        <h1 className="text-5xl font-bold">{city.city}</h1>
                        <p className="text-2xl italic font-thin">{city.smallDescription}</p>
                        <Button to={"/cities"} className="bg-white/30 text-xl px-8">
                            Back to cities
                        </Button>
                        <Button className="text-xl px-8" onClick={scrollToItinerary}>
                            View Iterinaries ↓
                        </Button>
                    </div>
                </section>
                <section ref={itineraryRef} className="space-y-8">
                    <h1 className="text-center text-3xl font-bold text-slate-600">ITINERARIES</h1>
                    {!itineraries && <NoResultsMessage icon="fa-solid fa-mountain-city drop-shadow-xl" title="No Itineraries Yet" text={"Currently, there are no itineraries available for this city. Check back later for updates!"} />}
                    {itineraries?.map((each,i) => (
                        <Itinerary key={i} itineraryData={each} user={city.admin_id} />
                    ))}
                </section>
            </main>
        </>
    );
}
