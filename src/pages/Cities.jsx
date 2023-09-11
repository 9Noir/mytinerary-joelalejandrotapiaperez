import CityCard from "../components/CityCard";
import { useEffect, useState } from "react";
import BgImg from "../components/BgImg";
import NoResultsMessage from "../components/NoResultsMessage";
import { useDispatch, useSelector } from "react-redux";
import { readCities } from "../store/actions/citiesActions";

export default function Cities() {
    const dispatch = useDispatch();
    const data = useSelector((store) => store.cities.cities);
    const [query, setQuery] = useState({
        filter: "",
        type: "city",
        order: "ASC",
        shouldReadCities: true,
    });

    if (query.shouldReadCities) {
        dispatch(readCities(`${query.type}=${query.filter}&sort=${query.type}&order=${query.order}`));
        setQuery((prevQuery) => ({ ...prevQuery, shouldReadCities: false }));
    }

    const handleFilterChange = (event) => {
        setQuery((prevQuery) => ({ ...prevQuery, filter: event.target.value.trim(), shouldReadCities: true }));
    };

    const handleSort = () => {
        setQuery((prevQuery) => ({ ...prevQuery, order: query.order === "ASC" ? "DESC" : "ASC", shouldReadCities: true }));
    };
    
    return (
        <>
            <BgImg url={"./img/cities.jpg"} className={"!h-1/2"} />
            <section className="h-[50vh] flex flex-col justify-center  text-center text-neutral-100">
                <div className="max-w-[1291px] m-auto">
                    <h1 className="text-4xl font-bold mb-4">Cities</h1>
                    <p className=" text-2xl max-w-sm">Collection of the most beautiful places and experience</p>
                </div>
            </section>
            <main className="max-w-full">
                <section className="flex justify-center  items-center">
                    <div className="w-96 flex overflow-hidden rounded-lg shadow-md">
                        <input onChange={handleFilterChange} type="search" className="p-4 pr-1 rounded-none bg-white" placeholder={"🔍︎ Search your " + query.type} />
                        <button
                            onClick={() =>
                                setQuery((prevQuery) => ({
                                    ...prevQuery,
                                    type: query.type == "city" ? "country" : "city",
                                    shouldReadCities: true,
                                }))
                            }
                            className={`text-xl text-blue-500 dark:bg-slate-600 dark:text-neutral-300 px-3 bg-white active:animate-ping shadow-md fa-solid ${query.type == "city" ? "fa-city" : "fa-earth-americas"}`}></button>
                        <button onClick={handleSort} className={`${query.order == "ASC" ? "fa-arrow-down-a-z " : "fa-arrow-down-z-a"} fa-solid text-3xl bg-blue-700 text-neutral-200 px-2 active:animate-ping`}></button>
                    </div>
                </section>

                {!data && query.filter ? (
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
