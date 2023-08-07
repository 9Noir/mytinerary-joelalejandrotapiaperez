import { useParams } from "react-router-dom";

export default function City() {
    const { city_id } = useParams();
    return <div>City</div>;
}
