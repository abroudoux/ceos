import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartSimple, faClock } from "@fortawesome/free-solid-svg-icons";

import { CourseProps } from "@/models/course.model";
import { getBadgeColor } from "@/lib/getBadgeColor";
import { useTheme } from "@/config/theme-provider";

import { Badge } from "@/components/ui/badge";
import tä from "@/assets/img/dailyCourseTä.png";
import täLight from "@/assets/img/light/dailyCourseTäLight.png";


interface CourseCardProps {
    course: CourseProps;
};

export const DailyCourseCard : React.FC<CourseCardProps> = ({ course }) => {

    const { theme } = useTheme();
    const badgeColor = getBadgeColor(course.topic);
    console.log(badgeColor)

    return (
        <Link to={`/courses/${course.id}`} className={`rounded-lg hover:rounded-2xl transition-all my-2 border-green border-[1px] flex-row-center-between py-2 px-5 w-full`} key={ course.id || 'defaultKey' }>
            <div className="flex-col-center-between py-3 px-1">
                <div className="flex-row-center-between mb-5">
                    <Badge variant={ badgeColor } className="mb-3 font-fields">{ course.topic }</Badge>
                    <p className="font-light text-muted-foreground font-fields text-lg">{ course.created_at }</p>
                </div>
                <h2 className="text-3xl font-semibold mb-4 font-fields">{ course.title }</h2>
                <p className="text-lg font-light text-muted-foreground mb-6 font-fields">{ course.description }</p>
                <div className="flex-row-center-center w-full mb-12">
                    <img src={theme === "dark" ? tä : täLight} alt="" className="h-full w-48" />
                </div>
                <ul className="flex-row-center-start gap-3 font-light text-base">
                    <li><FontAwesomeIcon icon={faChartSimple} /> { course.level }</li>
                    <li><FontAwesomeIcon icon={faClock} /> { course.duration }min</li>
                </ul>
            </div>
        </Link>
    );
};