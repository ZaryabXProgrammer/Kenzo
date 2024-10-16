

const ProductCol = () => {
    return (
        <div className="flex flex-col md:flex-row bg-gray-900  text-white mx-auto p-4 px-[5%] lg:px-[9%]">
            {/* Left side - Text content */}
            <div className="md:w-1/2 p-4 md:p-8">
                <div className="border border-gray-700 p-6 rounded-lg">
                    <h2 className="text-xl md:text-2xl font-bold text-white mb-4">Ethereal Dreams NFT Collection</h2>
                    <p className="text-gray-400 mb-4 text-sm md:text-base">
                        Unlock exclusive digital art: +83% rarity guarantee (1) unique blockchain authentication (2)
                    </p>
                    <p className="text-gray-400 mb-4 text-sm md:text-base">
                        100% verified ownership: secure and transparent transactions.
                    </p>
                    <p className="text-gray-400 mb-4 text-sm md:text-base">
                        94% collectors report increased portfolio value. (3)
                    </p>

                    <h3 className="font-semibold text-white mt-6 mb-2 text-sm md:text-base">Collector Benefits:</h3>
                    <ul className="list-none space-y-2 text-gray-400">
                        <li className="text-sm md:text-base">+59% potential for long-term value appreciation</li>
                        <li className="text-sm md:text-base">+59% exclusive community access</li>
                        <li className="text-sm md:text-base">+57% priority access to future drops</li>
                        <li className="text-sm md:text-base">-43% risk with secure blockchain storage</li>
                    </ul>

                    <p className="text-gray-400 mt-6 text-xs md:text-sm">
                        These benefits are based on industry trends and collector experiences. (5)
                    </p>

                    <div className="mt-4 text-gray-400 text-xs space-y-1">
                        <p>(1) Based on rarity algorithm, with 100 unique pieces</p>
                        <p>(2) Utilizing Ethereum blockchain technology</p>
                        <p>(3) 6-month study with 50 collectors, self-reported data</p>
                        <p>(4) Estimated value appreciation based on market analysis</p>
                        <p>(5) Disclaimer: NFT values can fluctuate, invest responsibly</p>
                    </div>
                    <button className="w-full bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-700 transition duration-300 mt-4">
                        Mint Now
                    </button>
                </div>
            </div>

            {/* Right side - Image */}
            <div className="md:w-1/2 mt-4 md:mt-0 flex items-center justify-center overflow-hidden">
                <img
                    src="https://cdn.pixabay.com/photo/2022/04/30/19/59/dream-7166281_960_720.jpg"
                    alt="Product Model"
                    className="w-[90%] h-[40vh] md:h-[84vh] rounded-lg shadow-lg object-cover transition-transform"
                />
            </div>
        </div>
    );

};

export default ProductCol;