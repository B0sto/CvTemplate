import React, { useRef, useImperativeHandle, forwardRef, useEffect } from 'react'
import AboutSection from '../moleculs/AboutSection'
import EducationSection from '../moleculs/EducationSection'
import ExperienceSection from '../moleculs/ExperienceSection'
import SkillsSection from '../moleculs/SkillsSection'
import PortfolioSection from '../moleculs/PortfolioSection'
import ContactsSection from '../moleculs/ContactsSection'
import FeedbacksSection from '../moleculs/FeedbacksSection'
import Image from 'next/image'
import upButton from '@/public/upButton.svg'

export interface SectionRefs {
  scrollToSection: (section: string) => void
}

const MainSide = forwardRef(({ setActiveSection }: { setActiveSection: (section: string) => void }, ref) => {
  const mainRef = useRef<HTMLDivElement>(null)

  const sectionsRef = {
    About: useRef<HTMLDivElement>(null),
    Education: useRef<HTMLDivElement>(null),
    Experience: useRef<HTMLDivElement>(null),
    Skills: useRef<HTMLDivElement>(null),
    Portfolio: useRef<HTMLDivElement>(null),
    Contacts: useRef<HTMLDivElement>(null),
    Feedbacks: useRef<HTMLDivElement>(null),
  }

  useImperativeHandle(ref, () => ({
    scrollToSection: (section: string) => {
      const el = sectionsRef[section as keyof typeof sectionsRef]?.current
      if (el && mainRef.current) {
        mainRef.current.scrollTo({
          top: el.offsetTop - 20,
          behavior: 'smooth'
        })
      }
    }
  }))

  useEffect(() => {
    const handleScroll = () => {
      const scrollContainer = mainRef.current
      if (!scrollContainer) return

      const scrollTop = scrollContainer.scrollTop
      const offsetTopMap: { [key: string]: number } = {}

      Object.entries(sectionsRef).forEach(([key, ref]) => {
        if (ref.current) {
          offsetTopMap[key] = ref.current.offsetTop
        }
      })

      const currentSection = Object.entries(offsetTopMap).reduce((closest, [key, offset]) => {
        return scrollTop >= offset - 100 ? key : closest
      }, 'About')

      setActiveSection(currentSection)
    }

    const scrollContainer = mainRef.current
    scrollContainer?.addEventListener('scroll', handleScroll)

    return () => {
      scrollContainer?.removeEventListener('scroll', handleScroll)
    }
  }, [setActiveSection])

  const scrollToTop = () => {
    if (mainRef.current) {
      mainRef.current.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }
  }

  return (
    <div
      ref={mainRef}
      className='pt-[40px] pr-[36px] flex flex-col gap-y-[50px] h-screen overflow-y-auto relative scroll-smooth'
    >
      <div ref={sectionsRef.About} id="About"><AboutSection /></div>
      <div ref={sectionsRef.Education} id="Education"><EducationSection /></div>
      <div ref={sectionsRef.Experience} id="Experience"><ExperienceSection /></div>
      <div ref={sectionsRef.Skills} id="Skills"><SkillsSection /></div>
      <div ref={sectionsRef.Portfolio} id="Portfolio"><PortfolioSection /></div>
      <div ref={sectionsRef.Contacts} id="Contacts"><ContactsSection /></div>
      <div ref={sectionsRef.Feedbacks} id="Feedbacks"><FeedbacksSection /></div>

      <div className="self-end cursor-pointer" onClick={scrollToTop}>
        <div className="bg-[#222935] w-[30px] h-[30px] flex justify-center items-center rounded-t-[5px]">
          <Image src={upButton} alt="upButton" width={17} height={17} />
        </div>
      </div>
    </div>
  )
})

export default MainSide
