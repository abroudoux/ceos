import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";


const badgeVariants = cva("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-extralight transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
            secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
            destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
            outline: "text-foreground",
            green: "bg-bg-green text-green border-0",
            purple: "bg-bg-purple text-purple border-0",
            orange: "bg-bg-orange text-orange border-0",
            red: "bg-bg-red text-red border-0",
            pink: "bg-bg-pink text-pink border-0",
            blue: "bg-bg-blue text-blue border-0",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});

type CustomColor = "green" | "pink" | "red" | "purple" | "orange" | "blue" | "default" | "secondary" | "destructive" | "outline";


export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {
    variant ? : CustomColor;
}


function Badge({ className, variant, ...props }: BadgeProps) {
    return (
        <div className={cn(badgeVariants({ variant }), className)} {...props} />
    );
}


export { Badge, badgeVariants };
