import LeftSide from '@/components/organisms/LeftSide'
import MainSide from '@/components/organisms/MainSide'
import React from 'react'

const CvTemplate = () => {
  return (
    <div className='flex gap-x-[35px] h-screen min-h-screen'>
      <LeftSide/>
      <MainSide/>
    </div> 
  )
}

export default CvTemplate