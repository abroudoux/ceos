import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Link, Navigate } from "react-router-dom";

import { CourseProps } from "@/models/course.model";
import { supabase } from "@/lib/supabase";
import useStore from "@/lib/store";
import { useTheme } from "@/config/theme-provider";

import { Button } from "@/components/ui/button";
import { CourseCard } from "@/components/CourseCard/CourseCard";
import { DailyCourseCard } from "@/components/CourseCard/DailyCourseCard";
import scium3 from "@/assets/img/scium3.png";
import scium3Light from "@/assets/img/light/scium3Light.png";
import bâ from "@/assets/img/bâ.png";
import bâLight from "@/assets/img/light/bâLight.png";


export default function Home() {
	const { token, username, isLoading, setIsLoading, signOut } = useStore();
	const [courses, setCourses] = useState<CourseProps[]>([]);
	const sortedCourses = [...courses].sort((a, b) => b.id - a.id);
	const latestCourse = sortedCourses[0];
	const { theme } = useTheme();

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

	const lastCourses = sortedCourses.slice(0, 5);

	return (
		<section className="page mb-10">
			<p className="text-xl font-light mb-4 font-fields">Hello, <span className="font-normal">{ username }!</span></p>
			<div className="mb-10 min-w-lg">
				<div className="w-full flex-row-center-between">
					<h1 className="text-4xl font-fields">L'astuce du jour</h1>
					<img src={theme === "dark" ? scium3 : scium3Light} alt="Scium" className="w-16 h-auto scaleX(-1) -scale-x-100" />
				</div>
				{latestCourse && (
					<DailyCourseCard key={latestCourse.title} course={latestCourse} />
				)}
			</div>
			<div>
				<div className="w-full flex-row-center-between">
					<h1 className="text-4xl font-fields">Recommandations</h1>
					<img src={theme === "dark" ? bâ : bâLight} alt="Bâ" className="w-16 h-auto scaleX(-1) -scale-x-100" />
				</div>
				<ul>
					{lastCourses.map((course) => (
						<li>
							<CourseCard key={course.title} course={course} />
						</li>
					))}
				</ul>
				<div className="w-full flex-row-center-center mt-6 mb-4">
					<Link to="/search">
						<Button variant={"outline"}>
							Voir plus
						</Button>
					</Link>
				</div>
			</div>
		</section>
  	);
};
