import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Link } from "react-router-dom";

import { CourseProps } from "@/models/course.model";
import { supabase } from "@/lib/supabase";
import useStore from "@/lib/store";

import { CourseCard } from "@/components/CourseCard/CourseCard";
import scium1 from "@/assets/scium3.png";
import tä from "@/assets/tä.png";


export default function Home() {
	const { isLoading, setIsLoading } = useStore();
	const [courses, setCourses] = useState<CourseProps[]>([]);
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
			{/* <Link to="/welcome/1">Welcome</Link> */}
			<div className="mb-10">
				<div className="w-full flex-row-center-between">
					<h1 className="text-3xl mb-3">L'astuce du jour</h1>
					<img src={ scium1 } alt="Image d'illustration Scium" className="w-12 h-auto scaleX(-1) -scale-x-100" />
				</div>
				{latestCourse && (
					<CourseCard key={latestCourse.title} course={latestCourse} />
				)}
			</div>
			<div className="w-full flex-row-center-between">
				<h1 className="text-3xl mb-3">Recommandations</h1>
				<img src={ tä } alt="Image d'illustration Tä" className="w-12 h-auto scaleX(-1) -scale-x-100" />
			</div>
			{courses.map((course) => (
        		<CourseCard key={course.title} course={course} />
      		))}
		</section>
  	);
};
