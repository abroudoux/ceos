import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Link } from "react-router-dom";

import { CourseProps } from "@/models/course.model";
import { supabase } from "@/lib/supabase";
import useStore from "@/lib/store";

import { CourseCard } from "@/components/CourseCard/CourseCard";
import { DailyCourseCard } from "@/components/CourseCard/DailyCourseCard";
import scium1 from "@/assets/img/scium3.png";
import tä from "@/assets/img/tä.png";


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
					<h1 className="text-3xl font-fields">L'astuce du jour</h1>
					<img src={ scium1 } alt="Image d'illustration Scium" className="w-16 h-auto scaleX(-1) -scale-x-100" />
				</div>
				{latestCourse && (
					<DailyCourseCard key={latestCourse.title} course={latestCourse} />
				)}
			</div>
			<div className="mb-10">
				<div className="w-full flex-row-center-between">
					<h1 className="text-3xl font-fields">Recommandations</h1>
					<img src={ tä } alt="Image d'illustration Tä" className="w-16 h-auto scaleX(-1) -scale-x-100" />
				</div>
				<ul>
					{courses.map((course) => (
						<li>
							<CourseCard key={course.title} course={course} />
						</li>
					))}
				</ul>
			</div>
		</section>
  	);
};
