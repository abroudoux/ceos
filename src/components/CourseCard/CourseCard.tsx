import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartSimple, faClock } from "@fortawesome/free-solid-svg-icons";

import { Course } from "@/models/course.model";

import { Badge } from "@/components/ui/badge"



interface CourseCardProps {
    course: Course;
};

export const CourseCard : React.FC<CourseCardProps> = ({ course }) => {
    const getBadgeColor = (topic : string) : string => {
        switch (topic.toLowerCase()) {
            case "code":
                return "green";
            case "video":
                return "red";
            case "design":
                return "pink"
            case "marketing":
                return "purple"
            case "communication":
                return "orange"
            default:
                return "blue";
        };
    };
    return (
        <Link to={`/courses/${course.id}`} className="rounded-lg my-2 border-grey-light border-[1px] flex-row-center-between py-2 px-5 w-full" key={ course.id || 'defaultKey' }>
            <ul className="flex-col-center-between">
                <Badge variant={getBadgeColor(course.topic)} className="mb-3">{ course.topic }</Badge>
                <li className="text-2xl font-normal mb-1">{ course.title }</li>
                <li className="text-md font-light text-muted-foreground mb-4">{ course.description }</li>
                <ul className="flex-row-center-start gap-3">
                    <li className="font-light text-base"><FontAwesomeIcon icon={faChartSimple} /> { course.level }</li>
                    <li className="font-light text-base"><FontAwesomeIcon icon={faClock} /> { course.duration }min</li>
                </ul>
            </ul>
        </Link>
    );
};