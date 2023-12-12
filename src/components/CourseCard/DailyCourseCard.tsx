import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartSimple, faClock } from "@fortawesome/free-solid-svg-icons";

import { CourseProps } from "@/models/course.model";
import { getBadgeColor } from "@/lib/getBadgeColor";

import { Badge } from "@/components/ui/badge";


interface CourseCardProps {
    course: CourseProps;
};

export const DailyCourseCard : React.FC<CourseCardProps> = ({ course }) => {

    const badgeColor = getBadgeColor(course.topic);

    return (
        <Link to={`/courses/${course.id}`} className="rounded-lg hover:rounded-2xl transition-all my-2 border-grey-light border-[1px] flex-row-center-between py-2 px-5 w-full" key={ course.id || 'defaultKey' }>
            <ul className="flex-col-center-between">
                <Badge variant={badgeColor} className="mb-3 font-fields">{ course.topic }</Badge>
                <li className="text-xl font-normal mb-1 font-fields">{ course.title }</li>
                <li className="text-lg font-extralight text-muted-foreground mb-4 font-coolvetica">{ course.description }</li>
                <ul className="flex-row-center-start gap-3">
                    <li className="font-light text-base"><FontAwesomeIcon icon={faChartSimple} /> { course.level }</li>
                    <li className="font-light text-base"><FontAwesomeIcon icon={faClock} /> { course.duration }min</li>
                </ul>
            </ul>
        </Link>
    );
};