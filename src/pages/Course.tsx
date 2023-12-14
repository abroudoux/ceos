import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faHeart } from "@fortawesome/free-solid-svg-icons";
import { Navigate } from "react-router-dom";
import MarkdownPreview from "@uiw/react-markdown-preview";

import { CourseProps } from "@/models/course.model";
import { supabase } from "@/lib/supabase";
import { getBadgeColor } from "@/lib/getBadgeColor";
import useStore from "@/lib/store";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";


export default function Course() {
    const { token } = useStore();
    const { id } = useParams();
    const [course, setCourse] = useState<CourseProps | null>(null);
    const [isFavorite, setIsFavorite] = useState<boolean>(false);
    const [isFinished, setIsFinished] = useState<boolean>(false);

    useEffect(() => {
        const fetchCourse = async () => {
            try {
                const { data, error } = await supabase.from("courses").select("*").eq("id", id).single();

                if (error) {
                    console.error("Error fetching course:", error.message);
                } else {
                    setCourse(data);
                    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
                    setIsFavorite(favorites.includes(data?.id));
                };

            } catch (error: any) {
                console.error("Error fetching course:", error.message);
            };
        };

        fetchCourse();
    }, [id]);

    const toggleFavorite = () => {
        const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
        const index = favorites.indexOf(course?.id || "");

        if (index === -1) {
            favorites.push(course?.id || "");
        } else {
            favorites.splice(index, 1);
        };

        localStorage.setItem("favorites", JSON.stringify(favorites));
        setIsFavorite(!isFavorite);
    };

    const toggleFinished = () => {
        const finished = JSON.parse(localStorage.getItem("finished") || "[]");
        const index = finished.indexOf(course?.id || "");

        if (index === -1) {
            finished.push(course?.id || "");
        } else {
            finished.splice(index, 1);
        };

        localStorage.setItem("finished", JSON.stringify(finished));
        setIsFavorite(!isFinished);
    };

    if (!course) {
        return <div className="page">Loading...</div>;
    };

    if (!token) {
        return <Navigate to="/welcome" />;
    };

    const badgeColor = getBadgeColor(course.topic);

    return (
        <section className="page">
            <Link to="/">
                <FontAwesomeIcon icon={faArrowLeft} />
            </Link>
            <article className="rounded-lg my-2 border-grey-light border-[1px] flex-column-center-center w-full font-coolvetica">
                <div className="pt-4 px-3 w-full">
                    <ul className="flex flex-row gap-2 mb-5">
                        <li>
                            <Badge variant={badgeColor}>{ course.topic }</Badge>
                        </li>
                        <li>
                            <Badge variant="outline">{ course.duration }min</Badge>
                        </li>
                        <li>
                            <Badge variant="outline">{ course.level }</Badge>
                        </li>
                    </ul>
                </div>
                <MarkdownPreview source={ course.content } className="w-full px-3 pb-6 bg-background" />
            </article>
            <div className="mt-8 flex-row-center-center w-full gap-2">
                <Button variant={"outline"} onClick={toggleFavorite} className="flex-row-center" size="icon">
                    <FontAwesomeIcon icon={faHeart} style={{ color: isFavorite ? "red" : "gray" }} />
                </Button>
                <Button variant={"outline"} onClick={toggleFinished}>
                    <Link to="/">Terminer</Link>
                </Button>
            </div>
        </section>
    );
};

