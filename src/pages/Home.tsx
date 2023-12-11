import { CourseCard } from "@/components/CourseCard/CourseCard";


export default function Home() {
	return (
		<section className="page">
			<h1 className="text-3xl mb-10">Recommendations</h1>
			<CourseCard topic="code" title="Listes ul/ol" description="Appenez à utiliser les listes en HTML" duration="30min" level="Facile"/>
		</section>
  	);
};
