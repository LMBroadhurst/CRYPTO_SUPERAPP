import React, {useState} from "react";
import {Card, Modal} from "antd";
import SwapTokens from "@/components/apps/uniswapv1/SwapTokens";
import AddLiquidity from "@/components/apps/uniswapv1/AddLiquidity";
import {PlusOutlined} from "@ant-design/icons";

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
    const handleTabChange = (key: string) => setActiveTabKey(key);


    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => setIsModalOpen(true);
    const handleOk = () => setIsModalOpen(false);
    const handleCancel = () => setIsModalOpen(false);

    const swapExtras = (): JSX.Element => {

        return (
            <div className={'flex flex-row justify-center'}>
                <button className={'border p-2 px-4 rounded'} onClick={showModal}>Settings</button>
            </div>
        )
    }

    const addLiquidityExtras = (): JSX.Element => {

        return (
            <div className={'flex flex-row justify-center gap-2'}>
                <button className={'border p-2 px-4 rounded'} onClick={showModal}>Liquidity Positions</button>

                <button className={'border p-2 px-4 rounded'} onClick={showModal}>Settings</button>

                <button className={'border w-10 rounded flex justify-center items-center'} onClick={showModal}>
                    <PlusOutlined />
                </button>
            </div>
        )
    }

    return (
        <div className={'flex flex-col justify-center items-center'}>
            <Card
                title={<h2 className={'text-2xl'}>Uniswap V1 🦄</h2>}
                className={'mx-auto w-[800px] h-[600px] flex flex-col justify-center'}
                tabList={tabList}
                activeTabKey={activeTabKey}
                tabBarExtraContent={activeTabKey == 'addLiquidity' ? addLiquidityExtras() : swapExtras()}
                onTabChange={handleTabChange}
            >
                {activeTabKey == 'swap' && <SwapTokens />}
                {activeTabKey == 'addLiquidity' && <AddLiquidity />}
                {/*{activeTabKey == 'tokens' && <Tokens />}*/}
            </Card>

            <Modal title="Open Liquidity Positions" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </div>
    )
}

export default UniswapV1View;