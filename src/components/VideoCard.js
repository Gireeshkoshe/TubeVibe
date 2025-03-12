import React from 'react'

const VideoCard = ({info}) => {
    if (!info) return null;
    const {snippet,statistics}=info;
    const {channelTitle,title,thumbnails}=snippet;
  return (
    <div className='p-2 m-2 w-60 shadow-lg rounded-lg hover:shadow-xl'>
  <img className="rounded-lg w-full" alt='thumbnail' src={thumbnails.medium.url} />
  <ul className='pt-1 space-y-1'>
    <li className='font-bold text-gray-900'>{title}</li>
    <li className='text-gray-600'>{channelTitle}</li>
    <li className='text-sm text-gray-500'>{statistics.viewCount} views</li>
  </ul>
</div>

  )
return 

}

export default VideoCard
