import React, {useState} from "react";

type OwnProps = {
    value: number | undefined;
    handleOnChange: (e: any) => void;
    inputTextSize?: 'text-sm' | 'text-md' | 'text-lg' | 'text-xl';
    tabTextSize?: 'text-sm' | 'text-md' | 'text-lg' | 'text-xl';
    width?: number;
};

const TokenInput: React.FC<OwnProps> = (
    {
        value,
        handleOnChange,
        width,
        tabTextSize
    }
) => {

    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => setIsFocused(!isFocused);

    return (
        <div
            className={`
                ${width ? `w-[${width}px]` : ''}
                flex flex-row items-center
                border-2 border-gray-500 rounded-lg 
                h-28 p-2 
            `}
            onClick={handleFocus}
        >
            <input
                className={`
                    text-3xl ${tabTextSize ? tabTextSize : ''}
                    w-2/3
                    focus:outline-0
                `}
                value={value}
                placeholder={'0'}
                type={'number'}
                onChange={handleOnChange}
            />

            <div
                className={`
                    text-base ${tabTextSize ? tabTextSize : ''}
                    w-1/3 text-xl flex flex-col items-end
                `}
            >
                <span>Token: ETH</span>

                <span>Balance: 0</span>
            </div>
        </div>
    )
}

export default TokenInput;