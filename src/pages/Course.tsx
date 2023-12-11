import { useParams } from "react-router-dom";

export default function Course() {
    const { id } = useParams();

    return (
        <section className="page">
            <p>Course ID : {id}</p>
        </section>
    );
};