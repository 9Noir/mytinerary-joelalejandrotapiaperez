import Button from "../components/Button";
import Carousel from "../components/Carousel";
import BgImg from "../components/BgImg";

export default function Home() {
    return (
        <>
            <div className="absolute overflow-hidden w-full h-screen">
                <BgImg url={"./img/home.jpg"} className={"animate-zoom"} />
            </div>
            <main>
                <section className="h-screen flex flex-col justify-center items-center text-neutral-100 text-center max-w-md gap-4 m-auto">
                    <h1 className="text-5xl font-bold">My Tineraries</h1>
                    <p className="text-2xl italic font-thin">"Find your perfect trip, designed by insiders who know and love their cities!"</p>
                    <Button to="/cities" className=" text-xl px-8 bg-white/30 animate-pulse hover:animate-none">
                        Explore now!
                    </Button>
                </section>
                <section className="flex max-md:flex-wrap-reverse gap-6 items-center">
                    <div className="flex flex-col h-full items-center md:w-5/12 gap-6 xs:gap-12 bg-slate-100 dark:bg-slate-700 p-8 rounded-lg shadow-xl">
                        <div className="font-bold text-neutral-900 dark:text-neutral-300 text-3xl sm:text-4xl">Find the perfect destination</div>
                        <div className="text-neutral-500 dark:text-neutral-200 text-2xl">Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</div>
                        <Button to="/cities" className="max-w-xs w-full text-xl">
                            View more
                        </Button>
                    </div>
                    <Carousel />
                </section>
            </main>
        </>
    );
}
