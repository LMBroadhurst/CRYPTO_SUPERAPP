import React, { ReactNode } from "react";

type CCOwnProps = {
    children: ReactNode;
    className?: string;
}

const CenteredContainer: React.FC<CCOwnProps> = ({children, className}) => {

    return (
        <div className={`${className} flex flex-col items-center justify-center`}>
            {children}
        </div>
    )
}

type SCOwnProps = {
    children: React.ReactNode;
    vh: number;
};

const SectionContainer: React.FC<SCOwnProps> = ({children, vh}) => {

    return (
        <section className={`
            h-[${vh}vh]
            border text-xl px-5
            sm:px-10 lg:w-[900px] lg:m-auto lg:gap-10 xl:w-[1150px] xl:gap-20
        `}>
            <section className="flex flex-col justify-center items-center h-full gap-5 lg:flex-row-reverse lg:justify-between">
                {children}
            </section>
        </section>
    )
}

export { CenteredContainer, SectionContainer };