import { useRef, useState } from "react";
import Button from "../components/Button";
import BgImg from "../components/BgImg";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { sendPasswordRecovery, userUpdate } from "../store/actions/authActions";
import { Navigate } from "react-router-dom";

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
            dispatch(sendPasswordRecovery({ email: emailRef.current.value })).then(setIsLoading(false));
        } else {
            localStorage.token = token;
            dispatch(userUpdate({ password: passwordRef.current.value })).then(setIsLoading(false));
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
                                <svg className={`${!isLoading && "hidden"} absolute inset-y-0  right-5 animate-spin w-5 aspect-square`} xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 512 512">
                                    <path fill="currentColor" d="M222.7 32.1c5 16.9-4.6 34.8-21.5 39.8C121.8 95.6 64 169.1 64 256c0 106 86 192 192 192s192-86 192-192c0-86.9-57.8-160.4-137.1-184.1c-16.9-5-26.6-22.9-21.5-39.8s22.9-26.6 39.8-21.5C434.9 42.1 512 140 512 256c0 141.4-114.6 256-256 256S0 397.4 0 256C0 140 77.1 42.1 182.9 10.6c16.9-5 34.8 4.6 39.8 21.5z" />
                                </svg>
                            </Button>
                        </form>
                    </div>
                ) : (
                    <div className="space-y-4">
                        <h2 className="text-2xl text-neutral-700 font-bold dark:text-neutral-300 text-center">Reset Password</h2>
                        <form onSubmit={handleForm} className="grid [&_input]:mb-4">
                            <label htmlFor="password">New Password:</label>
                            <input ref={passwordRef} placeholder="Min 6 characters" minLength={6} type="password" name="password" id="password" autoComplete="new-password" required />
                            <label htmlFor="confirmPassword">Confirm Password:</label>
                            <input ref={confirmPasswordRef} onChange={handlePasswordsMatch} placeholder="Min 6 characters" minLength={6} type="password" name="confirmPassword" id="confirmPassword" autoComplete="new-password" required />
                            <Button className="w-1/2 mx-auto mt-4" type="submit" disabled={!arePasswordsEqual || isLoading}>
                                Save Password
                                <svg className={`${!isLoading && "hidden"} absolute inset-y-0  right-5 animate-spin w-5 aspect-square`} xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 512 512">
                                    <path fill="currentColor" d="M222.7 32.1c5 16.9-4.6 34.8-21.5 39.8C121.8 95.6 64 169.1 64 256c0 106 86 192 192 192s192-86 192-192c0-86.9-57.8-160.4-137.1-184.1c-16.9-5-26.6-22.9-21.5-39.8s22.9-26.6 39.8-21.5C434.9 42.1 512 140 512 256c0 141.4-114.6 256-256 256S0 397.4 0 256C0 140 77.1 42.1 182.9 10.6c16.9-5 34.8 4.6 39.8 21.5z" />
                                </svg>
                            </Button>
                        </form>
                    </div>
                )}
            </section>
        </main>
    );
}
