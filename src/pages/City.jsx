import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../components/Button";
import Itinerary from "../components/ItineraryCard";
import BgImg from "../components/BgImg";
import { useDispatch, useSelector } from "react-redux";
import { readCity } from "../store/actions/citiesActions";
import readItineraries from "../store/actions/itinerariesActions";
import NoResultsMessage from "../components/NoResultsMessage";
import Loading from "../components/Loading";
import FeatureCard from "../components/FeatureCard";

export default function City() {
    const { city_id } = useParams();
    const city = useSelector((store) => store.cities.city);
    const itineraries = useSelector((store) => store.itineraries.itineraries);
    const itineraryRef = useRef(null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(readCity(city_id));
        dispatch(readItineraries(city_id));
    }, []);

    function scrollToItinerary() {
        itineraryRef.current.scrollIntoView({ behavior: "smooth" });
    }

    if (!city) {
        return (
            <div className="absolute !z-50 h-screen w-screen !bg-black">
                <Loading />
            </div>
        );
    }

    return (
        <>
            <BgImg url={city.photo} className={"h-1/2"} />
            <main>
                <section className="flex flex-col gap-4 items-center h-screen">
                    <div className="h-screen flex flex-col justify-center items-center text-neutral-100 text-center max-w-2xl gap-4">
                        <h1 className="text-5xl font-bold">{city.city}</h1>
                        <p className="text-2xl italic font-thin">{city.smallDescription}</p>
                        <Button to={"/cities"} className="bg-white/30 text-xl px-8">
                            Back to cities
                        </Button>
                        <Button className="text-xl px-8" onClick={() => scrollToItinerary()}>
                            View Iterinaries ↓
                        </Button>
                    </div>
                </section>
                <section className="space-y-8 mb-8 text-neutral-500 dark:text-neutral-300">
                    <h1 className="text-center text-3xl font-bold">FEATURES</h1>
                    <div className="flex flex-wrap justify-center gap-4 xs:gap-16">
                        <FeatureCard title={`Currency: ${city.currency.abbreviation}`} src="../img/png/currency.png" className="dark:border-sky-500 dark:shadow-sky-500 from-sky-500/50 via-sky-400 to-sky-200" />
                        <FeatureCard title={`Country: ${city.country}`} src="../img/png/country.png" className="dark:border-purple-500 dark:shadow-violet-500 from-violet-500/60 via-violet-400 to-violet-300" />
                        <FeatureCard title={`Language: ${city.language}`} src="../img/png/language.png" className="dark:border-fuchsia-400 dark:shadow-fuchsia-500 bg-gradient-to-tr from-fuchsia-500/60 via-fuchsia-400 to-fuchsia-300" />
                    </div>

                    <h1 ref={itineraryRef} className="text-center text-3xl font-bold">
                        ITINERARIES
                    </h1>
                    <div className="grid justify-items-center gap-16">
                        {!itineraries && <NoResultsMessage icon="fa-solid fa-mountain-city drop-shadow-xl" title="No Itineraries Yet" text={"Currently, there are no itineraries available for this city. Check back later for updates!"} />}
                        {itineraries?.map((each, i) => (
                            <Itinerary key={i} itineraryData={each} user={city.admin_id} />
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
}
