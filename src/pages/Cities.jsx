import CityCard from "../components/CityCard";
import { useEffect, useState } from "react";
import BgImg from "../components/BgImg";
import NoResultsMessage from "../components/NoResultsMessage";
import { useDispatch, useSelector } from "react-redux";
import { readCities } from "../store/actions/citiesActions";

export default function Cities() {
    const data = useSelector((store) => store.cities.cities);
    const dispatch = useDispatch();
    const [searchType, setSearchType] = useState("city");
    let filterQuery = "";
    let sortQuery = "&sort=" + searchType + "&order=ASC";

    useEffect(() => {
        dispatch(readCities(filterQuery + sortQuery));
    }, []);

    function filter(event) {
        filterQuery = searchType + "=" + event.target.value.trim();
        dispatch(readCities(filterQuery + sortQuery));
    }
    function sort(event) {
        sortQuery = event.target.classList.contains("fa-arrow-down-a-z") ? "&sort=" + searchType + "&order=DESC" : "&sort=" + searchType + "&order=ASC";
        event.target.classList.toggle("fa-arrow-down-z-a");
        event.target.classList.toggle("fa-arrow-down-a-z");
        dispatch(readCities(filterQuery + sortQuery));
    }

    return (
        <>
            <BgImg url={"./img/cities.jpg"} className={"!h-1/2"} />
            <main className="max-w-full">
                <section className="h-[50vh] flex flex-col justify-center  text-center text-neutral-100">
                    <div className="max-w-[1291px] m-auto">
                        <h1 className="text-4xl font-bold mb-4">Cities</h1>
                        <p className=" text-2xl max-w-sm">Collection of the most beautiful places and experience</p>
                    </div>
                </section>
                <section className="flex justify-center  items-center">
                    <div className="w-96 flex overflow-hidden rounded-lg shadow-md">
                        <input onChange={filter} type="search" className="p-4 pr-1 rounded-none bg-white" placeholder={"🔍︎ Search your " + searchType} />
                        <button onClick={() => setSearchType(searchType == "city" ? "country" : "city")} className={`text-xl text-blue-500 dark:bg-slate-600 dark:text-neutral-300 px-3 bg-white active:animate-ping shadow-md fa-solid ${searchType == "city" ? "fa-city" : "fa-earth-americas"}`}></button>
                        <button onClick={sort} className="fa-solid fa-arrow-down-a-z text-3xl bg-blue-700 text-neutral-200 px-2 active:animate-ping"></button>
                    </div>
                </section>

                {!data ? (
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
