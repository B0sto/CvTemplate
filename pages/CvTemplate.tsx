import LeftSide from '@/components/organisms/LeftSide'
import MainSide from '@/components/organisms/MainSide'
import React, { useState } from 'react'

const CvTemplate = () => {
  const [activeSection, setActiveSection] = useState("About");

  return (
    <div className='flex gap-x-[35px] h-screen min-h-screen'>
      <LeftSide activeSection={activeSection}/>
      <MainSide setActiveSection={setActiveSection}/>
    </div> 
  )
}

export default CvTemplate