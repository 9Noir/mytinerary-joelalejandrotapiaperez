import axios from "axios";
import CityCard from "../components/CityCard";
import { useEffect, useState } from "react";
import apiUrl from "../apiUrl.js";
import BgImg from "../components/BgImg";
import NoResultsMessage from "../components/NoResultsMessage";

export default function Cities() {
    const [data, setData] = useState([]);
    const [filterQuery, setFilterQuery] = useState("");
    const [sortQuery, setSortQuery] = useState("&sort=city&order=ASC");

    function filter(event) {
        setFilterQuery("city=" + event.target.value.trim());
    }
    function sort(event) {
        setSortQuery(event.target.classList.contains("fa-arrow-down-z-a") ? "&sort=city&order=DESC" : "&sort=city&order=ASC");
        event.target.classList.toggle("fa-arrow-down-z-a");
        event.target.classList.toggle("fa-arrow-down-a-z");
    }

    useEffect(() => {
        axios(apiUrl + "/cities?" + filterQuery + sortQuery)
            .then((res) => setData(res.data.response))
            .catch((err) => console.log("Error fetching data: " + err));
    }, [filterQuery, sortQuery]);

    return (
        <>
            <BgImg url={"./img/cities.jpg"} className={"!h-1/2"} />
            <main className="max-w-full">
                <section className="h-[50vh] flex flex-col justify-center  text-center text-slate-100">
                    <div className="max-w-[1291px] m-auto">
                        <h1 className="text-4xl font-bold mb-4">Cities</h1>
                        <p className=" text-2xl max-w-sm">Collection of the most beautiful places and experience</p>
                    </div>
                </section>
                <section className=" flex justify-center bg-slate-200 items-center">
                    <input type="search" className="outline-none focus:ring-blue-600 ring-2 ring-transparent max-w-xs w-full px-6 py-4 rounded-lg shadow-md" onChange={filter} placeholder="🔍︎ Search your city" />
                    <button onClick={sort} className="fa-solid fa-arrow-down-z-a text-3xl text-slate-500 pl-1 active:animate-ping"></button>
                </section>

                {filterQuery && data.length == 0 ? (
                    <NoResultsMessage title={"No Results Found"} text={"We couldn't find any cities with the provided name."} />
                ) : (
                    <section className="flex flex-wrap gap-8 justify-center bg-slate-200">
                        {data.map((each) => (
                            <CityCard key={each._id} id={each._id} className="w-96 h-60" src={each.photo} city={each.city} country={each.country} />
                        ))}
                    </section>
                )}
            </main>
        </>
    );
}
