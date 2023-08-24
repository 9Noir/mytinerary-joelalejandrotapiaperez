import axios from "axios";
import { useEffect, useState } from "react";
import apiUrl from "../apiUrl.js";

export default function Activity({ itinerary_id }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios(apiUrl + "/activities?itinerary_id=" + itinerary_id)
      .then((res) => setData(res.data.response))
      .catch((err) => console.log("Error fetching data: " + err));
  }, []);

  return (
    <>
      {data.map((each) => (
        <div
          key={each._id}
          className="flex flex-col p-4 gap-4 m-auto bg bg-slate-200/80 rounded-lg shadow-md"
        >
          <img
            className="w-60 h-40 object-cover rounded-sm"
            src={each.photo}
            alt={`Photo of ${each.name}`}
          />

          <p className="text-center text-slate-400">{each.name}</p>
        </div>
      ))}
    </>
  );
}
