import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import { Badge } from "@/components/ui/badge";
import test from "@/assets/audios/test.mp3";


export default function Podcasts() {
    return (
        <section className="page">
            <Link to="/profile">
                <FontAwesomeIcon icon={faArrowLeft} />
            </Link>
            <h1 className="text-3xl font-fields mb-3 mt-3">Podcasts</h1>
            <ul className="flex-col-center-between rounded-lg hover:rounded-2xl transition-all my-2 border-grey-light border-[1px] py-2 px-5 w-full">
                <Badge variant={"green"} className="mb-3 font-coolvetica font-light">code</Badge>
                <li className="text-xl font-normal mb-1 font-fields">Titre</li>
                <li className="text-md font-extralight text-muted-foreground mb-4 font-fields">Description</li>
                <audio controls src={test} className="w-full bg-transparent border-[1px] rounded-lg my-4" />
            </ul>
        </section>
    );
};