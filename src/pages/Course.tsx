import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import ReactMarkdown from "react-markdown";

import { CourseProps } from "@/models/course.model";
import { supabase } from "@/lib/supabase";
import { getBadgeColor } from "@/lib/getBadgeColor";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

// import lists from "@/content/lists";



export default function Course() {
    const { id } = useParams();
    const [course, setCourse] = useState<CourseProps | null>(null);

    useEffect(() => {
        const fetchCourse = async () => {
            try {
                const { data, error } = await supabase.from('courses').select('*').eq('id', id).single();
                if (error) {
                    console.error('Error fetching course:', error.message);
                } else {
                    setCourse(data);
                };
            } catch (error: any) {
                console.error('Error fetching course:', error.message);
            }
        };

        fetchCourse();
    }, [id]);

    if (!course) {
        return <div className="page">Loading...</div>;
    };

    const badgeColor = getBadgeColor(course.topic);

    return (
        <section className="page">
            <Link to="/">
                <FontAwesomeIcon icon={faArrowLeft} />
            </Link>
            <article className="rounded-lg my-2 border-grey-light border-[1px] flex-column-center-center py-6 px-5 w-full">
                <ul className="flex flex-row gap-2 mb-5">
                    <li>
                        <Badge variant={badgeColor}>{ course.topic }</Badge>
                    </li>
                    <li>
                        <Badge variant="outline">{ course.duration }min</Badge>
                    </li>
                    <li>
                        <Badge variant="outline">{ course.level }</Badge>
                    </li>
                </ul>
                <h1 className="text-3xl font-normal mb-2">{ course.title }</h1>
                <p className="text-base font-light text-muted-foreground mb-4">{ course.description }</p>
                <ReactMarkdown>{ course.content }</ReactMarkdown>
            </article>
            <div className="flex-row-center-center gap-4 mt-6">
                <p>Cet article vous a-t'il été utile ?</p>
                <RadioGroup defaultValue="oui" className="flex-row-center-center">
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="oui" id="r1" />
                        <Label htmlFor="r1">Oui</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="non" id="r2" />
                        <Label htmlFor="r2">Non</Label>
                    </div>
                </RadioGroup>
            </div>
            <div className="mt-8 flex-row-center-center w-full">
                <Button variant={"outline"}>
                    <Link to="/">Terminer</Link>
                </Button>
            </div>
        </section>
    );
};

