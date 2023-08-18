import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Button from "../components/Button";

export default function City() {
    window.scrollTo(0, 0);
    const { city_id } = useParams();
    const [data, setData] = useState({});
    useEffect(() => {
        axios("http://localhost:8000/api/cities/"+city_id)
            .then((res) => setData(res.data.response))
            .catch((err) => console.log(err));
    }, []);

    return (
        <>
            <div
                className="absolute w-full min-h-full bg-cover bg-center  brightness-50"
                style={{
                    backgroundImage: `url(${data.photo})`,
                }}></div>

            <main className="z-10 grow p-4 flex max-w-[1291px] mx-auto h-screen">
                <div className="flex flex-col gap-4 items-center">
                    <div className="h-screen flex flex-col justify-center items-center text-slate-100 text-center max-w-2xl gap-4">
                        <h1 className="text-5xl font-bold">{data.city}</h1>
                        <p className="text-2xl italic font-thin">{data.smallDescription}</p>
                        <Button className=" text-xl px-8">View Iterinaries ↓</Button>
                    </div>
                </div>
            </main>
        </>
    );
}
