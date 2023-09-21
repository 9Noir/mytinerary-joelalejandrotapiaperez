import React, { useRef, useEffect } from "react";

export default function FacebookAuth() {
    const fbRootRef = useRef(null);

    useEffect(() => {
        // Esta función se ejecutará después de que la página haya cargado completamente.
        window.fbAsyncInit = function () {
            console.log("mount")
            FB.init({
                appId: "627239739607356",
                // autoLogAppEvents : true,
                cookie: true,
                xfbml: true,
                version: "v18.0",
            });
        }();

        
        // Crea el elemento "fb-root" y carga el script de Facebook SDK.
        // const createFbRoot = () => {
        //     const e = document.createElement("script");
        //     e.src = document.location.protocol + "//connect.facebook.net/en_US/all.js";
        //     e.async = true;
        //     fbRootRef.current.appendChild(e);
        // };

        // // Llama a la función para crear "fb-root" después de que el componente se monte.
        // createFbRoot();
    }, []);

    function fb_login() {
        FB.login(
            function (response) {
                if (response.authResponse) {
                    console.log("Welcome!  Fetching your information.... ");
                    //console.log(response); // dump complete info
                    const access_token = response.authResponse.accessToken; //get access token
                    const user_id = response.authResponse.userID; //get FB UID
                    console.log(response.authResponse)

                    FB.api("/me", function (response) {
                        const user_email = response.email; //get user email
                        console.log(user_email)
                        // you can store this data into your database
                    });
                } else {
                    //user hit cancel button
                    console.log("User cancelled login or did not fully authorize.");
                }
            },
            {
                scope: "public_profile,email",
            }
        );
    }

    return (
        <>
            <div id="fb-root" ref={fbRootRef}></div>
            <button onClick={fb_login}>Login using Facebook</button>
        </>
    );
}
