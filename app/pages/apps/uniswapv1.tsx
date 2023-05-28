import React from "react";
import Header from "@/components/global/Header";
import UniswapV1View from "@/components/uniswapv1/UniswapV1View";
import Footer from "@/components/global/Footer";

type OwnProps = {};

const UniswapV1: React.FC<OwnProps> = () => {

    return (
        <main className={'flex flex-col justify-between h-screen'}>
            <Header />
            <UniswapV1View />
            <Footer />
        </main>
    );
}

export default UniswapV1;