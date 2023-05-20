import React, {useState} from "react";
import {Card} from "antd";
import SwapTokens from "@/components/uniswapv1/SwapTokens";
import Tokens from "@/components/uniswapv1/Tokens";
import AddLiquidity from "@/components/uniswapv1/AddLiquidity";

type OwnProps = {

};

const tabList = [
    {
        key: 'swap',
        tab: 'Swap',
    },
    {
        key: 'addLiquidity',
        tab: 'Add Liquidity',
    },
    // {
    //     key: 'tokens',
    //     tab: 'Tokens',
    // },
];

const UniswapV1View: React.FC<OwnProps> = () => {

    const [activeTabKey, setActiveTabKey] = useState<string>('swap');

    const handleTabChange = (key: string) => {
        setActiveTabKey(key);
    };

    return (
        <div className={'flex flex-col justify-center items-center'}>
            <Card
                title={<h2 className={'text-2xl'}>Uniswap V1 🦄</h2>}
                className={'mx-auto w-[800px] h-[600px] flex flex-col justify-center'}
                tabList={tabList}
                activeTabKey={activeTabKey}
                onTabChange={handleTabChange}
            >
                {activeTabKey == 'swap' && <SwapTokens />}
                {activeTabKey == 'addLiquidity' && <AddLiquidity />}
                {/*{activeTabKey == 'tokens' && <Tokens />}*/}
            </Card>
        </div>
    )
}

export default UniswapV1View;