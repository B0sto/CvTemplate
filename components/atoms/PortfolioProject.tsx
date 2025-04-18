import React from 'react'
import Image from 'next/image'

interface PortfolioProjectProps {
    imageMain: string
    imageSecondary: string
    title: string
    description: string
    resourceUrl: string
}

const PortfolioProject: React.FC<PortfolioProjectProps> = ({
    imageMain,
    imageSecondary,
    title,
    description,
    resourceUrl,
}) => {
    return (
        <div className="w-full flex flex-col lg:flex-row gap-[20px] items-stretch">
            {/* Main Image */}
            <div className="relative w-full lg:w-1/3 aspect-[308/190]">
                <Image
                    src={`/${imageMain}`}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded"
                />
            </div>

            {/* Text Content */}
            <div className="w-full lg:w-1/3 border border-[#DDD] p-[20px] flex flex-col gap-y-[10px] justify-between">
                <div>
                    <h3 className="font-opensans font-bold text-[#26C17E] leading-[19.2px]">
                        {title}
                    </h3>
                    <p className="font-opensans text-[14px] text-[#222935] leading-[21px] mt-2">
                        {description}
                    </p>
                </div>
                <a
                    href={resourceUrl}
                    className="text-[#26C17E] font-opensans text-sm underline mt-auto"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View resource
                </a>
            </div>

            {/* Secondary Image */}
            <div className="relative w-full lg:w-1/3 aspect-[308/190]">
                <Image
                    src={`/${imageSecondary}`}
                    alt={`${title} preview`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded"
                />
            </div>
        </div>
    )
}

export default PortfolioProject
