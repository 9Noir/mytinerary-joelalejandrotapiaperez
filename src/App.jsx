import { RouterProvider } from "react-router-dom";
import router from "./router";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { tokenSignin } from "./store/actions/authActions";

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        localStorage.token && dispatch(tokenSignin());
    }, []);
    return <RouterProvider router={router} />;
}

export default App;
