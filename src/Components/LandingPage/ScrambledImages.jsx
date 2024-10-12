

const ScrambledImages = () => {
    // Array of image data
    const images = [
        {
            src: "https://img.freepik.com/free-photo/door-leading-magical-world_23-2151038309.jpg?t=st=1728727817~exp=1728731417~hmac=0907a6f87ab90a8d2c0ab3800f1015cea28c20deeb88dfb0ef8498e7cfeb4fe3&w=900",
            alt: "#_",
            rotation: "rotate-6"
        },
        {
            src: "https://img.freepik.com/free-photo/bigfoot-represented-neon-glow_23-2151322874.jpg?t=st=1728727807~exp=1728731407~hmac=c15d9a3e37e33482f00d5c218e0e4fc403481ad1dcff94239f4776d89f471024&w=900",
            alt: "#_",
            rotation: "-rotate-12"
        },
        {
            src: "https://img.freepik.com/free-photo/futuristic-set-with-dj-charge-music-using-virtual-reality-glasses_23-2151418203.jpg?t=st=1728727800~exp=1728731400~hmac=92a951b562b8b9a04fcbbab86ad1c21cd378df02ee29b48eb8d7ea8662c57d34&w=996",
            alt: "#_",
            rotation: "rotate-6"
        },
        {
            src: "https://img.freepik.com/free-photo/door-leading-magical-world_23-2151038343.jpg?t=st=1728727838~exp=1728731438~hmac=38e3214b22f0fe0f8dc1f4e028b8cfa9d197c84802dad9d439140fe7cd758c40&w=900",
            alt: "#_",
            rotation: "-rotate-12"
        }
    ];

    return (
        <section className="bg-zinc-50 overflow-hidden h-auto md:px-[9%] px-[16%] md:pt-[1%] pt-[21%] md:pb-[1%] mb-[5%] md:mb-0">


         
            <div className=" mx-auto py-12 lg:py-10 space-y-24 h-svh flex flex-col justify-center">
                <h1 className=" text-center font-semibold text-red-600 md:text-5xl pt-[4%] text-3xl">Get Amazing NFT Collection</h1>

                <div className="flex flex-col sm:flex-row mx-auto">
                    {/* Starts component */}
                    {images.map((image, index) => (
                        <a href="#_" key={index}>
                            <img
                                src={image.src}
                                className={`rounded-xl ${image.rotation} hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom`}
                                alt={image.alt}
                            />
                        </a>
                    ))}
                    {/* Ends component */}
                </div>
             
              
            </div>
        </section>
    );
};

export default ScrambledImages;
