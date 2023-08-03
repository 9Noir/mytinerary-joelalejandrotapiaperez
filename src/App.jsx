import Carousel from "./components/Carousel";
import HomeLayout from "./layouts/HomeLayout";
import Button from "./components/Button";

function App() {
    return (
        <div className="w-full min-h-screen flex flex-col bg-slate-200 [&>*]:max-w-[1291px] [&>*]:mx-auto">
            <HomeLayout>
                <main className="grow p-4 md:flex">
                    <div className="flex max-md:flex-wrap-reverse m-auto gap-6">
                        <div className="flex flex-col md:w-1/2 justify-between gap-6">
                            <div className="font-bold text-4xl">Find the perfect destination</div>
                            <div className="text-gray-500 text-2xl">Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</div>
                            {/* <a href="#" className="hover:brightness-150 text-xl shadow-lg bg-blue-700 text-white rounded-lg  max-w-[346px] p-3 text-center">
                                View More
                            </a> */}
                            <Button className="max-w-[346px] text-xl">View More</Button>
                        </div>
                        <Carousel />
                    </div>
                </main>
            </HomeLayout>
        </div>
    );
}

export default App;
