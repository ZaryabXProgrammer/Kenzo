const imagesData = [
    {
        title: "Halloween",
        image: "https://cdn.pixabay.com/photo/2022/09/29/17/15/halloween-7487706_960_720.jpg",
    },
    {
        title: "Discount",
        image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
    },
    {
        title: "Mint",
        image: "https://cdn.pixabay.com/photo/2024/02/21/11/34/ai-generated-8587505_960_720.png",
    },
    {
        title: "Dodger",
        image: "https://cdn.pixabay.com/photo/2024/04/13/10/20/peacock-8693634_960_720.jpg",
    },
];

const QuadGallery = () => {
    return (
        <div className="grid grid-cols-2 gap-2 px-[9%] pt-[5%]">
            {imagesData.map((item, index) => (
                <div className="relative group overflow-hidden" key={index}>
                    <div className="aspect-square w-full">
                        <img
                            className="absolute inset-0 h-full w-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-110 group-hover:cursor-pointer"
                            src={item.image}
                            alt={item.title}
                        />
                    </div>
                    <div className="absolute inset-0 flex items-end pb-[7%] justify-center text-white bg-black bg-opacity-30 rounded-lg transition-opacity duration-300">
                        <span className="lg:text-4xl text-lg font-semibold">{item.title}</span>
                    </div>
                </div>
            ))}
        </div>

    );
};

export default QuadGallery;
