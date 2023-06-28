import { StaticImageData } from 'next/image';
import React, { FC } from 'react'

type OwnProps = {
  title: string;
  description: string;
  image: StaticImageData;
  date: string;
}

const YoutubePreview: FC<OwnProps> = ({
  title,
  description,
  image,
  date
}) => {
  
  return (
    <div>YoutubePreview</div>
  )
}

export default YoutubePreview