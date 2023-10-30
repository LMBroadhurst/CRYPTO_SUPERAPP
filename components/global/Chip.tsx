import React, { PropsWithChildren, FC } from "react";

type OwnProps = {
  children: string;
  bgColour: string;
};

const Chip: FC<OwnProps> & PropsWithChildren = ({ children, bgColour }) => {
  return (
    <section className={`p-2 px-4 rounded-full text-xs ${bgColour}`}>
      {children}
    </section>
  );
};

export default Chip;
