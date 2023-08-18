import axios from "axios";
import CityCard from "../components/CityCard";
import { useEffect, useState } from "react";
import apiUrl from "../apiUrl.js"

export default function Cities() {
    const [data, setData] = useState([]);
    const [query, setQuery] = useState("");
    function filter(event){
        setQuery(event.target.value)
    }

    useEffect(() => {
        axios(apiUrl+"/cities?city="+query)
            .then((res) => setData(res.data.response))
            .catch((err) => console.log(err));
    }, [query]);

    return (
        <>
            <div className="absolute w-full min-h-[50%] bg-cover bg-center bg-[url('./img/cities.jpg')] brightness-50"></div>
            <main className="w-full grow">
                <div className="p-4 h-[50vh] flex flex-col justify-center text-slate-100">
                    <div className="max-w-[1291px] m-auto">
                        <h1 className="text-4xl font-bold text-center mb-4">Cities</h1>
                        <p className=" text-2xl max-w-sm">Collection of the most beautiful places and experience</p>
                    </div>
                </div>
                <div className="flex p-4 justify-center bg-slate-200">
                    <input type="search" className="w-80 px-6 py-4 rounded-lg shadow-md" onChange={filter} placeholder="🔍︎ Search your city" />
                </div>
                <div className="p-4 flex flex-wrap gap-8 justify-center bg-slate-200">
                    {data.map((each) => (
                        <CityCard key={each._id} id={each._id} className="w-80 h-60" src={each.photo} city={each.city} country={each.country} />
                    ))}
                </div>
            </main>
        </>
    );
}