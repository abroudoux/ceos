import { useState, useEffect } from "react";

import { Course } from "@/models/course.model";
import { supabase } from "@/lib/supabase";

import { CourseCard } from "@/components/CourseCard/CourseCard";


export default function Home() {
	const [courses, setCourses] = useState<Course[]>([]);

	useEffect(() => {
		getCourses();
	}, []);

	async function getCourses() {
		const { data, error } = await supabase.from('courses').select('*');

		if (error) {
		  	console.error('Error fetching courses:', error.message);
		} else {
		  	setCourses(data || []);
		};
	};

	return (
		<section className="page">
			<h1 className="text-3xl mb-10">Recommendations</h1>
			{courses.map((course) => (
        		<CourseCard key={course.title} course={course} />
      		))}
		</section>
  	);
};
