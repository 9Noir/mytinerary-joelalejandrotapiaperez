export default function NoResultsMessage({icon,title,text} ) {
    return (
        <div className="grid place-content-center grow">
            <div className="flex flex-col text-center gap-2 text-neutral-500 dark:text-neutral-300 max-w-lg bg-slate-300 dark:bg-slate-700 shadow-lg rounded-md p-4">
                <i className={"text-9xl "+icon}></i>
                <h2 className="text-4xl font-semibold">{title}</h2>
                <p className="text-2xl">{text}</p>
            </div>
        </div>
    );
}
