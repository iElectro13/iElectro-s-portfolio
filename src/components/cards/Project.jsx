import React from 'react'

const Project = ({url, img, title}) => {
  return (
    <a href={url} className='w-full aspect-video overflow-hidden relative group transition-all'>
        <img src={img} alt={title} className='object-cover h-full w-full'/>
        <div className='w-full h-full absolute bg-neutral-900/90 top-0 left-0 hidden group-hover:flex flex-col justify-center items-center Z-20 transition-all'>
            <h2 className='text-neutral-100 font-bold'>{title}</h2>
        </div>
    </a>
  )
}

export default Project