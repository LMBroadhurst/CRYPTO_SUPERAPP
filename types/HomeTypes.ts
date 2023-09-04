import { StaticImageData } from "next/image";

type SocialItem = {
    href: string;
    icon: React.JSX.Element;
}

type ContentObject = {
    url: string;
    title: string;
    description: string;
    date: string;
    image: StaticImageData;
    tags: string[];
}

export {
    type SocialItem,
    type ContentObject
};