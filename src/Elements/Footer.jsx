


const Footer = () => {
  return (
    <footer className="bg-gray-900 " id="footer">
      <aside className="container mx-auto p-0 md:p-8 xl:px-0">
        <main className="mx-auto max-w-7xl px-6 pb-10 pt-16">
          <article className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-4">
              <div>
                <a href="/">
                  <div className="flex items-center space-x-2 text-2xl font-medium">
                    <span>
                      {/* <img
                        src="https://www.svgrepo.com/show/452102/slack.svg"
                        alt="AI Logo"
                        width="64"
                        height="64"
                        className="w-16"
                      /> */}
                    </span>
                    <article className="text-themeBlue text-xl font-bold"><span className="text-white">中國朝代藝術
                      Chinese Dynasty Art</span></article>
                  </div>
                </a>
              </div>
              <div className="max-w-md pr-16 text-[15px] pt-[3%] text-gray-200 flex flex-col gap-4">
                <p>我們正在徹底改變藝術品擁有權的方式</p>
                We are revolutionizing historical art ownership, minting relic NFTs to the Blockchain. These masterpieces are fractionalized and available across decentralized platforms to anyone with an Ethereum wallet.
              </div>
             
              
            </div>
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-md font-semibold leading-6 text-white">Collections</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    
                    <li>
                      <a href="#ourCollections" className="text-md leading-6 text-gray-300 hover:text-gray-50">
                        Our Collections
                      </a>
                    </li>
                   
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-md font-semibold leading-6 text-white">Marketplace</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li>
                      <a href="#nftMarketplace" className=" flex flex-col gap-1 text-md leading-6 text-gray-300 hover:text-gray-50">
                        <span>正在交易的NFT</span>
                        <span>NFT Marketplace</span>
                      </a>
                    </li>
                   
                  </ul>
                </div>
              </div>
              
            </div>

          </article>
          <div className="mt-16 border-t border-gray-400/30 pt-8 sm:mt-20 lg:mt-24">
            <div className="text-md text-center text-white">
              Copyright © 2024. 中國朝代藝術
              Chinese Dynasty Art


            </div>
          </div>
        </main>
      </aside>
    </footer>

  )
}

export default Footer