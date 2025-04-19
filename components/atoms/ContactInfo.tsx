import React from 'react'
import Image from 'next/image'

interface ContactInfoProps {
  contactIcon: string;
  contactDesc: string;
  contactSubDesc?: string;
}

const ContactInfo = ({ contactIcon, contactDesc, contactSubDesc = '' }: ContactInfoProps) => {
  return (
    <div className='flex items-center gap-x-[20px]'>
      <Image
        src={`/${contactIcon}`}
        alt={`${contactDesc} icon`}
        width={30}
        height={30}
      />
      <div className='flex flex-col'>
        <p className='font-opensans font-bold leading-[19.2px] text-[#222935]'>{contactDesc}</p>
        {contactSubDesc && <a href={`${contactSubDesc}`} target='_blank'  className='font-opensans leading-[19.2px] text-[#667081]'>{contactSubDesc}</a>} 
      </div>
    </div>
  );
};

export default ContactInfo;
