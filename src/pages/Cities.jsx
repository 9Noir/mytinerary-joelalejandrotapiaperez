import axios from "axios";
import CityCard from "../components/CityCard";
import { useEffect, useState } from "react";
export default function Cities() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios("./data.json")
            .then((res) => setData(res.data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <>
            <div className="absolute w-full h-screen">
                <div className="p-4 min-h-[50%] flex flex-col justify-center bg-slate-600 text-white">
                    <div className="max-w-[1291px] m-auto">
                        <h1 className="text-4xl font-bold text-center mb-4">Cities</h1>
                        <p className=" text-2xl max-w-sm">Collection of the most beautiful places and experience</p>
                    </div>
                </div>
                <div className="flex p-4 justify-center"><input type="search" className="w-80 px-6 py-4 rounded-lg shadow-md" placeholder="🔍︎ Search your city" /></div>
                <div className="p-4 flex flex-wrap gap-8 justify-center">
                    {data.map((each) => (
                        <CityCard key={each.id} className="w-80 h-60" src={each.photo} city={each.city} country={each.id} />
                    ))}
                </div>
            </div>
        </>
    );
}
