import React, { useRef } from 'react'
import AboutSection from '../moleculs/AboutSection'
import EducationSection from '../moleculs/EducationSection'
import ExperienceSection from '../moleculs/ExperienceSection'
import SkillsSection from '../moleculs/SkillsSection'
import PortfolioSection from '../moleculs/PortfolioSection'
import ContactsSection from '../moleculs/ContactsSection'
import FeedbacksSection from '../moleculs/FeedbacksSection'
import Image from 'next/image'
import upButton from "@/public/upButton.svg"

const MainSide = () => {
  const mainSideRef = useRef<HTMLDivElement>(null)

  const scrollToTop = () => {
    if (mainSideRef.current) {
      mainSideRef.current.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }
  }

  return (
    <div
      ref={mainSideRef}
      className='pt-[40px] pr-[36px] flex flex-col gap-y-[50px] h-screen overflow-y-auto relative'
    >
      <AboutSection />
      <EducationSection />
      <ExperienceSection />
      <SkillsSection />
      <PortfolioSection />
      <ContactsSection />
      <FeedbacksSection />

      <div
        className="self-end cursor-pointer"
        onClick={scrollToTop}
      >
        <div className="bg-[#222935] w-[30px] h-[30px] flex justify-center items-center rounded-t-[5px]">
          <Image src={upButton} alt="upButton" width={17} height={17} />
        </div>
      </div>
    </div>
  )
}

export default MainSide
