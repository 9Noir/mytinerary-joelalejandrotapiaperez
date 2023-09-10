import { Link as Anchor, Navigate } from "react-router-dom";
import BgImg from "../components/BgImg";
import { useDispatch, useSelector } from "react-redux";
import { countryList } from "../components/countryList";
import { signup } from "../store/actions/authActions";

export default function Signup() {
    const response = useSelector((store) => store.auth.response);
    const dispatch = useDispatch();
    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(event.target);
        const data = {};
        for (let [name, value] of formData) {
            if (value) data[name] = value;
        }
        dispatch(signup(data));
        console.log(data);
    }
    if (response.message == "REGISTER_SUCCESS") return <Navigate to="/signin" />;
    return (
        <>
            <BgImg url={"./img/login.jpg"} />
            <main className="mb-0 lg:flex-row flex-wrap w-full justify-between max-lg:justify-center items-center min-h-screen">
                <h1 className="max-lg:mb-8 text-6xl font-bold text-center text-neutral-100">My Tinerary</h1>
                <form onSubmit={handleSubmit} className="max-w-md w-full bg-slate-100 dark:bg-black p-4 xs:p-10 flex flex-col gap-4 text-black rounded-lg shadow-lg">
                    <p className="text-neutral-400 text-xs">Step 1 of 2</p>
                    <h1 className="text-lg dark:text-neutral-300">Create account</h1>
                    <div className="flex items-center text-xs">
                        <p className=" pr-2 dark:text-neutral-300">Already have an email? </p>
                        <Anchor to="/signin" className="text-blue-600">
                            Sign in
                        </Anchor>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                        <div className="flex flex-col">
                            <label htmlFor="name" className="text-neutral-400 text-sm">
                                Name
                            </label>
                            <input placeholder="Name" type="name" name="name" id="name" autoComplete="name" required />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="lastName" className="text-neutral-400 text-sm">
                                Last Name
                            </label>
                            <input placeholder="Last name" type="lastName" name="lastName" id="lastName" autoComplete="lastName" required />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="photo" className="text-neutral-400 text-sm">
                            URL photo
                        </label>
                        <input placeholder="https://example.com/photo.jpg" type="photo" name="photo" id="photo" autoComplete="photo" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="country" className="text-neutral-400 text-sm">
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
                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-neutral-400 text-sm">
                            Email
                        </label>
                        <input placeholder="example@email.com" type="email" name="email" id="email" autoComplete="email" pattern="[A-Za-z0-9._+\-']+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}$" required />
                    </div>
                    <div className="flex flex-col  mb-4">
                        <label htmlFor="password" className="text-neutral-400 text-sm">
                            Password
                        </label>
                        <input placeholder="Min 6 characters" minLength={6} type="password" name="password" id="password" autoComplete="new-password" required />
                    </div>
                    <button type="submit" className="hover:bg-blue-500 active:animate-ping transition ease-in-out duration-300 bg-blue-600 text-white shadow-lg font-bold rounded-full p-3 text-center">
                        Continue
                    </button>
                </form>
            </main>
        </>
    );
}
