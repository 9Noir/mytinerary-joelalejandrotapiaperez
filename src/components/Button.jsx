import { Link as Anchor } from "react-router-dom";

export default function Button({ type = null, children, className, ...restProps }) {
    const baseClass = "disabled:brightness-75 hover:bg-blue-600 active:animate-ping transition ease-in-out duration-300 bg-blue-700 text-white shadow-lg font-bold rounded-lg p-3 text-center ";
    return type ? (
        <button type={type} {...restProps} className={`${baseClass} ${className}`}>
            {children}
        </button>
    ) : (
        <Anchor {...restProps} className={`${baseClass} ${className}`}>
            {children}
        </Anchor>
    );
}
