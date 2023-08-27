import { useEffect, useState } from "react";
import CityCard from "./CityCard";
import { useDispatch, useSelector } from "react-redux";
import { readCities } from "../store/actions/citiesActions";

export default function Carousel() {
    const [index, setIndex] = useState(0);
    const data = useSelector((store) => store.cities.cities);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!data) {
            dispatch(readCities());
        }
    }, []);

    useEffect(() => {
        const intervalId = setTimeout(() => {
            fordward();
        }, 4000);

        return () => {
            clearTimeout(intervalId);
        };
    });

    function previous() {
        setIndex(index === 0 ? 6 : index - 3);
    }
    function fordward() {
        setIndex(index === 6 ? 0 : index + 3);
    }
    function dotClickHandler(index) {
        setIndex(index);
    }

    return (
        <div className="flex flex-col md:w-2/3 min-h-[12rem] grow justify-between items-center relative gap-6 bg-slate-900 p-4 rounded-xl shadow-xl">
            <h1 className="font-bold text-3xl text-slate-100">Popular Tineraries</h1>
            <div className="flex w-full justify-center items-center relative">
                <div className="w-full sm:w-10/12 h-full grid sm:grid-cols-2 gap-8">{data && data.slice(index, index + 4).map((each, i) => <CityCard key={i} id={each._id} className="h-48" src={each.photo} city={each.city} country={each.country} />)}</div>
                <div className="absolute w-full justify-between flex hover:[&>*]:bg-white/50 [&>*]:px-4 [&>*]:py-2 [&>*]:rounded-full text-slate-100  text-5xl">
                    <button onClick={previous} className="fa-solid fa-chevron-left active:animate-ping"></button>
                    <button onClick={fordward} className="fa-solid fa-chevron-right active:animate-ping"></button>
                </div>
            </div>
            <div className="text-5xl text-gray-500 gap-1 flex">
                <button onClick={() => dotClickHandler(0)} className={`fa-solid fa-minus ${index === 0 && "text-gray-100"}`}></button>
                <button onClick={() => dotClickHandler(3)} className={`fa-solid fa-minus ${index === 3 && "text-gray-100"}`}></button>
                <button onClick={() => dotClickHandler(6)} className={`fa-solid fa-minus ${index === 6 && "text-gray-100"}`}></button>
            </div>
        </div>
    );
}
