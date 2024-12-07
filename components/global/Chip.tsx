import React, {PropsWithChildren, FC} from 'react'

type OwnProps = {
    children: string
    bgColour: string
}

const Chip: FC<OwnProps> & PropsWithChildren = ({children, bgColour}) => {
    return (
        <section className={`p-1 px-2 rounded-3xl text-xs ${bgColour}`}>
            {children}
        </section>
    )
}

export default Chip
