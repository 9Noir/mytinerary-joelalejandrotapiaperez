import Button from "./Button";
export default function CityCard({ src, city, country, className }) {
    return (
        <div className={`grow rounded-lg shadow-lg relative flex overflow-hidden ${className}`}>
            <img className="w-full h-full object-cover absolute top-0 left-0" src={src} alt={`Photo of ${city}`} />
            <div className="relative flex flex-col w-full justify-between p-4 text-white">
                <div className="flex flex-col">
                    <h1 className="text-4xl font-semibold">{city}</h1>
                    <h2 className="text-2xl">
                        <i className="fa-solid fa-location-dot"></i> {country}
                    </h2>
                </div>
                <Button className="xs:w-1/3 ">View More</Button>
            </div>
        </div>
    );
}
