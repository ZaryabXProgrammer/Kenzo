
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { useEffect, useState } from 'react';
import { products } from '../../Utils/Constants';


const Arrow = ({ left, onClick }) => {
    return (
        <svg
            onClick={onClick}
            className={`w-8 h-8 cursor-pointer absolute top-1/2 -translate-y-1/2 ${left ? 'left-[-2.5rem]' : 'right-[-2.5rem]'
                } z-10`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="grey"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={left ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
            />
        </svg>
    );
};
const ProductSlider = () => {




    const [currentSlide, setCurrentSlide] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
        loop: true, // Enable infinite sliding
        slides: {
            perView: 1,
            spacing: 15,
        },
        breakpoints: {
            '(min-width: 768px)': {
                slides: { perView: 2, spacing: 15 },
            },
            '(min-width: 1024px)': {
                slides: { perView: 4, spacing: 15 },
            },
        },
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
        created() {
            setLoaded(true);
        },
    });

    // Autoplay functionality
    useEffect(() => {
        const interval = setInterval(() => {
            if (instanceRef.current) {
                instanceRef.current.next(); // Move to the next slide
            }
        }, 5000); // Change slide every 4 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, [instanceRef]);

    return (
        <section className="pt-[4%] px-[6%]">


            <article className="flex flex-row items-center justify-between px-[4%]">
                <h1 className="text-2xl font-semibold text-red-600 ">NFT</h1>
                <p className="text-xl font-bold">Get it Now!</p>
            </article>



            <div className="text-center p-10 ">
                <h1 className="font-bold text-4xl mb-4 pb-[4%]">All <span className='text-red-700'>Collections</span> </h1>


                <div className="relative">
                    <div ref={sliderRef} className="keen-slider">
                        {products.map((product) => (
                            <div key={product.id} className="keen-slider__slide">
                                <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl mx-auto">
                                    <a href="#">
                                        <img src={product.imgSrc} alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
                                        <div className="px-4 py-3 w-72">
                                            <span className="text-gray-400 mr-3 uppercase text-xs">{product.brand}</span>
                                            <p className="text-lg font-bold text-black truncate block capitalize">{product.name}</p>
                                            <div className="flex items-center">
                                                <p className="text-lg font-semibold text-black cursor-auto my-3">{product.price}</p>
                                                <del>
                                                    <p className="text-sm text-gray-600 cursor-auto ml-2">{product.originalPrice}</p>
                                                </del>
                                                <div className="ml-auto">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                                                        <path fillRule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                                                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                    {loaded && instanceRef.current && (
                        <>
                            <Arrow
                                left
                                onClick={(e) => e.stopPropagation() || instanceRef.current?.prev()}
                            />
                            <Arrow
                                onClick={(e) => e.stopPropagation() || instanceRef.current?.next()}
                            />
                        </>
                    )}
                </div>
            </div>



        </section>
    )
}

export default ProductSlider