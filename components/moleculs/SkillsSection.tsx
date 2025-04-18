import React from 'react'
import SectionHeader from '../atoms/SectionHeader'
import SkillsIndicator from '../atoms/SkillsIndicator'
import SkillMeter from '../atoms/SkillMeter'

const SkillsSection = () => {
  return (
    <section className='flex flex-col gap-y-[40px]'>
        <SectionHeader header='Skills'/>

        <div className='flex flex-col gap-y-[5px]'>
            <SkillsIndicator skill='HTML' percentage={100}/>
            <SkillsIndicator skill='CSS' percentage={74}/>
            <SkillsIndicator skill='jQuery' percentage={65}/>
            <SkillsIndicator skill='PHP' percentage={31}/>
            <SkillsIndicator skill='Laravel 2 ' percentage={14}/>

            <SkillMeter/>
        </div>
    </section>
  )
}

export default SkillsSection