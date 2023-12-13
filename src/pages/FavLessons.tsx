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


export default function FavLessons() {
    const { token } = useStore();
    const [favoriteCourses, setFavoriteCourses] = useState<CourseProps[]>([]);

    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

        const fetchFavoriteCourses = async () => {
            try {
                const { data, error } = await supabase.from("courses").select("*").in("id", favorites);

                if (error) {
                    console.error("Error fetching favorite courses:", error.message);
                } else {
                    setFavoriteCourses(data || []);
                };

            } catch (error: any) {
                console.error("Error fetching favorite courses:", error.message);
            };
        };

        fetchFavoriteCourses();
    }, []);

    if (!token) {
        return <Navigate to="/welcome/1" />;
    };

    return (
        <section className="page">
            <Link to="/profile">
                <FontAwesomeIcon icon={faArrowLeft} />
            </Link>
            <div className="mb-6">
                <h1 className="text-5xl mb-2 mt-3 font-semibold font-rammetto">Leçons favorites</h1>
                <p className="text-lg font-coolvetica text-muted-foreground font-light">Retrouvez vos astuces préférées</p>
            </div>
            {favoriteCourses.length === 0 ? (
                <p className="text-lg font-light font-coolvetica">Aucune leçon favorite pour le moment.</p>
            ) : (
                favoriteCourses.map((course) => (
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