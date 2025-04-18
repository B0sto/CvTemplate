import React from 'react'

interface SkillsIndicatorProps {
    skill: string,
    percentage: number
}

const SkillsIndicator: React.FC<SkillsIndicatorProps> = ({skill, percentage}) => {
  return (
    <div className='bg-[#26C17E] px-[15px] py-[5px]' style={{width: `${percentage}%`}}>
        <span className='font-opensans leading-[19.2px] text-[#FFF]'>{skill}</span>
    </div>
  )
}

export default SkillsIndicator