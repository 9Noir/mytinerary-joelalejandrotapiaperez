import { Link as Anchor } from "react-router-dom";

export default function Button({ type = null, children, className, ...restProps }) {
    const baseClass = "disabled:cursor-not-allowed disabled:brightness-75 hover:bg-blue-600 active:scale-95 disabled:active:scale-100  transition-all bg-blue-700 text-white shadow-lg font-bold rounded-lg p-3 text-center ";
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
