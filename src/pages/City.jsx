import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Button from "../components/Button";
import Itinerary from "../components/Itinerary";
import BgImg from "../components/BgImg";

export default function City() {
    const { city_id } = useParams();
    const [data, setData] = useState({});
    const itineraryRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        axios("http://localhost:8000/api/cities/" + city_id)
            .then((res) => setData(res.data.response))
            .catch((err) => console.log(err));
    }, []);

    function scrollToItinerary() {
        itineraryRef.current.scrollIntoView({ behavior: "smooth" });
    }
    
    return (
        <>
            <BgImg url={data.photo} className={"h-1/2"} />
            <main className="">
                <section className="flex flex-col gap-4 items-center h-screen">
                    <div className="h-screen flex flex-col justify-center items-center text-slate-100 text-center max-w-2xl gap-4">
                        <h1 className="text-5xl font-bold">{data.city}</h1>
                        <p className="text-2xl italic font-thin">{data.smallDescription}</p>
                        <Button to={"/cities"} className="bg-white/30 text-xl px-8">
                            Back to cities
                        </Button>
                        <Button className="text-xl px-8" onClick={scrollToItinerary}>
                            View Iterinaries ↓
                        </Button>
                    </div>
                </section>
                <section ref={itineraryRef} className="space-y-8">
                    <Itinerary city_id={city_id} user={data.admin_id} />
                </section>
            </main>
        </>
    );
}
