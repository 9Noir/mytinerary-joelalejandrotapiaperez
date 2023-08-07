import React from "react";
import Carousel from "./Carousel";
import Button from "./Button";

export default function HomeArticle() {
    return (
        <main className="grow p-4 md:flex max-w-[1291px] mx-auto">
            <div className="flex max-md:flex-wrap-reverse gap-6 items-center">
                <div className="flex flex-col md:w-1/3 gap-6 xs:gap-12">
                    <div className="font-bold text-4xl">Find the perfect destination</div>
                    <div className="text-gray-500 text-2xl">Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</div>
                    <Button className="max-w-[346px] text-xl">View More</Button>
                </div>
                <Carousel />
            </div>
        </main>
    );
}
