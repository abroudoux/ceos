import loader from "@/assets/videos/loading.mp4";


export default function Loader() {
    return (
        <div className="w-full h-full flex-col-center-center absolute top-0 left-0 bg-black z-50">
            <video autoPlay loop muted style={{ maxWidth: "100%", maxHeight: "100%" }}>
                <source src={ loader } type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};