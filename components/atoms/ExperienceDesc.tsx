import React from 'react'

interface ExperienceDescProps {
    place: string
    years: string
    role: string
    description: string
}

const ExperienceDesc: React.FC<ExperienceDescProps> = ({ place, years, role, description }) => {
    return (
        <div className='flex gap-x-[30.3px] pb-[30px]'>
            <div className="place flex flex-col gap-y-[5px]">
                <div className="font-opensans font-bold leading-[19.2px] text-[#222935]">{place}</div>
                <div className="font-opensans text-[#667081] leading-[19.2px]">{years}</div>

            </div>

            <div className="stack flex flex-col gap-y-[5px]">
                <div className="font-opensans text-[#222935] font-bold leading-[19.2px]">{role}</div>
                <p className="font-opensans text-[14px] text-[#222935] leading-[21px]">{description}</p>

            </div>
        </div>
    )
}

export default ExperienceDesc
