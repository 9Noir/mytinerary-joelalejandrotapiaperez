import { useState } from "react";
import Loading from "./Loading";

export default function Activity({ activityData }) {
    const [loading, setLoading] = useState(true);
    return (
        <>
            <div className="relative bg-gradient-to-tr  dark:from-neutral-700/70 dark:to-neutral-600 from-neutral-200 to-neutral-100 flex flex-col justify-between min-w-[15rem] p-4 rounded-lg shadow-md">
                <img onLoad={() => setLoading(false)} className={`${loading && "hidden"} w-full h-60 object-cover rounded-sm`} src={activityData.photo} alt={`Photo of ${activityData.name}`} />
                {loading && <Loading className="min-h-[15rem]" />}
                <p className="text-center pt-2 font-medium dark:text-neutral-300 text-neutral-500">{activityData.name}</p>
            </div>
        </>
    );
}
