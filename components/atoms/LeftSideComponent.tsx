import React from "react"

interface LeftSideComponentProps {
  icon: React.ComponentType<{ isActive: boolean }>
  text: string
  isReduced: boolean
  isActive: boolean
}

const LeftSideComponent = ({ icon: Icon, text, isReduced, isActive }: LeftSideComponentProps) => {
  return (
    <div className={`flex items-center ${isReduced ? "justify-center" : ''} gap-x-[20px] cursor-pointer transition-all duration-300`}>
      <Icon isActive={isActive} />
      {!isReduced && (
        <p className={`leading-[19.2px] font-opensans ${isActive ? 'text-[#26C17E]' : 'text-[#667081]'}`}>
          {text}
        </p>
      )}
    </div>
  )
}

export default LeftSideComponent
