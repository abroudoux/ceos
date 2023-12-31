import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Navigate } from "react-router-dom";

import { CourseProps } from "@/models/course.model";
import { supabase } from "@/lib/supabase";
import useStore from "@/lib/store";

import { CourseCard } from "@/components/CourseCard/CourseCard";
import { Button } from "@/components/ui/button";


export default function FinishedLessons() {
    const { token } = useStore();
    const [finishedCourses, setFinishedCourses] = useState<CourseProps[]>([]);

    useEffect(() => {
        const finished = JSON.parse(localStorage.getItem("finished") || "[]");

        const fetchFinishedCourses = async () => {
            try {
                const { data, error } = await supabase.from("courses").select("*").in("id", finished);

                if (error) {
                    console.error("Error fetching finished courses:", error.message);
                } else {
                    setFinishedCourses(data || []);
                };

            } catch (error: any) {
                console.error("Error fetching favorite courses:", error.message);
            };
        };

        fetchFinishedCourses();
    }, []);

    if (!token) {
        return <Navigate to="/welcome" />;
    };

    return (
        <section className="page">
            <Link to="/profile">
                <FontAwesomeIcon icon={faArrowLeft} />
            </Link>
            <div className="mb-6">
                <h1 className="text-5xl mb-2 mt-3 font-semibold font-rammetto">Leçons terminées</h1>
                <p className="text-lg font-coolvetica text-muted-foreground font-light">Vos leçons précédemment consultées</p>
            </div>
            {finishedCourses.length === 0 ? (
                <p className="text-lg font-light font-coolvetica">Aucune leçon terminée pour le moment.</p>
            ) : (
                finishedCourses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                ))
            )}
            <div className="flex-row-center justify-end w-full">
                <Link to="/profile">
                    <Button variant="outline" className="mt-8 flex-row-center-center w-auto">
                        Retour
                    </Button>
                </Link>
            </div>
        </section>
    );
};