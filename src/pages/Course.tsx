import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Course } from "@/models/course.model";
import { supabase } from "@/lib/supabase"; 


const Course = () => {
    const { id } = useParams();
    const [course, setCourse] = useState<Course | null>(null);

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
        <div>
            <h2>{course.title}</h2>
        </div>
    );
};

export default Course;
