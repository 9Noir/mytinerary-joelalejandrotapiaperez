import { Link as Anchor } from "react-router-dom";

export default function Button({ children, className, ...restProps }) {
    return (
        <Anchor {...restProps} className={`hover:bg-blue-600 active:animate-ping transition ease-in-out duration-300 bg-blue-700 text-white shadow-lg font-bold rounded-lg p-3 text-center ${className}`}>
            {children}
        </Anchor>
    );
}
