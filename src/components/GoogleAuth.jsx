import { useEffect, useRef } from "react";
import axios from "axios";

export default function () {
    let googleButton = useRef();
    const handleCredentialResponse = async (response) => {
        const data = { token_id: response.credential };
        console.log(data)
        // const userResponse = await axios.post(import.meta.VITE_API_URL + "/auth/google", data);
        // console.log(userResponse, response);
    };

    useEffect(() => {
        window.onload = function () {
            window.google.accounts.id.initialize({
                client_id: import.meta.env.VITE_GOOGLE_ID,
                callback: handleCredentialResponse,
            });
            window.google.accounts.id.renderButton(googleButton.current, { theme: "filled_black", size: "medium", type: "standard", text: "signin_with", shape: "rectangular" });
        };
    }, []);
    return <div ref={googleButton}></div>;
}
