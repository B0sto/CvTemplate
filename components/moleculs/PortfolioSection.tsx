import React from 'react'
import SectionHeader from '../atoms/SectionHeader'
import Image from 'next/image'
import PortfolioProject from '../atoms/PortfolioProject'

const PortfolioSection = () => {
  return (
    <section className='flex flex-col gap-y-[40px]'>
        <SectionHeader header='Portfolio'/>      
         
         <PortfolioProject imageMain='portfolioimg1.jpg' title='Some text' description='Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.' resourceUrl='#' imageSecondary='portfolioimg2.jpg'/>
    </section>
  )
}

export default PortfolioSection