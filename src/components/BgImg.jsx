import { useState } from "react";

export default function BgImg({ url, className }) {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <>
            {!imageLoaded && <div className={className + " absolute w-full h-full bg-slate-700"}></div>}
            <div
                onLoad={() => setImageLoaded(true)}
                className={`${className} absolute w-full h-full bg-cover bg-center brightness-[.65] ${!imageLoaded && "opacity-0"}"`}
                style={{
                    backgroundImage: `url(${url})`,
                }}></div>
        </>
    );
}
