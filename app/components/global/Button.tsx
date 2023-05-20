import React from "react";

type OwnProps = {
    buttonText: string;
    textSize?: 'text-sm' | 'text-md' | 'text-lg' | 'text-xl';
    width: number;
};

const Button: React.FC<OwnProps> = (
    {
        buttonText,
        textSize,
        width
    }
) => {
    console.log(width)
    return (
        <button
            className={`
                ${width ? `w-[${width}px]` : ''}
                text-lg ${textSize ? textSize : ''}
                py-4 px-4 rounded-lg
                text-center font-bold
                bg-blue-300
            `}
        >
            {buttonText}
        </button>

    )
}

export default Button;