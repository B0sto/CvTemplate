import React from 'react'
import Image from 'next/image'

interface LeftSideComp {
  iconName: string
  text: string
  isReduced: boolean
}

const LeftSideComponent = ({ iconName, text, isReduced }: LeftSideComp) => {
  return (
    <div className={`flex items-center gap-x-[20px] cursor-pointer transition-all duration-250 ${isReduced ? 'justify-center' : ''}`}>
      <Image src={`/${iconName}`} alt={text} width={14} height={14} />
      <p className={`transition-opacity duration-300 ${text ? 'block' : 'hidden'} font-opensans text-[#667081] leading-[19.2px]`}>{text}</p>
    </div>
  )
}

export default LeftSideComponent
