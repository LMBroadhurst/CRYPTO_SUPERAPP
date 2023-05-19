import React, {useState} from "react";
import {Card} from "antd";
import SwapTokens from "@/components/uniswapv1/swap/SwapTokens";

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
    {
        key: 'tokens',
        tab: 'Tokens',
    },
];

const UniswapV1View: React.FC<OwnProps> = () => {

    const [activeTabKey, setActiveTabKey] = useState<string>('swap');

    const handleTabChange = (key: string) => {
        setActiveTabKey(key);
    };

    return (
        <Card
            title={'Uniswap V1 🦄'}
            className={'w-[1000px] mx-auto h-max flex flex-col flex-grow'}
            tabList={tabList}
            activeTabKey={activeTabKey}
            onTabChange={handleTabChange}
        >
            {activeTabKey == 'swap' && <SwapTokens />}
            {activeTabKey == 'addLiquidity' && <p>I work2</p>}
            {activeTabKey == 'tokens' && <p>I work3</p>}
        </Card>
    )
}

export default UniswapV1View;