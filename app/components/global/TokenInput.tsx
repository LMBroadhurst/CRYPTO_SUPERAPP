import React from "react";

type OwnProps = {
    value: number | undefined;
    handleOnChange: (e: any) => void;
};

const TokenInput: React.FC<OwnProps> = (
    {
        value,
        handleOnChange
    }
) => {

    return (
        <div className={'inline-flex flex-row w-fit'}>
            <input
                className={'border-2 border-gray-500 rounded-lg h-28 px-2 text-5xl'}
                value={value ? value : undefined}
                placeholder={'0'}
                type={'number'}
                onChange={handleOnChange}
            />

            <div className={'-ml-28 min-w-max self-center flex flex-col items-end gap-2 text-xl'}>
                <p className={''}>Token: ETH</p>

                <p>Balance: 0</p>
            </div>
        </div>
    )
}

export default TokenInput;