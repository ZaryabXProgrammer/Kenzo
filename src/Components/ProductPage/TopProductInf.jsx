import { useRef, useEffect } from 'react';

const TopProductInf = () => {
    const images = [
        'https://cdn.pixabay.com/photo/2024/08/16/14/21/ai-generated-8973949_960_720.png',
        'https://cdn.pixabay.com/photo/2019/12/14/07/21/mountain-4694346_960_720.png',
        'https://cdn.pixabay.com/photo/2022/02/23/15/56/technology-7030913_960_720.png',
    ];

    const imageContainerRef = useRef(null);
    const mainContainerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (mainContainerRef.current && imageContainerRef.current) {
                imageContainerRef.current.scrollTop = mainContainerRef.current.scrollTop;
            }
        };

        mainContainerRef.current.addEventListener('scroll', handleScroll);

        return () => {
            mainContainerRef.current.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div ref={mainContainerRef} className="flex h-screen overflow-y-auto">
            {/* Left side - Fixed height container with scrollable images */}
            <div className="w-1/2 p-4 overflow-hidden h-screen">
                <div
                    ref={imageContainerRef}
                    className="h-full overflow-y-scroll scroll-smooth custom-scrollbar-hide"
                    style={{ scrollbarWidth: 'none' }}
                >
                    {images.map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt={`Product image ${index + 1}`}
                            className="w-full mb-4 rounded-lg shadow-md"
                        />
                    ))}
                </div>
            </div>

            {/* Right side - Fixed Product Details */}
            <div className="w-1/2 p-8 bg-white">
                <h2 className="text-5xl mb-4">NFT TAILWIND</h2>
                <p className="text-gray-500 mb-6 text-[17px]">
                    Product description goes here. This is a placeholder for the actual product details.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi at est id natus necessitatibus ea ut incidunt. Doloremque distinctio sequi neque libero eveniet! Laborum, exercitationem eligendi dolore consectetur non ullam doloribus vel, delectus pariatur deserunt recusandae a, perspiciatis iste provident.
                </p>
                <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">Key Features:</h3>
                    <ul className="list-disc list-inside text-gray-600">
                        <li>Feature 1</li>
                        <li>Feature 2</li>
                        <li>Feature 3</li>
                    </ul>
                </div>
                <div className="mb-6">
                    <p className="text-sm text-gray-500">30 ML</p>
                </div>
                <button className="w-50px text-black border border-black bg-white py-3 px-6  hover:bg-black hover:text-white transition duration-300">
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default TopProductInf;