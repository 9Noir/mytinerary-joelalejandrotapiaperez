export default function Activity({ activityData }) {
    return (
        <>
            <div className="flex flex-col justify-between h-80 p-4 m-4 bg-slate-200/80 rounded-lg shadow-md">
                <img className="w-full h-60 object-cover rounded-sm" src={activityData.photo} alt={`Photo of ${activityData.name}`} />
                <p className="w-80 text-center text-slate-400">{activityData.name}</p>
            </div>
        </>
    );
}
