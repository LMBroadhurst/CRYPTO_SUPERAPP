import React, {useState} from "react";
import {Button} from "antd";
import TokenInput from "@/components/global/TokenInput";

type OwnProps = {

};

const SwapTokens: React.FC<OwnProps> = () => {

    const [tokenToSwapAmount, setTokenToSwapAmount] = useState<number | undefined>(undefined);
    const [tokenToReceiveAmount, setTokenToReceiveAmount] = useState<number>(0);


    const handleTokenToSwapChange = (e: any) => setTokenToSwapAmount(e.target.value);
    const handleTokenToReceiveAmount = (e: any) => setTokenToReceiveAmount(e.target.value);


    return (
        <form className={"flex flex-col gap-4 w-1/2 mx-auto"}>

            <input
                className={'border border-black rounded p-2 py-8 text-xl'}
                // value={tokenToSwapAmount}
                onChange={handleTokenToSwapChange}
            />

            <div className={'-my-8 border self-center z-10 text-white bg-black w-10 h-10 flex flex-col justify-center items-center rounded-md'}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                </svg>
            </div>

            <input
                className={"border border-black rounded p-2 py-8 text-xl"}
                value={tokenToReceiveAmount}
                onChange={handleTokenToReceiveAmount}
            />

            <TokenInput
                value={tokenToSwapAmount}
                handleOnChange={handleTokenToSwapChange}
            />

            <Button className={'py-8'}>Swap Tokens</Button>
        </form>
    )
}

export default SwapTokens;