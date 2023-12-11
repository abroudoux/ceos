import { useState, useEffect } from "react";
import { toast } from "sonner";

import { Course } from "@/models/course.model";
import { supabase } from "@/lib/supabase";
import useStore from "@/lib/store";

import { CourseCard } from "@/components/CourseCard/CourseCard";


export default function Home() {
	const { isLoading, setIsLoading } = useStore();
	const [courses, setCourses] = useState<Course[]>([]);
	const sortedCourses = [...courses].sort((a, b) => b.id - a.id);
	const latestCourse = sortedCourses[0];

	useEffect(() => {
		getCourses();
	}, []);

	async function getCourses() {
		setIsLoading(true);
		const { data, error } = await supabase.from('courses').select('*');

		if (error) {
		  	console.error('Error fetching courses:', error.message);
			toast.error('Error fetching courses');
		} else {
		  	setCourses(data || []);
		};

		setIsLoading(false);
	};

	if (isLoading) {
		return <div className="page">Chargement..</div>
	};

	return (
		<section className="page">
			<div className="mb-10">
				<h1 className="text-3xl mb-3">L'astuce du jour</h1>
				{latestCourse && (
					<CourseCard key={latestCourse.title} course={latestCourse} />
				)}
			</div>
			<h1 className="text-3xl mb-3">Recommandations</h1>
			{courses.map((course) => (
        		<CourseCard key={course.title} course={course} />
      		))}
		</section>
  	);
};
