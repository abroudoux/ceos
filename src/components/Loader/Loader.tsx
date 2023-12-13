import loader from "@/assets/videos/loading.mp4";
import logo from "@/assets/img/logo.png";


export default function Loader() {
    return (
        <div className="w-full h-full flex flex-col items-center justify-between absolute top-0 left-0 bg-black z-50">
            <div className="mt-8">
                <img src={ logo } alt="logo" className="h-full w-24" />
            </div>
            <video autoPlay loop muted style={{ maxWidth: "100%", maxHeight: "100%" }}>
                <source src={ loader } type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <p className="text-5xl font-fields font-normal mb-36">Chargement..</p>
        </div>
    );
};