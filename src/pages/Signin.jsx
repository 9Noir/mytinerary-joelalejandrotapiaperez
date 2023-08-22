import { Link as Anchor } from "react-router-dom";
import Button from "../components/Button";
import BgImg from "../components/BgImg";

export default function Signin() {
    return (
        <>
            <BgImg url={"./img/login.jpg"} />
            <main className="mb-0">
                <section className="flex flex-wrap gap-8 max-w-full w-full justify-center md:justify-between">
                    <div className="text-6xl my-auto font-bold text-center text-slate-100 max-xs:hidden">My Tinerary</div>
                    <form action="" className="max-w-xs w-full bg-slate-100 p-10 flex flex-col gap-4 text-black rounded-2xl shadow-lg">
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
                            <input type="email" name="email" id="email" autoComplete="email" className="bg-slate-100 border-b-2 border-slate-300" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="password" className="text-gray-400 text-sm">
                                Password
                            </label>
                            <input type="password" name="password" id="password" autoComplete="current-password" className="bg-slate-100 border-b-2 border-slate-300" />
                        </div>
                        <Button>Continue</Button>
                    </form>
                </section>
            </main>
        </>
    );
}
