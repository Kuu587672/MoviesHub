import React from 'react'

function HeaderItem({name, Icon}) {
  return (
    <div className='group text-white flex items-center gap-2 text-12 font-semibold cursor-pointer'>
        <Icon className='
            group-hover:text-gray-400 
            transition-colors 
            duration-300' />
        <div className='
            relative
            group-hover:text-gray-400 
            transition-colors 
            duration-300
            '>
                {name}

                {/* Underline effect */}
                <span className='
                    absolute
                    left-0
                    -bottom-1
                    h-[2px]
                    w-0
                    bg-gray-400
                    group-hover:w-full
                    transition-all
                    duration-300'
                    >
                </span>
        </div>
    </div>
  )
}

export default HeaderItem