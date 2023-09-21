import React from "react";
import ReactDOM from "react-dom";

export default function LoadingPage({ isLoading }) {
    // Evita que la página sea desplazable cuando isLoading es true
    document.body.style.overflow = isLoading ? "hidden" : "auto";
    if (!isLoading) {
        return null; // Si isLoading es false, no se muestra nada
    }

    return ReactDOM.createPortal(
        <div className="!z-[9] absolute min-h-screen flex-grow w-full bg-black flex opacity-50">
            <svg className={`m-auto text-white animate-spin w-28 aspect-square`} xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 512 512">
                <path fill="currentColor" d="M222.7 32.1c5 16.9-4.6 34.8-21.5 39.8C121.8 95.6 64 169.1 64 256c0 106 86 192 192 192s192-86 192-192c0-86.9-57.8-160.4-137.1-184.1c-16.9-5-26.6-22.9-21.5-39.8s22.9-26.6 39.8-21.5C434.9 42.1 512 140 512 256c0 141.4-114.6 256-256 256S0 397.4 0 256C0 140 77.1 42.1 182.9 10.6c16.9-5 34.8 4.6 39.8 21.5z" />
            </svg>
        </div>,
        document.getElementById("root")
    );
}
