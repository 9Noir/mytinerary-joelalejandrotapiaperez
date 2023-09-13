import { Link as Anchor, Navigate } from "react-router-dom";
import BgImg from "../components/BgImg";
import { useDispatch, useSelector } from "react-redux";
import { signin, signinStep1 } from "../store/actions/authActions";
import { useRef, useState } from "react";
import ProfilePhoto from "../components/ProfilePhoto";
import Button from "../components/Button";
import GoogleButton from "../components/GoogleAuth";

export default function Signin() {
    const { user, photo, role } = useSelector((store) => store.auth);
    const [isEmailVerified, setisEmailVerified] = useState(false);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const dispatch = useDispatch();

    function handleSubmit(e) {
        e.preventDefault();
        if (isEmailVerified) {
            dispatch(signin({ email: emailRef.current.value, password: passwordRef.current.value }));
        } else {
            dispatch(signinStep1({ email: emailRef.current.value })).then((res) => setisEmailVerified(res.payload.success));
        }
    }

    return user ? (
        <Navigate to="/cities" />
    ) : (
        <>
            <main className="max-w-full relative max-xs:px-0 py-24 min-h-screen flex">
                <BgImg className="z-0 inset-0" url={"./img/login.jpg"} />
                <section className="z-10 w-[min(100%,1291px)] px-0 xs:px-4  mx-auto flex-grow flex flex-wrap justify-between max-lg:justify-center items-center">
                    <h1 className="max-lg:mb-8 text-6xl font-bold text-center text-neutral-100 hidden lg:flex">My Tinerary</h1>
                    <form onSubmit={handleSubmit} className="z-10 max-w-md w-full bg-slate-100 dark:bg-black p-4 xs:p-10 flex flex-col gap-4 text-black rounded-lg shadow-lg">
                        <p className="text-neutral-400 text-xs">Step {isEmailVerified ? "2" : "1"} of 2</p>
                        <h1 className="text-2xl text-neutral-700 font-bold dark:text-neutral-300">{isEmailVerified ? "Enter your password" : "Sign in"}</h1>
                        {isEmailVerified ? (
                            <div className="flex gap-4 items-center text-xs">
                                <ProfilePhoto className="w-16 ring-2 ring-blue-600 ring-offset-2 dark:ring-offset-black" url={photo} />
                                <div className="text-neutral-600 dark:text-neutral-300">
                                    <h2 className="font-medium text-lg">{emailRef.current.value}</h2>
                                    <p className=" pr-2 ">{role == "admin" ? "Admin Account" : "Personal Account"}</p>
                                </div>
                            </div>
                        ) : (
                            <div className="flex items-center text-xs">
                                <p className=" pr-2 dark:text-neutral-300">New user? </p>
                                <Anchor to="/signup" className="text-blue-600 dark:text-blue-400">
                                    Create an account
                                </Anchor>
                            </div>
                        )}
                        <div className={`flex flex-col ${isEmailVerified && "hidden"}`}>
                            <label htmlFor="email" className="text-neutral-400 text-sm">
                                Email
                            </label>
                            <input ref={emailRef} placeholder="example@email.com" type="email" name="email" id="email" autoComplete="email" required />
                        </div>
                        <div className={`flex flex-col ${!isEmailVerified && "hidden"}`}>
                            <label htmlFor="password" className="text-neutral-400 text-sm">
                                Password
                            </label>
                            <input ref={passwordRef} placeholder="Your password" min={6} type="password" name="password" id="password" autoComplete="current-password" required />
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4 mt-2">
                            <Button onClick={() => setisEmailVerified(false)} className={"bg-neutral-300 dark:bg-transparent dark:hover:brightness-150 dark:border border-neutral-400 !rounded-full " + (!isEmailVerified && "hidden")}>
                                Back
                            </Button>
                            <Button type="submit" className="!rounded-full sm:col-start-2">
                                Continue
                            </Button>
                        </div>
                        <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                            <p className="mx-4 mb-0 text-center text-xl text-neutral-300">O</p>
                        </div>
                        <div className="w-full grid gap-6 max-xs:text-xs">
                            <button type="button" className="flex gap-4 items-center justify-center w-full border bg-slate-50 px-4 py-3 rounded-full font-medium text-neutral-500 dark:text-neutral-300 shadow-md dark:bg-white/20 hover:brightness-[.98] dark:hover:brightness-[.9] border-neutral-300 dark:border-neutral-500 ">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="1.5em" height="1.5em" viewBox="0 0 48 48">
                                    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                                    <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
                                    <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
                                    <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                                </svg>
                                Continue with Google
                            </button>
                            <button type="button" className="flex gap-4 items-center justify-center w-full bg-blue-600 px-4 py-3 rounded-full font-medium text-neutral-100 shadow-md hover:bg-blue-500">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" fill="currentColor" width="1.5em" height="1.5em" viewBox="0 0 50 50">
                                    <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
                                </svg>
                                Continue with Facebook
                            </button>
                            {/* <GoogleButton/> */}
                        </div>
                    </form>
                </section>
            </main>
        </>
    );
}

// const [form, setForm] = useState({
//     email: "",
//     password: "",
// });

// function handleChange(e) {
//     setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
// }
