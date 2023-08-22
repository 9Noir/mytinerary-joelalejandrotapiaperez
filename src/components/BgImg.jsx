export default function BgImg({ url, className }) {
    return (
        <div
            className={className + " absolute w-full h-full bg-cover bg-center brightness-[.65] "}
            style={{
                backgroundImage: `url(${url})`,
            }}></div>
    );
}
