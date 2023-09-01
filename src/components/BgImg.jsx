import { useState } from "react";

export default function BgImg({ url, className }) {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <>
            {!imageLoaded && <div className={className + " absolute w-full h-full bg-slate-700"}></div>}
            <img onLoad={() => setImageLoaded(true)} className={`${className} absolute w-full h-full object-cover object-center brightness-[.65] shadow-lg ${!imageLoaded && "opacity-0"}`} src={url} alt="" />
        </>
    );
}
