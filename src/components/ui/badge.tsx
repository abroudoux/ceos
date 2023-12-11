import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-extralight transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        green:
          "bg-[#172F22] text-[#65E0AA] border-0",
        purple:
          "bg-[#202049] text-[#B2A9F9] border-0",
        orange:
          "bg-[#331E12] text-[#F49F55] border-0",
        red:
          "bg-[#3B1318] text-[#F29491] border-0",
        pink:
          "bg-[#361530] text-[#F08CCC] border-0",
        blue:
          "bg-[#0F3263] text-[#71B7F9] border-0",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

type CustomColor = "green" | "pink" | "red" | "purple" | "orange" | "blue";

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof badgeVariants> {
    variant?: CustomColor;
  }

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
