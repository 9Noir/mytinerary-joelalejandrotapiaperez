import { useEffect } from "react";
import { Link as Anchor, Navigate } from "react-router-dom";
import BgImg from "../components/BgImg";
import { useDispatch, useSelector } from "react-redux";
import { readLikes, readComments, readUserItineraries } from "../store/actions/usersActions";
import PopularTineraryCard from "../components/PopularTineraryCard";
import UserProfileCard from "../components/UserProfileCard";
import UserUpdateForm from "../components/UserUpdateForm";

export default function Account() {
    const dispatch = useDispatch();
    const user = useSelector((store) => store.auth.user);
    const { likes, comments, itineraries } = useSelector((store) => store.users);

    useEffect(() => {
        dispatch(readLikes(user._id));
        dispatch(readComments(user._id));
        dispatch(readUserItineraries(user._id));
    }, []);

    return !user ? (
        <Navigate to="/signin" />
    ) : (
        <>
            <BgImg className="" url={"./img/account.jpg"}></BgImg>
            <section className="h-screen flex text-neutral-100">
                <div className="m-auto w-80 relative">
                    <h1 className="text-2xl xs:text-4xl font-bold text-center py-8">My Account</h1>
                    <div className="relative text-black rounded-lg shadow-lg">
                        <label htmlFor="edit" className="absolute -top-20 text-neutral-100 p-4 text-2xl fa-solid fa-pen-to-square active:animate-ping"></label>
                        <input id="edit" type="checkbox" className="hidden peer" />
                        <UserProfileCard user={user} likes={likes?.length || 0} comments={comments?.length || 0} itineraries={itineraries?.length || 0} />
                        <UserUpdateForm user={user} />
                    </div>
                </div>
            </section>
            <main className="dark:text-neutral-300">
                <section id="myActivity">
                    <h2 className="text-2xl">My likes</h2>
                    <div className="flex items-center border-t flex-1 max-h-0 border-neutral-400 my-4"></div>
                    <div className="flex flex-wrap gap-8 group">
                        {likes &&
                            likes.map((like) => (
                                <Anchor to={"/city/" + like.itinerary_id.city_id} key={like._id} className="grid aspect-square w-24 text-center dark:bg-white/20 bg-neutral-50 rounded-lg shadow-md overflow-hidden group-hover:brightness-[.85] hover:!filter-none hover:scale-105 duration-200">
                                    <img className="w-full object-cover aspect-video" src={like.itinerary_id.photo} alt="" />
                                    <p className="p-1 text-sm">{like.itinerary_id.name}</p>
                                </Anchor>
                            ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl">My comments</h2>
                    <div className="flex items-center border-t flex-1 max-h-0 border-neutral-400 my-4"></div>
                    <div className="flex flex-wrap gap-4 xs:gap-8">
                        {comments &&
                            comments.map((comment) => (
                                <Anchor to={"/city/" + comment.itinerary_id.city_id} key={comment._id} className="flex max-xs:flex-wrap gap-2 w-96 overflow-hidden dark:bg-white/20 bg-neutral-50 rounded-lg shadow-md hover:scale-105 duration-200">
                                    <img className="xs:w-36 aspect-video object-cover" src={comment.itinerary_id.photo} alt="" />
                                    <div className="grid p-2">
                                        <h3 className="font-bold">{comment.itinerary_id.name}</h3>
                                        <p className="line-clamp-2">"{comment.content}"</p>
                                    </div>
                                </Anchor>
                            ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl">My created itineraries</h2>
                    <div className="flex items-center border-t flex-1 max-h-0 border-neutral-400 my-4"></div>
                    <div className="flex flex-wrap gap-4 xs:gap-8"> {itineraries && itineraries?.map((itinerary) => <PopularTineraryCard key={itinerary._id} className={"w-96"} data={itinerary} />)}</div>
                </section>
            </main>
        </>
    );
}
