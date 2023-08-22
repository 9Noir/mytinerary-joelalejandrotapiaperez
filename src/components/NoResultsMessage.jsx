export default function NoResultsMessage({icon,title,text} ) {
    return (
        <div className="grid place-content-center grow">
            <div className="flex flex-col text-center gap-2 text-slate-500 max-w-lg bg-slate-300 shadow-lg rounded-md p-4">
                <i className={"text-9xl "+icon}></i>
                <h2 className="text-4xl font-medium">{title}</h2>
                <p className="text-2xl">{text}</p>
            </div>
        </div>
    );
}
