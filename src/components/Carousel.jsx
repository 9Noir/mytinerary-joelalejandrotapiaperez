import { useEffect, useState } from "react";
import CityCard from "./CityCard";
import axios from "axios";
import apiUrl from "../apiUrl.js"

export default function Carousel() {
    const [data, setData] = useState([]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        axios(apiUrl+"/cities")
            .then((res) => setData(res.data.response))
            .catch((err) => console.log(err));
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
        <div className="flex flex-col md:w-2/3 min-h-[12rem] grow justify-between items-center relative gap-6">
            <h1 className="font-bold text-2xl">Popular MYTINERARIES!</h1>

            <div className="flex w-full justify-center items-center relative">
                <div className="w-full sm:w-10/12 h-full grid sm:grid-cols-2 gap-8">
                    {data.slice(index, index + 4).map((each) => (
                        <CityCard key={data.indexOf(each)} id={each._id} className="h-48" src={each.photo} city={each.city} country={each.country} />
                    ))}
                </div>
                <div className="absolute w-full justify-between flex hover:[&>*]:bg-white/50 [&>*]:px-4 [&>*]:py-2 [&>*]:rounded-full text-gray-500 text-5xl">
                    <button onClick={previous} className="fa-solid fa-chevron-left active:animate-ping"></button>
                    <button onClick={fordward} className="fa-solid fa-chevron-right active:animate-ping"></button>
                </div>
            </div>
            <div className="text-5xl text-gray-400 gap-1 flex">
                <button onClick={() => dotClickHandler(0)} className={`fa-solid fa-minus ${index === 0 && "text-gray-500"}`}></button>
                <button onClick={() => dotClickHandler(3)} className={`fa-solid fa-minus ${index === 3 && "text-gray-500"}`}></button>
                <button onClick={() => dotClickHandler(6)} className={`fa-solid fa-minus ${index === 6 && "text-gray-500"}`}></button>
            </div>
        </div>
    );
}
