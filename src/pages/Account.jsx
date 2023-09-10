import { useEffect } from "react";
import { Link as Anchor, Navigate } from "react-router-dom";
import BgImg from "../components/BgImg";
import { useDispatch, useSelector } from "react-redux";
import { readLikes, readComments, readUserItineraries } from "../store/actions/usersActions";
import PopularTineraryCard from "../components/PopularTineraryCard";

export default function Account() {
    const user = useSelector((store) => store.auth.user);
    if (!user) return <Navigate to="/signin" />;

    const dispatch = useDispatch();
    const likes = useSelector((store) => store.users.likes);
    const comments = useSelector((store) => store.users.comments);
    const itineraries = useSelector((store) => store.users.itineraries);

    useEffect(() => {
        dispatch(readLikes(user._id));
        dispatch(readComments(user._id));
        dispatch(readUserItineraries(user._id));
    }, []);

    return (
        <>
            <BgImg className="!h-1/4" url={"./img/account.jpg"}></BgImg>
            <main className="dark:text-neutral-300">
                <section className="h-[25vh] flex justify-center items-center text-neutral-100">
                    <h1 className="text-4xl font-bold ">My Account</h1>
                </section>
                <section>
                    <h2 className="text-2xl">My likes</h2>
                    <div className="flex items-center border-t flex-1 max-h-0 border-neutral-400 my-4"></div>
                    <div className="flex flex-wrap gap-8 group">
                        {likes &&
                            likes.map((like) => (
                                <Anchor to={"/city/" + like.itinerary_id.city_id} key={like._id} className="grid aspect-square w-24 text-center border border-neutral-300/60 dark:bg-transparent bg-neutral-100 rounded-lg shadow-md overflow-hidden group-hover:brightness-[.85] hover:!filter-none hover:scale-105 duration-200">
                                    <img className="w-full object-cover aspect-video" src={like.itinerary_id.photo} alt="" />
                                    <p className="p-1 text-sm drop-shadow-lg">{like.itinerary_id.name}</p>
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
                                <Anchor to={"/city/" + comment.itinerary_id.city_id} key={comment._id} className="flex max-xs:flex-wrap gap-2 w-96 overflow-hidden border border-neutral-300/60 dark:bg-transparent bg-neutral-100 rounded-lg shadow-md hover:scale-105 duration-200">
                                    <img className="xs:w-36 aspect-video object-cover" src={comment.itinerary_id.photo} alt="" />
                                    <div className="grid p-2">
                                        <h3 className="font-bold">{comment.itinerary_id.name}</h3>
                                        <p className="italic line-clamp-2">"{comment.content}"</p>
                                    </div>
                                </Anchor>
                            ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl">My created itineraries</h2>
                    <div className="flex items-center border-t flex-1 max-h-0 border-neutral-400 my-4"></div>
                    {itineraries &&
                        itineraries?.map((itinerary) => (
                            <PopularTineraryCard key={itinerary._id} className={"w-56 aspect-square"} data={itinerary} />

                            // <div key={id} className="grid">
                            //     <img className="w-20 object-cover aspect-video" src={itinerary.photo} alt="" />
                            //     <div>{itinerary.name}</div>
                            // </div>
                        ))}
                </section>
            </main>
        </>
    );
}
