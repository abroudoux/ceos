import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartSimple, faClock } from "@fortawesome/free-solid-svg-icons";

import { CourseProps } from "@/models/course.model";
import { getBadgeColor } from "@/lib/getBadgeColor";

import { Badge } from "@/components/ui/badge";


interface CourseCardProps {
    course: CourseProps;
};

export const CourseCard : React.FC<CourseCardProps> = ({ course }) => {

    const badgeColor = getBadgeColor(course.topic);

    return (
        <Link to={`/courses/${course.id}`} className="rounded-lg my-2 border-grey-light border-[1px] flex-row-center-between py-2 px-5 w-full" key={ course.id || 'defaultKey' }>
            <ul className="flex-col-center-between">
                <Badge variant={badgeColor} className="mb-3">{ course.topic }</Badge>
                <li className="text-xl font-normal mb-1">{ course.title }</li>
                <li className="text-base font-light text-muted-foreground mb-4">{ course.description }</li>
                <ul className="flex-row-center-start gap-3">
                    <li className="font-light text-xs"><FontAwesomeIcon icon={faChartSimple} /> { course.level }</li>
                    <li className="font-light text-xs"><FontAwesomeIcon icon={faClock} /> { course.duration }min</li>
                </ul>
            </ul>
        </Link>
    );
};