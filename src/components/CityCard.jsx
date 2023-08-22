import Button from "./Button";
export default function CityCard({ src, city, country, id, className }) {
  return (
    <div
      className={`rounded-lg shadow-lg relative flex overflow-hidden ${className}`}
    >
      <img
        className="w-full h-full object-cover absolute top-0 left-0 brightness-75"
        src={src}
        alt={`Photo of ${city}`}
      />
      <div className="relative flex flex-col w-full justify-between p-4 text-slate-100">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">{city}</h1>
          <h2 className="text-xl">
            <i className="fa-solid fa-location-dot"></i> {country}
          </h2>
        </div>
        <Button to={"/city/" + id} className="xs:w-2/3 ">
          View More
        </Button>
      </div>
    </div>
  );
}
