import { useState, useEffect } from "react";
import { toast } from "sonner";

import { CourseProps } from "@/models/course.model";
import { supabase } from "@/lib/supabase";
import useStore from "@/lib/store";
import { SelectContentProps } from "@/models/select-content-props";

import { CourseCard } from "@/components/CourseCard/CourseCard";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label";


export default function Search() {
	const { isLoading, setIsLoading } = useStore();
	const [courses, setCourses] = useState<CourseProps[]>([]);
	const [filteredCourses, setFilteredCourses] = useState<CourseProps[]>([]);
    const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

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

	return (
		<section className="page">
			<div className="mb-10">
				<h1 className="text-3xl mb-4 font-fields">Toutes les leçons</h1>
				<div>
					<Label htmlFor="filter" className="text-lg font-light font-fields">Filtrer par :</Label>
					<select id="filter" onChange={(e) => handleFilterChange(e)} value={selectedFilter || ""} className="ml-2 border-[1px] border-white font-light font-fields py-2 px-3 rounded-lg mb-3" >
						<option value="">tous</option>
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

