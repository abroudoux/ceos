import { FormEvent } from "react";


export interface SelectContentProps {
    onChange: (e: FormEvent<HTMLDivElement>) => void;
    value: string;
};
