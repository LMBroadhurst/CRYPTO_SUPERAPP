import React from "react";

type OwnProps = {
    children: React.ReactNode;
    vh: number;
};

const SectionContainer: React.FC<OwnProps> = ({children, vh}) => {

    return (
        <section className={`
            border text-xl px-5 flex flex-col items-center justify-center gap-5 h-[${vh}vh]
            sm:px-10 lg:flex-row-reverse lg:w-[900px] lg:m-auto lg:gap-10 xl:w-[1150px] xl:gap-20
        `}>
            {children}
        </section>
    )
}

export default SectionContainer;