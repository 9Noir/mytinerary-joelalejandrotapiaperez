import { useDispatch } from "react-redux";
import Button from "../components/Button";
import { countryList } from "../components/countryList";
import { userUpdate } from "../store/actions/authActions";
export default function UserUpdateForm({ user }) {
    const dispatch = useDispatch();
    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(event.target);
        const data = {};
        for (let [name, value] of formData) {
            if (user.email == value) continue;
            if (value) data[name] = value;
        }
        dispatch(userUpdate(data));
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
            <Button type="submit" className="py-2 sm:pb-1 leading-normal">
                Update
            </Button>
        </form>
    );
}
