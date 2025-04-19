import React from 'react'
import Image from 'next/image'

interface FeedbackProps {
    feedback: string,
    authorImg: string,
    authorName: string,
    authorWebsite: string
}

const Feedback = ({ feedback, authorImg, authorName, authorWebsite }: FeedbackProps) => {
    return (
        <div className='flex flex-col gap-y-[20px]'>
            <div className="feedback p-[15px] bg-[#EEE]">
                <p className='text-[#222935] font-opensans leading-[21px]'>{feedback}</p>
            </div>

            <div className="author flex items-center gap-x-[20px]">
                <Image src={`/${authorImg}`} alt={`${authorName} icon`} width={50} height={50} />
                <p className='font-opensans text-[12px] leading-[14.4px] text-[#222935]'>{authorName}, <span><a className='font-opensans text-[12px] leading-[14.4px] text-[#26C17E]' href={`${authorWebsite}`} target='_blank'>{authorWebsite}</a></span></p>
            </div>
        </div>
    )
}

export default Feedback