import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Navigate } from "react-router-dom";

import { CourseProps } from "@/models/course.model";
import { supabase } from "@/lib/supabase";
import useStore from "@/lib/store";
import { useTheme } from "@/config/theme-provider";

import { CourseCard } from "@/components/CourseCard/CourseCard";
import { Label } from "@/components/ui/label";


export default function Search() {
	const { token, isLoading, setIsLoading } = useStore();
	const [courses, setCourses] = useState<CourseProps[]>([]);
	const [filteredCourses, setFilteredCourses] = useState<CourseProps[]>([]);
    const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
	const { theme } = useTheme();

	const filterOptions = ["code", "video", "design", "marketing", "communication"];

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
			setFilteredCourses(data || []);
		};

		setIsLoading(false);
	};

    const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const filter = e.target.value;
        setSelectedFilter(filter);

        if (filter) {
            const filtered = courses.filter((course) => course.topic === filter);
            setFilteredCourses(filtered);
        } else {
            setFilteredCourses(courses);
        };
    };

	if (isLoading) {
		return <div className="page">Chargement..</div>
	};

	if (!token) {
        return <Navigate to="/welcome" />;
    };

	return (
		<section className="page">
			<div className="mb-10">
				<h1 className="text-4xl mb-4 font-fields">Toutes les leçons</h1>
				<div>
					<Label htmlFor="filter" className="text-lg font-light font-fields">Topic :</Label>
					<select id="filter" onChange={(e) => handleFilterChange(e)} value={selectedFilter || ""} className={`ml-2 border-[1px] ${theme === "dark" ? "border-white" : "border-black"} font-light font-fields py-2 px-3 rounded-lg mb-3`} >
						<option value="">tout</option>
						{filterOptions.map((option) => (
							<option key={option} value={option}>
								{option}
							</option>
						))}
					</select>
            	</div>
				<ul>
					{filteredCourses.map((course) => (
						<li>
							<CourseCard key={course.id} course={course} />
						</li>
					))}
				</ul>
			</div>
		</section>
  	);
};

