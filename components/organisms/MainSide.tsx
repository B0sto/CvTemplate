import React, { useEffect, useRef, useState } from 'react'
import AboutSection from '../moleculs/AboutSection'
import EducationSection from '../moleculs/EducationSection'
import ExperienceSection from '../moleculs/ExperienceSection'
import SkillsSection from '../moleculs/SkillsSection'
import PortfolioSection from '../moleculs/PortfolioSection'
import ContactsSection from '../moleculs/ContactsSection'
import FeedbacksSection from '../moleculs/FeedbacksSection'
import Image from 'next/image'
import upButton from '@/public/upButton.svg'

const MainSide = ({ setActiveSection }: { setActiveSection: (section: string) => void }) => {
  const mainSideRef = useRef<HTMLDivElement>(null)

  const sectionRefs = {
    About: useRef<HTMLDivElement>(null),
    Education: useRef<HTMLDivElement>(null),
    Experience: useRef<HTMLDivElement>(null),
    Skills: useRef<HTMLDivElement>(null),
    Portfolio: useRef<HTMLDivElement>(null),
    Contacts: useRef<HTMLDivElement>(null),
    Feedbacks: useRef<HTMLDivElement>(null),
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-section')
            if (id) setActiveSection(id)
          }
        })
      },
      {
        root: mainSideRef.current,
        threshold: 0.5,
        rootMargin: '-10% 0px -20% 0px'
      }
    )

    Object.values(sectionRefs).forEach(ref => {
      if (ref.current) observer.observe(ref.current)
    })

    return () => observer.disconnect()
  }, [setActiveSection])

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
      <div ref={sectionRefs.About} data-section="About"><AboutSection /></div>
      <div ref={sectionRefs.Education} data-section="Education"><EducationSection /></div>
      <div ref={sectionRefs.Experience} data-section="Experience"><ExperienceSection /></div>
      <div ref={sectionRefs.Skills} data-section="Skills"><SkillsSection /></div>
      <div ref={sectionRefs.Portfolio} data-section="Portfolio"><PortfolioSection /></div>
      <div ref={sectionRefs.Contacts} data-section="Contacts"><ContactsSection /></div>
      <div ref={sectionRefs.Feedbacks} data-section="Feedbacks"><FeedbacksSection /></div>

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
