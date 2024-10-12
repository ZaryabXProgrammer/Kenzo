import React from "react"
import ProductCol from "../Components/ProductPage/ProductCol"
import TopProductInf from "../Components/ProductPage/TopProductInf"
import ProductSlider from "../Components/ProductPage/ProductSlider"
import TextImgSlider from "../Components/ProductPage/TextImgSlider"
import AllProductSlider from "../Components/ProductPage/AllProductSlider"


const Products = () => {

    return (
        <React.Fragment>


            <article className="overflow-x-hidden pt-[9%] px-[10%]">

                <TopProductInf />



            </article>


            <ProductCol />


            <ProductSlider />

            <TextImgSlider />

            <AllProductSlider />


        </React.Fragment>

    )

}

export default Products