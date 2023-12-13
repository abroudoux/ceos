import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Navigate } from "react-router-dom";

import { CourseProps } from "@/models/course.model";
import { supabase } from "@/lib/supabase";
import useStore from "@/lib/store";

import { CourseCard } from "@/components/CourseCard/CourseCard";
import { DailyCourseCard } from "@/components/CourseCard/DailyCourseCard";
import scium1 from "@/assets/img/scium3.png";
import bâ from "@/assets/img/bâ.png";


export default function Home() {
	const { token, username, isLoading, setIsLoading, signOut } = useStore();
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

	if (!token) {
        return <Navigate to="/welcome" />;
    };

	return (
		<section className="page">
			<p className="text-xl font-light mb-4 font-fields">Hello, <span className="font-normal">{ username }!</span></p>
			<div className="mb-10 min-w-lg">
				<div className="w-full flex-row-center-between">
					<h1 className="text-4xl font-fields">L'astuce du jour</h1>
					<img src={ scium1 } alt="Scium" className="w-16 h-auto scaleX(-1) -scale-x-100" />
				</div>
				{latestCourse && (
					<DailyCourseCard key={latestCourse.title} course={latestCourse} />
				)}
			</div>
			<div>
				<div className="w-full flex-row-center-between">
					<h1 className="text-4xl font-fields">Recommandations</h1>
					<img src={ bâ } alt="Bâ" className="w-16 h-auto scaleX(-1) -scale-x-100" />
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
