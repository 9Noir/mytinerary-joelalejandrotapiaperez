import { Link as Anchor } from "react-router-dom";
import Button from "../components/Button";

export default function Signin() {
    return (
        <>
            <div className="absolute w-full h-screen bg-cover bg-[url('./img/login.jpg')] brightness-50"></div>
            <main className="grow flex mx-auto gap-4 p-4 md:flex w-full items-center justify-center md:justify-between flex-wrap max-w-[1291px] text-white z-10">
                <div className="text-6xl my-auto font-bold text-center">My Tinerary</div>
                <form action="" className="w-80  bg-slate-100 p-10 flex flex-col gap-4 text-black rounded-2xl shadow-lg">
                    <p className="text-gray-400 text-xs">Step 1 of 2</p>
                    <h1 className="text-lg">Sign in</h1>
                    <div className="flex items-center text-xs">
                        <p className=" pr-2">New user? </p>
                        <Anchor to="/signup" className="text-blue-600">
                            Create an account
                        </Anchor>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-gray-400 text-sm">
                            Email
                        </label>
                        <input type="email" name="email" id="email" className="bg-slate-100 border-b-2 border-slate-300" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="password" className="text-gray-400 text-sm">
                            Password
                        </label>
                        <input type="password" name="password" id="password" className="bg-slate-100 border-b-2 border-slate-300" />
                    </div>
                    <Button>Continue</Button>
                </form>
            </main>
        </>
    );
}
