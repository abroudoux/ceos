import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartSimple, faClock } from "@fortawesome/free-solid-svg-icons";

import { Course } from "@/models/course.model";

import { Badge } from "@/components/ui/badge"


interface CourseCardProps {
    course: Course;
};

export const CourseCard : React.FC<CourseCardProps> = ({ course }) => {
    return (
        <li className="rounded-lg my-2 border-grey-light border-[1px] flex-row-center-between py-2 px-5 w-full" key={ course.title || 'defaultKey' }>
            <ul className="flex-col-center-between">
                <Badge variant={"outline"} className="mb-3">{ course.topic }</Badge>
                <li className="text-2xl font-normal mb-1">{ course.title }</li>
                <li className="text-md font-light text-muted-foreground mb-4">{ course.description }</li>
                <ul className="flex-row-center-start gap-3">
                    <li className="font-light text-base"><FontAwesomeIcon icon={faChartSimple} /> { course.level }</li>
                    <li className="font-light text-base"><FontAwesomeIcon icon={faClock} /> { course.duration }min</li>
                </ul>
            </ul>
        </li>
    );
};