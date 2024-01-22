import Image from "next/image";

const Loading = () => (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center backdrop-blur-md z-50">
        <div
            className="w-16 h-16 border-4 border-t-transparent border-button shadow-button drop-shadow-lg rounded-full animate-spin">
        </div>
    </div>
);

export default Loading;
