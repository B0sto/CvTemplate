import TriangleIcon from '@/public/TriangleIcon'
import React from 'react'

interface EducationTitleProps {
    title: string,
    descripiton: string
}

const EducationTitle = ({ title, descripiton }: EducationTitleProps) => {
  return (
    <div className="relative ml-6"> 
      <div className='relative p-[15px] bg-[#EEE]'>
        <div className="absolute -left-[10px] top-4">
          <TriangleIcon />
        </div>

        <h3 className='text-[#222935] font-opensans font-bold leading-[19.2px] pb-[5px]'>{title}</h3>
        <p className='text-[#222935] font-opensans text-[14px] leading-[21px]'>{descripiton}</p>
      </div>
    </div>
  )
}

export default EducationTitle
