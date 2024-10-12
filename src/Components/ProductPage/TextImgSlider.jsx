import { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TextImgSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
        loop: true,
        slides: {
            perView: 1,
            spacing: 15,
        },
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
        created() {
            setLoaded(true);
        },
    });

    const products = [
        {
            title: "Ethereal Dreams",
            description: "A unique collection of 100 hand-crafted, algorithmically generated art pieces, representing the essence of dreams.",
            image: "https://cdn.pixabay.com/photo/2022/11/30/20/37/animal-7627621_960_720.jpg",
            traits: ["Rare", "Limited Edition", "Unique Color Palette"],
            price: "2.5 ETH"
        },
        {
            title: "Neon City",
            description: "Explore the vibrant, futuristic world of Neon City, where 50 exclusive NFTs await discovery.",
            image: "https://cdn.pixabay.com/photo/2022/10/05/07/34/ai-generated-7500048_960_720.jpg",
            traits: ["Animated", "Glowing Accents", "Exclusive"],
            price: "1.8 ETH"
        },
        {
            title: "Cosmic Odyssey",
            description: "Embark on an intergalactic journey with 20 stunning, astro-inspired NFTs, each a masterpiece.",
            image: "https://cdn.pixabay.com/photo/2022/11/23/10/23/trees-7611768_960_720.jpg",
            traits: ["3D Rendered", "Astronomical Inspiration", "Rare"],
            price: "3.2 ETH"
        },
    ];

    return (
        <div className="relative mx-auto max-w-screen-xl py-8 px-4 sm:px-[5%] lg:px-[9%]">
            <div ref={sliderRef} className="keen-slider">
                {products.map((product, idx) => (
                    <div key={idx} className="keen-slider__slide">
                        <div className="flex flex-col md:flex-row items-center bg-white p-4 sm:p-6 rounded-lg shadow-md">
                            {/* Text content */}
                            <div className="flex-1 md:pr-6 text-center md:text-left">
                                <h2 className="text-2xl sm:text-3xl mb-2 sm:mb-4">{product.title}</h2>
                                <p className="text-gray-600 text-sm sm:text-lg">{product.description}</p>
                            </div>
                            {/* Image */}
                            <div className="flex-shrink-0 mt-4 md:mt-0">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-[8rem] h-[8rem] sm:w-[12rem] sm:h-[12rem] md:w-[14rem] md:h-[14rem] rounded-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {loaded && instanceRef.current && (
                <>
                    {/* Left Arrow */}
                    <button
                        onClick={(e) => e.stopPropagation() || instanceRef.current?.prev()}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    {/* Right Arrow */}
                    <button
                        onClick={(e) => e.stopPropagation() || instanceRef.current?.next()}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </>
            )}

            {loaded && instanceRef.current && (
                <div className="flex justify-center mt-4">
                    {[...Array(instanceRef.current.track.details.slides.length).keys()].map((idx) => (
                        <button
                            key={idx}
                            onClick={() => instanceRef.current?.moveToIdx(idx)}
                            className={`h-2 w-6 sm:w-8 rounded-full mx-1 ${currentSlide === idx ? 'bg-black' : 'bg-gray-300'
                                }`}
                        ></button>
                    ))}
                </div>
            )}
        </div>

    );
};

export default TextImgSlider;