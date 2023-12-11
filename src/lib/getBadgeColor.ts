type CustomColor = "green" | "pink" | "red" | "purple" | "orange" | "blue";

export const getBadgeColor = (topic: string) : CustomColor | undefined => {
    switch (topic.toLowerCase()) {
        case "code":
            return "green";
        case "video":
            return "red";
        case "design":
            return "pink"
        case "marketing":
            return "purple"
        case "communication":
            return "orange"
        default:
            return "blue";
    };
};