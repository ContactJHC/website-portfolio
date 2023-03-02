import React from 'react'

export default function PortfolioItem( { id, title, imgUrl, stack, link} ) {
  return (
    <div className='border-2 border-stone-900 dark:border-white rounded-md overflow-hidden'>
        <img
            src={imgUrl}
            alt='portfolio'
            className='w-full h-36 md:h-48 
            object-cover cursor-pointer'
        />
        <div className='w-full p-4'>
            <h3 className='text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold'>
                {title} </h3>
            <p className='flex flex-wrap gap-2 
            flex-row items-center justify-start text-xs dark:text-white md:text-sm'>
                {stack.map(item => (
                    <span key={item.id} className='inline-block px-2 py-1 
                    font-semibold border-2 border-stone-900 dark:border-white rounded-md'>
                        {item.element}
                    </span>
                ))}
            </p>
        </div>
    </div>
  )
}
