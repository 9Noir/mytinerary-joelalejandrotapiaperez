import Button from "../components/Button";
import Carousel from "../components/Carousel";

Button;
export default function Home() {
    return (
        <main className="grow p-4 flex max-w-[1291px] mx-auto">
            <div className="flex flex-col gap-4 items-center">
                <div className="text-center max-w-xs space-y-4">
                    <h1 className="text-3xl font-bold">MyTineraries</h1>
                    <p className="text-xl italic">"Find your perfect trip, designed by insiders who know and love their cities!".</p>
                </div>
                <div className="flex max-md:flex-wrap-reverse gap-6 items-center">
                    <div className="flex flex-col md:w-1/3 gap-6 xs:gap-12">
                        <div className="font-bold text-4xl">Find the perfect destination</div>
                        <div className="text-gray-500 text-2xl">Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</div>
                        <Button to="/cities" className="max-w-[346px] text-xl">
                            Explore now!
                        </Button>
                    </div>
                    <Carousel />
                </div>
            </div>
        </main>
    );
}
