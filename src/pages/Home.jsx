import Button from "../components/Button";
import Carousel from "../components/Carousel";
import BgImg from "../components/BgImg";

export default function Home() {
    return (
        <>
            <div className="absolute overflow-hidden w-full h-screen">
                <BgImg url={"./img/home.jpg"} className={""} />
            </div>
            <main>
                <section className="h-screen flex flex-col justify-center items-center text-slate-100 text-center max-w-md gap-4 m-auto">
                    <h1 className="text-5xl font-bold">My Tineraries</h1>
                    <p className="text-2xl italic font-thin">"Find your perfect trip, designed by insiders who know and love their cities!"</p>
                    <Button to="/cities" className=" text-xl px-8 bg-white/30 animate-pulse hover:animate-none">
                        Explore now!
                    </Button>
                </section>
                <section className="flex max-md:flex-wrap-reverse gap-6 items-center">
                    <div className="flex flex-col items-center md:w-1/3 gap-6 xs:gap-12">
                        <div className="font-bold text-4xl">Find the perfect destination</div>
                        <div className="text-gray-500 text-2xl">Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</div>
                        <Button to="/cities" className="max-w-[346px] w-full text-xl">
                            View more
                        </Button>
                    </div>
                    <Carousel />
                </section>
            </main>
        </>
    );
}
