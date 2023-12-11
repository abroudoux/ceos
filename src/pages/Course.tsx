import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { CourseProps } from "@/models/course.model";
import { supabase } from "@/lib/supabase"; 
import { Button } from "@/components/ui/button";


export default function Course() {
    const { id } = useParams();
    const [course, setCourse] = useState<CourseProps | null>(null);

    useEffect(() => {
        const fetchCourse = async () => {
            try {
                const { data, error } = await supabase.from('courses').select('*').eq('id', id).single();
                if (error) {
                    console.error('Error fetching course:', error.message);
                } else {
                    setCourse(data);
                }
            } catch (error: any) {
                console.error('Error fetching course:', error.message);
            }
        };

        fetchCourse();
    }, [id]);

    if (!course) {
        return <div>Loading...</div>;
    };

    return (
        <section className="page">
            <h2>{course.title}</h2>
            <Button variant={"outline"}>
                <Link to="/">Accueil</Link>
            </Button>
        </section>
    );
};

