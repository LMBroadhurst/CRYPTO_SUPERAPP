import React, { PropsWithChildren, FC } from 'react'

type OwnProps = {
  children: string;
}

const Chip: FC<OwnProps> & PropsWithChildren = ({
  children
}) => {

  return (
    <section className='bg-cyan-800 p-2 px-4 rounded-full text-xs'>
      {children}
    </section>
  )
}

export default Chip