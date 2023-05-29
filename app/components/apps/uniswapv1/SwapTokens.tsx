import React, {useState} from "react";
import Button from "@/components/global/Button";
import TokenInput from "@/components/apps/TokenInput";
import {SwapOutlined} from "@ant-design/icons";

type OwnProps = {

};

const SwapTokens: React.FC<OwnProps> = () => {

    const [tokenToSwapAmount, setTokenToSwapAmount] = useState<number | undefined>(undefined);
    const [tokenToReceiveAmount, setTokenToReceiveAmount] = useState<number | undefined>(undefined);
    const handleTokenToSwapChange = (e: any) => setTokenToSwapAmount(e.target.value);
    const handleTokenToReceiveAmount = (e: any) => setTokenToReceiveAmount(e.target.value);


    return (
        <form
            className={`
                flex flex-col justify-center gap-4 
                mx-auto h-[400px] my-auto w-[450px]
            `}
        >

            <TokenInput
                value={tokenToSwapAmount}
                handleOnChange={handleTokenToSwapChange}

            />

            <div
                className={
                    'bg-black self-center -my-6 z-10 text-white ' +
                    'w-10 h-10 rounded text-2xl flex flex-col justify-center'}
            >
                <SwapOutlined rotate={90} />
            </div>

            <TokenInput
                value={tokenToReceiveAmount}
                handleOnChange={handleTokenToReceiveAmount}
            />

            <Button
                buttonText={tokenToSwapAmount || tokenToReceiveAmount ? 'Swap Tokens' : 'Enter an amount'}
                width={350}
            />

        </form>
    )
}

export default SwapTokens;