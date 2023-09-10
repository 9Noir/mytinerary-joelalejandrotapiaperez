import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { readPopularItineraries } from "../store/actions/itinerariesActions";
import PopularTineraryCard from "./PopularTineraryCard";

export default function Carousel() {
    const windowWidth = window.innerWidth;
    const slides = windowWidth > 640 ? 2 : 11;
    const [index, setIndex] = useState(0);
    const data = useSelector((store) => store.itineraries.popular);
    const dispatch = useDispatch();

    useEffect(() => {
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
            <div className="flex justify-center items-center relative">
                <div className="overflow-hidden rounded-2xl">
                    <div className="flex aspect-video duration-300" style={{ transform: `translateX(-${index * 100}%)` }}>
                        {slides == 2
                            ? Array(3)
                                  .fill()
                                  .map((_, i) => (
                                      <div key={i} className="min-w-full grid sm:grid-cols-2 gap-4">
                                          {Array(4)
                                              .fill()
                                              .map((_, j) => (
                                                  <PopularTineraryCard key={j + i} data={data[j + i * 4]} />
                                              ))}
                                      </div>
                                  ))
                            : data.map((data) => <PopularTineraryCard key={data._id} className="min-w-full" data={data} />)}
                    </div>
                </div>
                <div className="absolute w-full justify-between flex hover:[&>*]:bg-white/50 [&>*]:px-4 [&>*]:py-2 [&>*]:rounded-full text-neutral-100 text-3xl  sm:text-5xl">
                    <button onClick={previous} className="fa-solid fa-chevron-left active:animate-ping drop-shadow-lg"></button>
                    <button onClick={fordward} className="fa-solid fa-chevron-right active:animate-ping drop-shadow-lg"></button>
                </div>
            </div>
            <div className="text-sm sm:text-5xl text-neutral-500/70 gap-1 flex flew flex-wrap justify-center">
                {Array(slides + 1)
                    .fill()
                    .map((_, i) => (
                        <button key={i} onClick={() => dotClickHandler(i)} className={`fa-solid ${slides != 2 ? "fa-circle" : "fa-minus"}  ${index === i && "text-neutral-600 dark:text-neutral-300"}`}></button>
                    ))}
            </div>
        </div>
    );
}
