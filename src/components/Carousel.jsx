import { useEffect, useState } from "react";
import CityCard from "./CityCard";
import { useDispatch, useSelector } from "react-redux";
import { readCarousel } from "../store/actions/citiesActions";
import { readPopularItineraries } from "../store/actions/itinerariesActions";

export default function Carousel() {
    const windowWidth = window.innerWidth;
    const slides = windowWidth > 640 ? 2 : 11;

    const [index, setIndex] = useState(0);
    // const data = useSelector((store) => store.cities.carousel);
    const data = useSelector((store) => store.itineraries.popular);
    const dispatch = useDispatch();

    useEffect(() => {
        // !data && dispatch(readCarousel());
        !data && dispatch(readPopularItineraries());
    }, []);

    useEffect(() => {
        const intervalId = setTimeout(() => {
            fordward();
        }, 4000);

        return () => {
            clearTimeout(intervalId);
        };
    });

    function previous() {
        setIndex(index <= 0 ? slides : index - 1);
    }
    function fordward() {
        setIndex(index >= slides ? 0 : index + 1);
    }
    function dotClickHandler(index) {
        setIndex(index);
    }

    if (!data) return <></>;
    return (
        <div className="flex flex-col w-full grow justify-between items-center relative gap-6">
            <h1 className="text-center font-bold text-3xl text-neutral-700 dark:text-neutral-100">Popular Tineraries</h1>
            <div className="flex w-full justify-center items-center relative">
                <div className="w-full overflow-hidden rounded-2xl">
                    <div className="flex w-full aspect-video duration-300" style={{ transform: `translateX(-${index * 100}%)` }}>
                        {slides == 2
                            ? Array(3)
                                  .fill()
                                  .map((_, i) => (
                                      <div key={i} className="min-w-full aspect-video grid sm:grid-cols-2 gap-4">
                                          {Array(4)
                                              .fill()
                                              .map((_, j) => (
                                                  <div key={j} className="w-full relative text-neutral-300 shadow-lg">
                                                      <div className="absolute left-0 top-0 px-4 py-2 rounded-lg text-2xl gap-2 flex bg-neutral-600/50 m-4">
                                                          <button className="drop-shadow-sm fa-heart fa-solid text-red-500"></button>
                                                          <div className="text-lg leading-none text-center">{data[j + i * 4].likes.length}</div>
                                                      </div>
                                                      <h1 className="absolute w-full bottom-0 p-4 bg-gradient-to-t from-black/80 text-right  xs:text-xl font-bold rounded-lg">{data[j + i * 4].name.toUpperCase()}</h1>
                                                      <img className="w-full aspect-video object-cover" src={data[j + i * 4].photo} alt="" />
                                                  </div>
                                              ))}
                                      </div>
                                  ))
                            : data.map((data, j) => (
                                  <div key={j} className="min-w-full relative text-neutral-300 shadow-xl">
                                      <div className="absolute left-0 top-0 px-4 py-2 rounded-lg text-2xl gap-2 flex bg-neutral-600/50 m-4">
                                          <button className={` drop-shadow-sm fa-heart fa-solid text-red-500`}></button>
                                          <div className="text-lg leading-none text-center">{data.likes.length}</div>
                                      </div>
                                      <h1 className="absolute w-full bottom-0 p-4 bg-gradient-to-t from-black/80 text-right  xs:text-xl font-bold rounded-lg">{data.name.toUpperCase()}</h1>
                                      <img className="w-full aspect-video object-cover" src={data.photo} alt="" />
                                  </div>
                              ))}
                    </div>
                </div>
                <div className="absolute w-full justify-between flex hover:[&>*]:bg-white/50 [&>*]:px-4 [&>*]:py-2 [&>*]:rounded-full text-neutral-100 text-3xl  sm:text-5xl">
                    <button onClick={previous} className="fa-solid fa-chevron-left active:animate-ping drop-shadow-lg"></button>
                    <button onClick={fordward} className="fa-solid fa-chevron-right active:animate-ping drop-shadow-lg"></button>
                </div>
            </div>
            <div className="sm:text-5xl text-neutral-500/70 gap-1 flex flew flex-wrap justify-center">
                {Array(slides + 1)
                    .fill()
                    .map((_, i) => (
                        <button key={i} onClick={() => dotClickHandler(i)} className={`fa-solid ${slides != 2 ? "fa-circle" : "fa-minus"}  ${index === i && "text-neutral-600 dark:text-neutral-300"}`}></button>
                    ))}
            </div>
        </div>
    );
}
