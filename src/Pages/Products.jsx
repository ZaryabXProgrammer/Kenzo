import React, { useEffect } from "react"
import ProductCol from "../Components/ProductPage/ProductCol"
import TopProductInf from "../Components/ProductPage/TopProductInf"
import ProductSlider from "../Components/ProductPage/ProductSlider"
import TextImgSlider from "../Components/ProductPage/TextImgSlider"
import AllProductSlider from "../Components/ProductPage/AllProductSlider"
import { useLocation } from "react-router-dom"


const Products = () => {

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname])


    return (
        <React.Fragment>


            <article className="overflow-x-hidden">

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