import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";
import ScrollToTop from "../components/ScrollToTop";
export default function MainLayout() {
    return (
        <>
            <NavBar />
            <Outlet />
            <Footer />
            <BackToTopButton />
            <ScrollToTop />
        </>
    );
}
