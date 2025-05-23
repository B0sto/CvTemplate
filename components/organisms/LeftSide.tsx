import React, { useState } from 'react'
import Image from 'next/image'
import LeftSideComponent from '../atoms/LeftSideComponent'
import BurgerIcon from '@/public/BurgerIcon'
import BackIcon from '@/public/BackIcon'
import AboutIcon from '@/public/AboutIcon'
import EducationIcon from '@/public/EducationIcon'
import ExperienceIcon from '@/public/ExperienceIcon'
import SkillsIcon from '@/public/SkillsIcon'
import PortfolioIcon from '@/public/PortfolioIcon'
import ContactsIcon from '@/public/ContactsIcon'
import FeedbacksIcon from '@/public/FeedbacksIcon'

interface LeftSideProps {
  activeSection: string
  scrollToSection: (section: string) => void
}

const LeftSide = ({ activeSection, scrollToSection }: LeftSideProps) => {
  const [isReduced, setIsReduced] = useState(false)

  const handleReduce = () => {
    setIsReduced(prev => !prev)
  }

  const menuItems = [
    { icon: AboutIcon, label: 'About' },
    { icon: EducationIcon, label: 'Education' },
    { icon: ExperienceIcon, label: 'Experience' },
    { icon: SkillsIcon, label: 'Skills' },
    { icon: PortfolioIcon, label: 'Portfolio' },
    { icon: ContactsIcon, label: 'Contacts' },
    { icon: FeedbacksIcon, label: 'Feedbacks' },
  ]

  return (
    <div className={`${isReduced ? 'w-[54px] px-[7px]' : 'w-[250px] px-[20px]'} bg-[#222935] pt-[20px] pb-[31px] h-screen relative transition-all duration-250 shrink-0 flex flex-col justify-between`}>
      <div>
        <div className="user_container flex justify-center items-center gap-y-[10px] flex-col pb-[40px]">
          <Image src="/Avatar.svg" alt='image' width={isReduced ? 40 : 100} height={isReduced ? 40 : 100} />
          {!isReduced && (
            <p className='font-bold leading-[19.2px] font-opensans text-white'>John Doe</p>
          )}
        </div>

        <div className='about_container flex flex-col gap-y-[38.5px] justify-center'>
          {menuItems.map(item => (
            <div
              key={item.label}
              className="cursor-pointer"
              onClick={() => scrollToSection(item.label)}
            >
              <LeftSideComponent
                icon={item.icon}
                text={!isReduced ? item.label : ''}
                isReduced={isReduced}
                isActive={activeSection === item.label}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-x-[10px] items-center justify-center cursor-pointer">
        <div className={`transition-all duration-200 ${isReduced ? 'bg-[#26C17E] pr-[14px] pl-[12px] py-[8px] rounded-[5px]' : ''}`}>
          <BackIcon />
        </div>
        {!isReduced && (
          <p className='text-[14px] leading-[16.8px] font-opensans text-white'>Go back</p>
        )}
      </div>

      <div className={`absolute top-[20px] ${isReduced ? 'left-[54px]' : 'left-[250px]'} transition-all duration-250`}>
        <BurgerIcon onClick={handleReduce} />
      </div>
    </div>
  )
}

export default LeftSide
