export default function DesignSystem() {
    return (
        <section className="page">
            <h1 className="mb-5">Design System</h1>
            <p className="mb-2">Colors</p>
            <ul className="flex flex-row gap-2 mb-4">
                <li className="w-20 h-20 rounded-lg bg-background border-2"></li>
                <li className="w-20 h-20 rounded-lg bg-foreground"></li>
                <li className="w-20 h-20 rounded-lg bg-primary"></li>
                <li className="w-20 h-20 rounded-lg bg-primary-foreground"></li>
            </ul>
            <ul className="flex flex-row gap-2 mb-4">
            <li className="w-20 h-20 rounded-lg bg-secondary"></li>
                <li className="w-20 h-20 rounded-lg bg-secondary-foreground"></li>
                <li className="w-20 h-20 rounded-lg bg-muted"></li>
                <li className="w-20 h-20 rounded-lg bg-muted-foreground"></li>
                <li className="w-20 h-20 rounded-lg bg-accent"></li>
            </ul>
        </section>
    );
};