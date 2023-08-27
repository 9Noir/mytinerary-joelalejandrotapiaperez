import CityCard from "../components/CityCard";
import { useEffect, useState } from "react";
import BgImg from "../components/BgImg";
import NoResultsMessage from "../components/NoResultsMessage";
import { useDispatch, useSelector } from "react-redux";
import { readCities, readCity } from "../store/actions/citiesActions";

export default function Cities() {
    const data = useSelector((store) => store.cities.cities);
    const dispatch = useDispatch();
    let filterQuery = "";
    let sortQuery = "&sort=city&order=ASC";

    useEffect(() => {
        dispatch(readCities(filterQuery + sortQuery));
    }, []);

    function filter(event) {
        filterQuery = "city=" + event.target.value.trim();
        dispatch(readCities(filterQuery + sortQuery));
    }
    function sort(event) {
        sortQuery = event.target.classList.contains("fa-arrow-down-z-a") ? "&sort=city&order=DESC" : "&sort=city&order=ASC";
        event.target.classList.toggle("fa-arrow-down-z-a");
        event.target.classList.toggle("fa-arrow-up-a-z");
        dispatch(readCities(filterQuery + sortQuery));
    }

    console.log("FILTER:" + Boolean(filterQuery) + "- DATA:" + Boolean(data));
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
                <section className=" flex justify-center  items-center">
                    <input type="search" className="outline-none focus:ring-blue-600 ring-2 ring-transparent max-w-xs w-full px-6 py-4 rounded-lg shadow-md" onChange={filter} placeholder="🔍︎ Search your city" />
                    <button onClick={sort} className="fa-solid fa-arrow-down-z-a text-3xl text-slate-500 pl-1 active:animate-ping"></button>
                </section>

                {!data && filterQuery ? (
                    <NoResultsMessage title={"No Results Found"} text={"We couldn't find any cities with the provided name."} />
                ) : (
                    <section className="flex flex-wrap gap-8 justify-center ">
                        {data?.map((each) => (
                            <CityCard key={each._id} id={each._id} className="w-96 h-60" src={each.photo} city={each.city} country={each.country} />
                        ))}
                    </section>
                )}
            </main>
        </>
    );
}
