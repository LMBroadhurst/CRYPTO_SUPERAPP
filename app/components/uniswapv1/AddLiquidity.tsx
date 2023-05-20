import React, {useState} from "react";
import TokenInput from "@/components/global/TokenInput";
import Button from "@/components/global/Button";

type OwnProps = {};

const AddLiquidity: React.FC<OwnProps> = () => {

    const [tokenXAmount, setTokenXAmount] = useState<number | undefined>(undefined);
    const [tokenYAmount, setTokenYAmount] = useState<number | undefined>(undefined);
    const handleTokenXChange = (e: any) => setTokenXAmount(e.target.value);
    const handleTokenYChange = (e: any) => setTokenYAmount(e.target.value);




    return (
        <section>
            <form
                className={`
                    flex flex-col justify-center gap-4 
                    mx-auto h-[400px] my-auto w-[450px]
                `}
            >

                <TokenInput
                    value={tokenXAmount}
                    handleOnChange={handleTokenXChange}
                />

                <span className={'-my-3 self-center rounded text-2xl'}>+</span>

                <TokenInput
                    value={tokenYAmount}
                    handleOnChange={handleTokenYChange}
                />

                <Button
                    buttonText={tokenXAmount || tokenYAmount ? 'Add Liquidity' : 'Enter an amount'}
                    width={350}
                />
            </form>


        </section>
    )
};

export default AddLiquidity;