import { useDispatch } from "react-redux";
import Button from "../components/Button";
import { countryList } from "../components/countryList";
import { userUpdate } from "../store/actions/authActions";
import { useState } from "react";
export default function UserUpdateForm({ user }) {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        const formData = new FormData(event.target);
        const data = {};
        for (let [name, value] of formData) {
            if (user.email == value) continue;
            if (value) data[name] = value;
        }
        dispatch(userUpdate(data)).then(setIsLoading(false));
    }

    return (
        <form onSubmit={handleSubmit} className="absolute grid gap-2 [&_label]:mb-0 [&_input]:p-2 bottom-0 duration-300 p-4 w-full h-full bg-neutral-50 dark:bg-black dark:text-neutral-200 peer-checked:transform-none [backface-visibility:hidden] [transform:rotateY(180deg)] overflow-hidden rounded-lg">
            <div className="grid sm:grid-cols-2 sm:gap-4">
                <div className="flex flex-col">
                    <label htmlFor="name" className="text-neutral-400 text-sm">
                        Name
                    </label>
                    <input defaultValue={user.name} placeholder="Name" type="name" name="name" id="name" autoComplete="name" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="lastName" className="text-neutral-400 text-sm">
                        Last Name
                    </label>
                    <input defaultValue={user.lastName} placeholder="Last name" type="lastName" name="lastName" id="lastName" autoComplete="lastName" />
                </div>
            </div>
            <div className="flex flex-col">
                <label htmlFor="photo" className="text-neutral-400 text-sm">
                    URL photo
                </label>
                <input defaultValue={user.photo} placeholder="https://example.com/photo.jpg" type="photo" name="photo" id="photo" autoComplete="photo" />
            </div>
            <div className="flex flex-col">
                <label htmlFor="country" className="text-neutral-400 text-sm">
                    Country
                </label>
                <select className="p-2" name="country" defaultValue={user.country} id="country" autoComplete="country">
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
                <input defaultValue={user.email} placeholder="example@email.com" type="email" name="email" id="email" autoComplete="email" pattern="[A-Za-z0-9._+\-']+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}$" />
            </div>
            <div className="flex flex-col mb-2">
                <label htmlFor="password" className="text-neutral-400 text-sm">
                    Password
                </label>
                <input placeholder="Min 6 characters" minLength={6} type="password" name="password" id="password" />
            </div>
            <Button type="submit" className="py-2 sm:pb-1 leading-normal relative" disabled={isLoading}>
                Update
                <svg className={`${!isLoading && "hidden"} absolute inset-y-0  right-5 animate-spin w-5 aspect-square`} xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 512 512">
                    <path fill="currentColor" d="M222.7 32.1c5 16.9-4.6 34.8-21.5 39.8C121.8 95.6 64 169.1 64 256c0 106 86 192 192 192s192-86 192-192c0-86.9-57.8-160.4-137.1-184.1c-16.9-5-26.6-22.9-21.5-39.8s22.9-26.6 39.8-21.5C434.9 42.1 512 140 512 256c0 141.4-114.6 256-256 256S0 397.4 0 256C0 140 77.1 42.1 182.9 10.6c16.9-5 34.8 4.6 39.8 21.5z" />
                </svg>
            </Button>
        </form>
    );
}
