import { useState, useEffect } from 'react';

const ImgCarousel = () => {
    const images = [
        "https://img.freepik.com/free-photo/door-leading-magical-world_23-2151038440.jpg?t=st=1728727899~exp=1728731499~hmac=8510b6659a62a93d9e7e129f7b0c02285fbbcd5d9195bff28d53ba524ac74605&w=900",
        "https://img.freepik.com/free-photo/door-leading-magical-world_23-2151038301.jpg?t=st=1728727980~exp=1728731580~hmac=4ae2afc101529fd39bad12ba3174bb1ef03abd801bc13a10a58cdc8c55468f6b&w=900",
        "https://img.freepik.com/free-photo/door-leading-magical-world_23-2151038290.jpg?t=st=1728727974~exp=1728731574~hmac=3acf9501fdc9d1e98c84356ff9b00f6c4dddb5eed8ac10dae7dfc51c1e9ecd70&w=900",
        "https://img.freepik.com/free-photo/door-leading-magical-world_23-2151038381.jpg?t=st=1728727968~exp=1728731568~hmac=2c3f6edbf0c435529faf976c0604e207443f16af15dd4a2a59fda5770afa2858&w=900",
        "https://img.freepik.com/free-photo/door-leading-magical-world_23-2151038440.jpg?t=st=1728727899~exp=1728731499~hmac=8510b6659a62a93d9e7e129f7b0c02285fbbcd5d9195bff28d53ba524ac74605&w=900",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative w-full max-w-screen-xl mx-auto pb-[10%]">
            <div className="relative h-56 overflow-hidden rounded-lg md:h-[72vh]">
                {images.map((src, index) => (
                    <div
                        key={index}
                        className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <img
                            src={src}
                            className="absolute block w-full h-full object-cover"
                            alt={`Carousel item ${index + 1}`}
                        />
                    </div>
                ))}
            </div>

            {/* Slider controls */}
            <button
                type="button"
                className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={prevSlide}
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
                    <svg
                        className="w-4 h-4 text-white rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 1 1 5l4 4"
                        />
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button
                type="button"
                className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={nextSlide}
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
                    <svg
                        className="w-4 h-4 text-white rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 9 4-4-4-4"
                        />
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </section>
    );
};

export default ImgCarousel;