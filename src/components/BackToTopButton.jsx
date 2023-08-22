import { useEffect, useState } from "react";

export default function BackToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    function handleScroll(){
        setIsVisible(window.scrollY > 0)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return <button onClick={scrollToTop} className={`z-30 fixed bottom-40 right-4 px-3 py-1 text-2xl text-white fa-solid fa-arrow-up hover:scale-110 active:animate-ping transition ease-in-out duration-300 rounded-full bg-blue-600 shadow-md ${isVisible ? "block" : "hidden"}`}></button>;
}
