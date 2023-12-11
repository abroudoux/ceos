import { useState, useEffect } from "react";
import { toast } from "sonner";

import { CourseProps } from "@/models/course.model";
import { supabase } from "@/lib/supabase";
import useStore from "@/lib/store";

import { CourseCard } from "@/components/CourseCard/CourseCard";


export default function Courses() {
	const { isLoading, setIsLoading } = useStore();
	const [courses, setCourses] = useState<CourseProps[]>([]);

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
			<h1 className="text-3xl mb-3">Toutes les leçons</h1>
			{courses.map((course) => (
        		<CourseCard key={course.id} course={course} />
      		))}
		</section>
  	);
};
