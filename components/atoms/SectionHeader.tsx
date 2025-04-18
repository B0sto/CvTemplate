import React from 'react'

interface SectionHeaderProps {
    header: string;
}

const SectionHeader = ({header}: SectionHeaderProps) => {
  return (
    <h2 className='text-[#26C17E] font-opensans text-[25px] font-bold leading-[30px]'>{header}</h2>
  )
}

export default SectionHeader 