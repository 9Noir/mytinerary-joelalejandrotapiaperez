export default function Button({ children, className }) {
    return <button className={`hover:bg-blue-600 bg-blue-700 text-white shadow-lg font-bold rounded-lg p-3 text-center ${className}`}>{children}</button>;
}
