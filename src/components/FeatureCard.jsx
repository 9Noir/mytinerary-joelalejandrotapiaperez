export default function FeatureCard({ title, src, className }) {
    return (
        <div className={`${className} shadow-lg text-neutral-600 dark:text-neutral-300 shadow-slate-400 dark:bg-none dark:border w-[min(100%,20rem)] xs:h-[30rem] grid gap-4 bg-gradient-to-tl p-4 rounded-lg`}>
            <img className="w-full aspect-square dark:brightness-[.85] m-auto object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.35)] " src={src} alt={`${title} image`} />
            <h3 className="text-xl font-medium text-center">{title}</h3>
        </div>
    );
}
