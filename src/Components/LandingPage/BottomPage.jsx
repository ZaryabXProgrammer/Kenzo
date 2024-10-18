import { useState } from "react";


const faqs = [
    {
        question: "What is CangCoins?",
        answer: "CangCoins 是一家私人收藏機構，收藏了來自唐、宋、元、明、清以及極為罕見的北宋時期的文化遺產。這些符合国际拍賣行標準的珍品因其後朝代時期的精湛工藝，深受西方收藏家的追捧。 CangCoins is a private collection of cultural relics from the Tang, Yuan, Ming, Qing, and extremely rare Northern Song dynasties. These auction-worthy treasures are highly sought after by Western collectors for their exquisite craftsmanship from later dynasties."
    },
    {
        question: "How do we utilize NFTs in our collection?",
        answer: "我們為每件藝術品鑄造不可替代的代幣（NFT），這些代幣可以在Web3 平台上分割、購買、出售和儲存。我們的部分藏品，如汝窯葫蘆瓶和洗，歷史可追溯到近千年，至今從未向公眾開放。如今，這些珍貴的歷史瑰寶將被注入區塊鏈，並可在去中心化金融(DeFi)交易所進行交易。We mint non-fungible tokens (NFTs) for each piece of art, which can be divided, bought, sold, and stored on the Web3 platform. Some of our collections, such as a Ru kiln gourd bottle and bowl, date back more than a thousand years and have never been available to the public. Now, these precious historical gems will be available on the blockchain and can be traded on decentralized finance (DeFi) exchanges."
    },
    {
        question: "What is the significance of the unique ID associated with each NFT?",
        answer: "每個NFT 都擁有獨一無二的識别碼，作為藝術品的代幣ID。這些NFT 包含了文物的名稱、詳細描述、科學檢測結果、圖像、影片、鑑定報告和3D掃描，以確保其真實性和完整性。每個NFT 的特徵清單也會被列出，並在整個收藏中進行排名。極為稀有的實體藝術品NFT將被特别分類為頂級珍品。每件博物館藏品均配備了近場通訊（NFC）晶片，實現即時驗證和認證。Each NFT is paired with a unique ID, serving as its digital signature and guaranteeing authenticity and integrity. This identifier includes comprehensive details and high-resolution imagery, ensuring complete transparency. With CangCoins, we are redefining the concept of art ownership, making these cultural treasures accessible to a select global audience in an entirely new and refined way."
    },
    {
        question: "What is CangCoins' mission?",
        answer: "藏幣致力於透過博物館托管與區塊鏈創新，將這些宏偉資產代幣化，推動和深化文物的保護、展示與傳承。我們的目標是將這些壯麗的藝術珍品推廣至全球，弘揚中國文化的深厚遺產並彰顯其獨特魅力。At CangCoins, our mission is to preserve and celebrate the world’s most esteemed art through innovative digital transformation. We are committed to sharing the profound heritage of Chinese culture with discerning audiences, turning these rare treasures into timeless, accessible digital assets."
    },
    {
        question: "How does CangCoins contribute to the protection and display of cultural relics?",
        answer: "我們的工作不僅是收藏，還包括透過博物館的托管和區塊鏈技術的應用，提升文物的保護和展示。通過這些創新，我們旨在確保文化遺產能夠世代相傳。Our work goes beyond collection; it includes enhancing the protection and display of cultural relics through museum custodianship and the application of blockchain technology. Through these innovations, we aim to ensure that cultural heritage can be passed down through generations."
    }
];

const BottomPage = () => {



    const [openIndex, setOpenIndex] = useState(null); // State to track the open FAQ item
    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <div className="bg-gray-900 px-[2%]" id="aboutUs">

                <section className="lg:flex hidden overflow-hidden flex-row gap-10 pb-[1%] pt-[5%] relative lg:h-auto">
                
                 

     
                    <article className="rightSide flex-1  text-white py-10 px-5 ">
                        <div className="container flex flex-col gap-5">
                            <h2 className="text-4xl font-bold">創新 Innovation</h2>
                            <p className="text-2xl leading-relaxed text-gray-300">
                                我們正在徹底改變藝術品擁有權的方式
                                We are revolutionizing historical art ownership, minting relic NFTs to the Blockchain. These masterpieces are fractionalized and available across decentralized platforms to anyone with an Ethereum wallet.
                            </p>
                            
                        </div>
                    </article>

                    <article className="leftSide flex-1 bg-gray-900 py-10 text-white border border-themeOrange">
                        <div className="container flex flex-col gap-5 p-5">
                            <h2 className="text-4xl font-bold">About Us</h2>
                            <div className="flex flex-col divide-y divide-gray-700">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="py-5">
                                        <summary
                                            className="py-2 cursor-pointer flex items-center justify-between"
                                            onClick={() => toggleFAQ(index)}
                                        >
                                            <p className="text-2xl">{faq.question}</p>
                                            {/* Arrow icon */}
                                            <img
                                                className={`w-6 h-6 transition-transform duration-300 ${openIndex === index ? "transform rotate-180" : ""}`}
                                                src="https://img.icons8.com/ios-filled/50/ef4b22/expand-arrow.png" // Change this URL to your desired arrow icon
                                                alt="arrow"
                                            />
                                        </summary>
                                        <div
                                            className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? "max-h-[auto] opacity-100" : "max-h-0 opacity-0"
                                                }`}
                                        >
                                            <div className="py-4">
                                                <p className="text-gray-300 text-[20px] leading-relaxed ">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </article>
                </section>


                <section className="lg:hidden flex flex-col gap-3">
                    <article className="leftSide bg-gray-900 py-10 text-white border border-themeOrange mt-[4%] h-auto z-10">
                        <div className="container flex flex-col gap-5 p-2 px-5 py-4">
                            <article className="flex flex-row items-center lg:justify-start justify-center gap-5">
                                <span className="w-[2.5rem] h-[1px] rounded-xl bg-themeGray mr-5 ml-3"></span>
                                <div className="relative flex items-center justify-center">
                                    <span className="absolute left-[-28px] w-2 h-2 bg-themeOrange rounded-full animate-pulse"></span>
                                    <span className="self-center text-2xl whitespace-nowrap">
                                        {/* <span className="text-gray-300 tracking-wider">About Us</span> */}
                                    </span>
                                </div>
                            </article>

                            <h2 className="mb-2 text-4xl font-bold sm:text-5xl text-center">About Us</h2>

                            <div className="flex flex-col divide-y divide-gray-700">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="py-5 sm:py-7">
                                        <summary
                                            className="py-2 cursor-pointer flex items-center justify-start"
                                            onClick={() => toggleFAQ(index)}
                                        >
                                            <img
                                                className="w-10 h-6 mr-4 mb-2 max-w-full"
                                                src="https://img.icons8.com/?size=100&id=37321&format=png&color=ef4b22"
                                                alt="icon"
                                            />
                                            <p className="text-2xl text-left">{faq.question}</p>
                                        </summary>
                                        <div
                                            className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? "max-h-auto opacity-100" : "max-h-0 opacity-0"
                                                }`}
                                        >
                                            <div className="px-1 py-4 max-w-[95vw]">
                                                <p className="pl-[6%] text-gray-300 text-[18px] leading-relaxed">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </article>

                   
                </section>
            </div>

         

        </>
    );

}

export default BottomPage