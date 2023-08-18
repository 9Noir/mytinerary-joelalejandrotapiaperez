import { Link as Anchor } from "react-router-dom";
export default function Footer() {
    return (
        <footer className="text-slate-100 py-8 relative">
            <div className="absolute top-0 left-0 w-full h-full bg-slate-700"></div>
            <div className="relative flex flex-wrap gap-4 px-4 justify-between w-full max-w-[1291px] mx-auto">
                <div className="space-y-2 grid">
                    <Anchor to="/home" className="text-xl font-bold">
                        Home
                    </Anchor>
                    <Anchor to="/cities">Cities</Anchor>
                    <Anchor to="/signin">Login</Anchor>
                </div>
                <div className="space-y-2">
                    <p className="text-xl font-bold">Contact Us</p>
                    <p>123 Street, City</p>
                    <p>Email: contact@mytinerary.com</p>
                    <p>Phone: (123) 456-7890</p>
                </div>
                <div className="space-y-2 grid">
                    <p className="text-xl font-bold">Follow Us</p>
                    <Anchor>
                        <i className="fa-brands fa-square-facebook pr-2"></i>Facebook
                    </Anchor>
                    <Anchor>
                        <i className="fa-brands fa-square-instagram pr-2"></i>Instagram
                    </Anchor>
                    <Anchor>
                        <i className="fa-brands fa-square-twitter pr-2"></i>Twitter
                    </Anchor>
                </div>
            </div>
        </footer>
    );
}