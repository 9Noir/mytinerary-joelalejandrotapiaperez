import { Link as Anchor, Navigate } from "react-router-dom";
import BgImg from "../components/BgImg";
import { useDispatch, useSelector } from "react-redux";
import { countryList } from "../components/countryList";
import { signup, signupStep1 } from "../store/actions/authActions";
import { useState } from "react";
import Button from "../components/Button";
import GoogleButton from "../components/GoogleAuth";

export default function Signup() {
    const { response, user } = useSelector((store) => store.auth);
    const [isEmailVerified, setisEmailVerified] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        const formData = new FormData(event.target);
        const data = {};
        for (let [name, value] of formData) {
            if (value) data[name] = value;
        }
        if (isEmailVerified) {
            dispatch(signup(data)).then(setIsLoading(false));
        } else {
            dispatch(signupStep1(data)).then((res) => {
                setisEmailVerified(res.payload.success);
                setIsLoading(false);
            });
        }
    }
    if (response.message == "REGISTER_SUCCESS") return <Navigate to="/signin" />;
    return user ? (
        <Navigate to="/cities" />
    ) : (
        <>
            <main className="max-w-full relative max-xs:px-0 py-24 min-h-screen flex">
                <BgImg className="z-0 inset-0  [transform:rotateY(180deg)]" url={"./img/signup.jpg"} />
                <section className="z-10 w-[min(100%,1291px)] px-0 xs:px-4  mx-auto flex-grow flex flex-wrap justify-between max-lg:justify-center items-center">
                    <h1 className="max-lg:mb-8 text-6xl font-bold text-center text-neutral-100 hidden lg:flex">My Tinerary</h1>
                    <div className="form-section">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <p className="text-neutral-400 text-xs">Step {isEmailVerified ? "2" : "1"} of 2</p>
                            <h1 className="text-2xl text-neutral-700 font-bold dark:text-neutral-300">Create account</h1>
                            <div className="flex items-center text-xs">
                                <p className=" pr-2 dark:text-neutral-300">Already have an email? </p>
                                <Anchor to="/signin" className="text-blue-600 dark:text-blue-400">
                                    Sign in
                                </Anchor>
                            </div>
                            <div className={`flex flex-col ${isEmailVerified && "hidden"}`}>
                                <label htmlFor="email">
                                    Email
                                </label>
                                <input placeholder="example@email.com" type="email" name="email" id="email" autoComplete="email" pattern="[A-Za-z0-9._+\-']+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}$" required />
                            </div>
                            <div className={`flex flex-col ${isEmailVerified && "hidden"}`}>
                                <label htmlFor="password">
                                    Password
                                </label>
                                <input placeholder="Min 6 characters" minLength={6} type="password" name="password" id="password" autoComplete="new-password" required />
                            </div>
                            {isEmailVerified && (
                                <>
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div className="flex flex-col">
                                            <label htmlFor="name">
                                                Name
                                            </label>
                                            <input placeholder="Name" type="name" name="name" id="name" autoComplete="name" required />
                                        </div>
                                        <div className="flex flex-col">
                                            <label htmlFor="lastName">
                                                Last Name
                                            </label>
                                            <input placeholder="Last name" type="lastName" name="lastName" id="lastName" autoComplete="lastName" required />
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="photo">
                                            URL photo
                                        </label>
                                        <input placeholder="https://example.com/photo.jpg" type="photo" name="photo" id="photo" autoComplete="photo" />
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="country">
                                            Country
                                        </label>
                                        <select name="country" defaultValue="" id="country" autoComplete="country" required>
                                            <option value="" disabled>
                                                Select a country
                                            </option>
                                            {countryList.map((country, i) => (
                                                <option key={i} value={country}>
                                                    {country}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </>
                            )}
                            <div className="grid sm:grid-cols-2 gap-4 mt-2">
                                <Button onClick={() => setisEmailVerified(false)} className={"bg-neutral-300 dark:bg-transparent dark:hover:brightness-150 dark:border border-neutral-400 !rounded-full " + (!isEmailVerified && "hidden")}>
                                    Back
                                </Button>
                                <Button type="submit" className="!rounded-full row-start-1 sm:col-start-2 relative grid" disabled={isLoading}>
                                    Continue
                                    <svg className={`${!isLoading && "hidden"} absolute inset-y-0  right-5 animate-spin w-5 aspect-square`} xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 512 512">
                                        <path fill="currentColor" d="M222.7 32.1c5 16.9-4.6 34.8-21.5 39.8C121.8 95.6 64 169.1 64 256c0 106 86 192 192 192s192-86 192-192c0-86.9-57.8-160.4-137.1-184.1c-16.9-5-26.6-22.9-21.5-39.8s22.9-26.6 39.8-21.5C434.9 42.1 512 140 512 256c0 141.4-114.6 256-256 256S0 397.4 0 256C0 140 77.1 42.1 182.9 10.6c16.9-5 34.8 4.6 39.8 21.5z" />
                                    </svg>
                                </Button>
                            </div>
                        </form>
                        <div className="grid">
                            <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                                <p className="mx-4 mb-0 text-center text-xl text-neutral-300">O</p>
                            </div>
                            <div className="w-full grid gap-6 max-xs:text-xs">
                                <GoogleButton />
                                {/* <button type="button" className="flex gap-4 items-center justify-center w-full bg-blue-600 px-4 py-3 rounded-full font-medium text-neutral-100 shadow-md hover:bg-blue-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" fill="currentColor" width="1.5em" height="1.5em" viewBox="0 0 50 50">
                                        <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
                                    </svg>
                                    Continue with Facebook
                                </button> */}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
