import LeftSide from '@/components/organisms/LeftSide'
import MainSide from '@/components/organisms/MainSide'
import React, { useState, useRef } from 'react'

export interface SectionRefs {
  scrollToSection: (section: string) => void
}

const CvTemplate = () => {
  const [activeSection, setActiveSection] = useState("About")
  const mainRef = useRef<SectionRefs>(null)

  return (
    <div className='flex gap-x-[35px] h-screen min-h-screen'>
      <LeftSide activeSection={activeSection} scrollToSection={(section) => mainRef.current?.scrollToSection(section)} />
      <MainSide ref={mainRef} setActiveSection={setActiveSection} />
    </div>
  )
}

export default CvTemplate
