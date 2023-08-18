import { Link as Anchor } from "react-router-dom";
import Button from "../components/Button";

export default function NotFound() {
    return (
        <>
            <div className="absolute w-full h-screen bg-cover bg-[url('./img/404.jpg')] brightness-50"></div>
            <main className="z-10 grow w-full flex">
                <div className="m-auto flex flex-col text-slate-100 text-center">
                    <h1 className="text-7xl font-extrabold">Oops!</h1>
                    <h2 className="text-3xl font-semibold mt-4">404 Page Not Found</h2>
                    <p className="text-xl font-light mb-4">The page you are looking for does not exist.</p>
                    <Button to="/home" className="px-12">
                        Go to HomePage
                    </Button>
                </div>
            </main>
        </>
    );
}
