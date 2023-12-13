import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

import { CourseProps } from "@/models/course.model";
import { supabase } from "@/lib/supabase";
import useStore from "@/lib/store";

import { CourseCard } from "@/components/CourseCard/CourseCard";
import { DailyCourseCard } from "@/components/CourseCard/DailyCourseCard";
import scium1 from "@/assets/img/scium3.png";
import tä from "@/assets/img/tä.png";
import { Button } from "@/components/ui/button";


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

	async function signOutSession() {
		const { error } = await supabase.auth.signOut();
		signOut();
	};

	if (!token) {
        return <Navigate to="/welcome/1" />;
    };

	return (
		<section className="page">
			{/* <Link to="/welcome/1">Welcome</Link> */}
			{/* <Button onClick={signOutSession} variant={"outline"}>Sign Out</Button> */}
			<h1 className="text-xl font-light mb-4 font-fields">Hello, { username }</h1>
			<div className="mb-10 min-w-lg">
				<div className="w-full flex-row-center-between">
					<h1 className="text-4xl font-fields">L'astuce du jour</h1>
					<img src={ scium1 } alt="Scium" className="w-16 h-auto scaleX(-1) -scale-x-100" />
				</div>
				{latestCourse && (
					<DailyCourseCard key={latestCourse.title} course={latestCourse} />
				)}
			</div>
			<div className="mb-10">
				<div className="w-full flex-row-center-between">
					<h1 className="text-4xl font-fields">Recommandations</h1>
					<img src={ tä } alt="Tä" className="w-16 h-auto scaleX(-1) -scale-x-100" />
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
