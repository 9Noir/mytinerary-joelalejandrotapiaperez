export default function ProfilePhoto({ url, name, className }) {
    return <img className={`${className} aspect-square object-cover rounded-full shadow-md`} src={url} alt={`Photo of ${name}`} />;
}
