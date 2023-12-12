import { useState, useEffect } from "react";
import { toast } from "sonner";

import { CourseProps } from "@/models/course.model";
import { supabase } from "@/lib/supabase";
import useStore from "@/lib/store";
import { SelectContentProps } from "@/models/select-content-props";

import { CourseCard } from "@/components/CourseCard/CourseCard";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label";


export default function Courses() {
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

	const handleFilterChange = (filter: string | null) => {
		setSelectedFilter(filter);
		if (filter) {
		  const filtered = courses.filter((course) => course.topic === filter);
		  setFilteredCourses(filtered);
		} else {
		  setFilteredCourses(courses);
		}
	};

	if (isLoading) {
		return <div className="page">Chargement..</div>
	};

	return (
		<section className="page">
			<h1 className="text-3xl mb-3">Toutes les leçons</h1>
			{/* <div className="flex-row-center">
                <Label htmlFor="filter">Filtrer par :</Label>
                <Select>
                    <SelectTrigger>
						<SelectValue placeholder="Tous" />
					</SelectTrigger>
					<SelectContent onChange={(e) => handleFilterChange((e.target as HTMLInputElement).value)} value={selectedFilter as SelectContentProps|| ""} as={SelectContentProps} >
						<SelectGroup>
							{filterOptions.map((option) => (
								<SelectItem key={option} value={option}>
									{option}
								</SelectItem>
							))}
						</SelectGroup>
					</SelectContent>
                </Select>
            </div> */}
            {filteredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
            ))}
		</section>
  	);
};

