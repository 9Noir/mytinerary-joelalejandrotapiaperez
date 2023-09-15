import { RouterProvider } from "react-router-dom";
import router from "./router";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { tokenSignin } from "./store/actions/authActions";

function App() {
    const dispatch = useDispatch();
    const [isAuthReady, setIsAuthReady] = useState(false);

    useEffect(() => {
        localStorage.token ? dispatch(tokenSignin()).then(() => setIsAuthReady(true)) : setIsAuthReady(true);
    }, [isAuthReady]);
    
    return !isAuthReady ? null : <RouterProvider router={router} />;
}

export default App;
