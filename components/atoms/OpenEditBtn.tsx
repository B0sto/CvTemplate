import OpenEditIcon from '@/public/OpenEditIcon'
import React from 'react'

interface OpenEditBtnProps {
    onClick: () => void;
}

const OpenEditBtn = ({onClick}: OpenEditBtnProps) => {
  return (
    <button onClick={onClick}  className='px-[23px] py-[11px] bg-[#222935] rounded-[5px] flex items-center gap-x-[5px] cursor-pointer'>
        <OpenEditIcon/>
        <span className='font-opensans leading-[19.2px] text-[#FFF]'>Open edit</span>

    </button>
  )
}

export default OpenEditBtn