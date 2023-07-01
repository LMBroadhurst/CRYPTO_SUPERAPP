import { StaticImageData } from "next/image";

type SocialItem = {
    href: string;
    icon: React.JSX.Element;
}

type NavigationTab = {
    text: string;
    key: string;
}

type ContentObject = {
    url: string;
    type: string;
    title: string;
    description: string;
    date: string;
    image: StaticImageData;
}

export {
    type SocialItem,
    type NavigationTab,
    type ContentObject
};