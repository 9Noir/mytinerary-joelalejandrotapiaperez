import NavBar from "../components/NavBar";

export default function HomeLayout({ children }) {
    return (
        <>
            <NavBar />
            {children}
        </>
    );
}
