import React, { FC, PropsWithChildren, ReactNode } from "react";

type OwnProps = PropsWithChildren & {
  tooltipText: string;
};

const Tooltip: FC<OwnProps> = ({ tooltipText, children }) => {
  return (
    <>
      {/* Section that is wrapped by the tooltip */}
      <section className="relative inline-block">
        <section>{children}</section>
      </section>
    </>
  );
};

export default Tooltip;
