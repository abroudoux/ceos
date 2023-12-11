import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartSimple, faClock } from "@fortawesome/free-solid-svg-icons";

import { Badge } from "@/components/ui/badge"


type CourseCardProps = {
    topic : string;
    title : string;
    level : string;
    duration : string;
};


export const CourseCard : FC<CourseCardProps> = ( props ) => {
    return (
        <li className="rounded-lg my-6 border-grey-light border-[1px] flex-row-center-between py-3 px-5 w-full">
            <ul className="flex-col-center-between">
                <Badge variant={"outline"} className="mb-3">{ props.topic }</Badge>
                <li className="text-2xl font-normal mb-4">{ props.title }</li>
                <ul className="flex-row-center-start gap-3">
                    <li className="font-light text-base"><FontAwesomeIcon icon={faChartSimple} /> { props.level }</li>
                    <li className="font-light text-base"><FontAwesomeIcon icon={faClock} /> { props.duration }</li>
                </ul>
            </ul>
        </li>
    );
};