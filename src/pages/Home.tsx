import { CourseCard } from "@/components/CourseCard/CourseCard";


export default function Home() {
	return (
		<section className="page">
			<div className="text-4xl">Recommendations</div>
			<CourseCard topic="code" title="Lists Ul/Ol" duration="30min" level="Facile"/>
		</section>
  	);
};
