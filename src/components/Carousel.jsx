import { useState } from "react";
import CityCard from "./CityCard";

let data = [
    { id: "america1", city: "Cancun", photo: "/img/america/cancun.jpg" },
    { id: "america2", city: "New York", photo: "/img/america/newyork.jpg" },
    { id: "america3", city: "Rio de Janeiro", photo: "/img/america/rioDeJaneiro.jpg" },
    { id: "america4", city: "Ushuaia", photo: "/img/america/ushuaia.jpg" },
    { id: "asia1", city: "Bangkok", photo: "/img/asia/bangkok.jpg" },
    { id: "asia2", city: "Pekin", photo: "/img/asia/pekin.jpg" },
    { id: "asia3", city: "Singapur", photo: "/img/asia/singapur.jpg" },
    { id: "asia4", city: "Tokyo", photo: "/img/asia/tokio.jpg" },
    { id: "europe1", city: "Ibiza", photo: "/img/europe/ibiza.jpg" },
    { id: "europe2", city: "London", photo: "/img/europe/london.jpg" },
    { id: "europe3", city: "Paris", photo: "/img/europe/paris.jpg" },
    { id: "europe4", city: "Roma", photo: "/img/europe/roma.jpg" },
    { id: "oceania1", city: "Majuro", photo: "/img/oceania/majuro.jpg" },
    { id: "oceania2", city: "Sidney", photo: "/img/oceania/sidney.jpg" },
    { id: "oceania3", city: "Suva", photo: "/img/oceania/suva.jpg" },
    { id: "oceania4", city: "Wellington", photo: "/img/oceania/wellington.jpg" },
];

export default function Carousel() {
    const [index, setIndex] = useState(0);
    function previous() {
        setIndex(index === 0 ? data.length - 1 : index - 1);
    }
    function fordward() {
        setIndex(index === data.length - 1 ? 0 : index + 1);
    }

    return (
        <div className="flex md:w-1/2 min-h-[12rem] grow justify-between items-center relative">
            <CityCard className="min-h-[22rem]" src={data[index].photo} city={data[index].city} country={data[index].id} />
            <div className="absolute flex w-full p-4 justify-between [&>*]:bg-white/30 [&>*]:px-4 [&>*]:py-2 [&>*]:rounded-full text-white/70 text-5xl">
                <button onClick={previous} className="fa-solid fa-chevron-left active:animate-ping"></button>
                <button onClick={fordward} className="fa-solid fa-chevron-right active:animate-ping"></button>
            </div>
        </div>
    );
}
