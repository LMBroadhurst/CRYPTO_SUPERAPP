import {StaticImageData} from 'next/image'

type SocialItem = {
    href: string
    icon: React.JSX.Element
}

type CardContents = {
    url: string
    title: string
    description: React.ReactNode
    date: string
    image: StaticImageData
    tags: string[]
}

export {type SocialItem, type CardContents}
