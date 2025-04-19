import React from 'react'
import SectionHeader from '../atoms/SectionHeader'
import Image from 'next/image'
import PortfolioProject from '../atoms/PortfolioProject'

const PortfolioSection = () => {
  return (
    <section className='flex flex-col gap-y-[40px]'>
      <SectionHeader header='Portfolio' />

      <div>
        <div className="choose flex gap-x-[3px] pb-[20px]">
          <p className='font-opensans text-[#26C17E] leading-[19.2px] cursor-pointer'>All</p>
          <p className='leading-[19.2px] font-opensans'>/</p>
          <p className='font-opensans text-[#222935] leading-[19.2px] cursor-pointer'>Code</p>
          <p className='leading-[19.2px] font-opensans'>/</p>
          <p className='font-opensans text-[#26C17E] leading-[19.2px] cursor-pointer'>UI</p>
        </div>


        <PortfolioProject imageMain='portfolioimg1.jpg' title='Some text' description='Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.' resourceUrl='#' imageSecondary='portfolioimg2.jpg' />
      </div>

    </section>
  )
}

export default PortfolioSection