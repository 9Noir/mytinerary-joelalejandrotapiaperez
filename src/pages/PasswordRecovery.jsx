import { useRef, useState } from "react";
import Button from "../components/Button";
import BgImg from "../components/BgImg";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { sendPasswordRecovery, userUpdate } from "../store/actions/authActions";
import { Navigate } from "react-router-dom";
import LoadingPage from "../components/LoadingPage";

export default function PasswordRecovery() {
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const message = useSelector((store) => store.auth.response.message);
    const token = searchParams.get("token");
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const confirmPasswordRef = useRef(null);
    const [arePasswordsEqual, setArePasswordsEqual] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    function handlePasswordsMatch() {
        setArePasswordsEqual(passwordRef.current.value == confirmPasswordRef.current.value);
    }
    function handleForm(event) {
        event.preventDefault();
        setIsLoading(true);
        if (!token) {
            dispatch(sendPasswordRecovery({ email: emailRef.current.value })).then((res) => setIsLoading(false));
        } else {
            localStorage.token = token;
            dispatch(userUpdate({ password: passwordRef.current.value })).then((res) => setIsLoading(false));
        }
    }
    if (message == "USER_UPDATE_SUCCESS") return <Navigate to="/cities" />;
    return (
        <main className="max-w-full">
            <BgImg className="z-0 inset-0" url={"./img/recover.jpg"} />
            <section className="form-section m-auto max-xs:mt-12">
                {!token ? (
                    <div className="space-y-4">
                        <h1 className="text-2xl text-neutral-700 font-bold dark:text-neutral-300 text-center">Password Recovery</h1>
                        <p className="text-neutral-600 dark:text-neutral-300">Enter your email address, and we'll send you a link to reset your password.</p>
                        <form onSubmit={handleForm} className="grid [&_input]:mb-4">
                            <label htmlFor="email">Email:</label>
                            <input ref={emailRef} type="email" name="email" id="email" autoComplete="email" required />
                            <Button className="w-1/2 mx-auto mt-4 relative" type="submit" disabled={isLoading}>
                                Send
                            </Button>
                        </form>
                    </div>
                ) : (
                    <div className="space-y-4">
                        <h2 className="text-2xl text-neutral-700 font-bold dark:text-neutral-300 text-center">Reset Password</h2>
                        <p className="text-neutral-600 dark:text-neutral-300"> Please enter your new password below. Your new password must be at least 6 characters long.</p>
                        <form onSubmit={handleForm} className="grid [&_input]:mb-4">
                            <label htmlFor="password">New Password:</label>
                            <input ref={passwordRef} placeholder="Min 6 characters" minLength={6} type="password" name="password" id="password" autoComplete="new-password" required />
                            <label htmlFor="confirmPassword">Confirm Password:</label>
                            <input ref={confirmPasswordRef} onChange={handlePasswordsMatch} placeholder="Min 6 characters" minLength={6} type="password" name="confirmPassword" id="confirmPassword" autoComplete="new-password" required />
                            <Button className="w-1/2 mx-auto mt-4" type="submit" disabled={!arePasswordsEqual || isLoading}>
                                Save Password
                            </Button>
                        </form>
                    </div>
                )}
            </section>
            <LoadingPage isLoading={isLoading} />
        </main>
    );
}
