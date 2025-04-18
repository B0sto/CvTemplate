import React from 'react'

interface EducationDateProps {
  date: string
}

const EducationDate = ({date}: EducationDateProps) => {
  return (
    <div className='flex flex-col gap-y-[15px] items-center mt-[10px]'>
      <span className='font-opensans font-bold leading-[19.2px]'>{date}</span>
      <div className="line w-[5px] h-[100px] bg-[#26C17E]"></div> 
      
    </div>
  )
}

export default EducationDate