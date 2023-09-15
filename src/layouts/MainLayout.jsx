import { Outlet } from "react-router-dom";
import NavBar from "../components/layout/NavBar";
import Footer from "../components/layout/Footer";
import BackToTopButton from "../components/layout/BackToTopButton";
import ScrollToTop from "../components/layout/ScrollToTop";
import NotificationBox from "../components/layout/NotificationBox";
export default function MainLayout() {
    return (
        <>
            <NotificationBox />
            <NavBar />
            <Outlet />
            <Footer />
            <BackToTopButton />
            <ScrollToTop />
        </>
    );
}
