import ProfilePhoto from "../components/ProfilePhoto";
import Button from "../components/Button";
export default function UserProfileCard({ user, likes, comments, itineraries }) {
    return (
        <>
            <div className="peer-checked:[transform:rotateY(180deg)] [backface-visibility:hidden] duration-300 overflow-hidden rounded-lg">
                <div className="bg-white/20 backdrop-blur-md dark:bg-black/30 h-36"></div>
                <div className="bg-neutral-50 dark:bg-black dark:text-neutral-200 flex flex-col">
                    <ProfilePhoto className="w-40 mx-auto -translate-y-20" url={user.photo} />
                    <div className="-mt-16 grid pb-4">
                        <h2 className="capitalize text-center text-xl font-medium">
                            {user.name} {user.lastName}
                        </h2>
                        <p className="text-center font-light">
                            <i className="fa-solid fa-location-dot"></i> {user.country}
                        </p>
                        <p className="text-center font-normal">{user.email}</p>
                        <div className="flex items-center text-lg mx-auto pt-16 gap-4 [&_i]:pr-2 [&_i]:text-2xl">
                            <p title="Likes">
                                <i className="fa-regular fa-heart"></i>
                                {likes}
                            </p>
                            <p title="Comments">
                                <i className="fa-regular fa-comment"></i>
                                {comments}
                            </p>
                            <p title="Itineraries">
                                <i className="fa-solid fa-route"></i>
                                {itineraries}
                            </p>
                        </div>
                        <Button onClick={() => document.getElementById("myActivity").scrollIntoView({ behavior: "smooth" })} className="w-fit mx-auto mt-4 px-8">
                            View my activity
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}
