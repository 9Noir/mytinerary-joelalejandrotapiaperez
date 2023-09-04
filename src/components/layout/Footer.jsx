import { Link as Anchor } from "react-router-dom";
export default function Footer() {
    return (
        <footer className="flex justify-center text-neutral-100 py-8 bg-slate-600 dark:border-t-2 border-slate-600 dark:bg-black">
            <div className="flex flex-wrap gap-8 px-4 justify-between w-[1291px] hover:[&_a]:underline [&_a]:underline-offset-8 [&_a]:decoration-4">
                <div className="grid gap-2">
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
