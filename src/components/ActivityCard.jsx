import { useState } from "react";
import Loading from "./Loading";

export default function Activity({ activityData }) {
    const [loading, setLoading] = useState(true);
    return (
        <>
            <div className="relative flex flex-col justify-between min-w-[15rem] p-4 rounded-lg shadow-md">
                <img onLoad={() => setLoading(false)} className={`${loading && "hidden"} w-full h-60 object-cover rounded-sm`} src={activityData.photo} alt={`Photo of ${activityData.name}`} />
                {loading && <Loading className="min-h-[15rem]" />}
                <p className="text-center pt-2 font-medium text-neutral-500">{activityData.name}</p>
            </div>

            {/* <div className="flex flex-col justify-between min-w-[15rem] p-4 m-4 bg-slate-200/80 rounded-lg shadow-md">
                <img onLoad={() => setLoading(false)} className="w-full h-60 object-cover rounded-sm" src={activityData.photo} alt={`Photo of ${activityData.name}`} />
                <p className="text-center text-neutral-400">{activityData.name}</p>
            </div> */}
        </>
    );
}
