import React from "react";
import Header from "@/components/global/Header";
import UniswapV1View from "@/components/uniswapv1/UniswapV1View";

type OwnProps = {};

const UniswapV1: React.FC<OwnProps> = () => {

    return (<main>
        <Header />

        <section className={'flex flex-col'}>
            <UniswapV1View />
        </section>

    </main>
    );
}

export default UniswapV1;