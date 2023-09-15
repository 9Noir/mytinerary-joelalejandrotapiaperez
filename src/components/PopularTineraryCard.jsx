import { Link } from "react-router-dom";
import Loading from "./Loading";
import { useState } from "react";
export default function PopularTineraryCard({ data, className }) {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <Link to={"/city/" + data.city_id} className={`flex relative text-neutral-100 shadow-lg overflow-hidden rounded-2xl ${className} `}>
            <img onLoad={() => setImageLoaded(true)} className={`w-full h-full object-cover ${!imageLoaded && "hidden"}`} src={data.photo} alt={"Photo of " + data.name} />
            {!imageLoaded ? (
                <Loading />
            ) : (
                <>
                    <div className="absolute right-0 top-0 px-4 m-4 py-2 rounded-lg text-2xl gap-2 flex bg-black/20">
                        <button className="drop-shadow-sm fa-heart fa-solid text-white"></button>
                        <div className="text-lg leading-none text-center">{data.likes.length}</div>
                    </div>
                    <h1 className="absolute bottom-0 xs:text-lg py-2 px-4 bg-gradient-to-tr from-blue-800 to-blue-600 font-medium rounded-tr-lg shadow-lg">{data.name}</h1>
                </>
            )}
        </Link>
    );
}
