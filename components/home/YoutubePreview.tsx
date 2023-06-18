import React, { FC } from 'react'

type OwnProps = {
  title: string;
  description: string;
  image: string;
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