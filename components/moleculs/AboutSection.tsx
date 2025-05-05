import React, { useState } from 'react'
import SectionHeader from '../atoms/SectionHeader'
import OpenEditBtn from '../atoms/OpenEditBtn'
import AboutModal from '../atoms/AboutModal'

const AboutSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [aboutText, setAboutText] = useState('Lorem ipsum dolor sit amet, consectetuer adipiscing elit...');

  return (
    <section className="flex flex-col gap-y-[40px]">
      <div className="about_wrapper flex justify-between">
        <SectionHeader header="About me" />
        <OpenEditBtn onClick={() => setIsModalOpen(true)} />
      </div>
      <p className="text-[#222935] text-[14px] font-opensans leading-[21px]">{aboutText}</p>

      {isModalOpen && (
        <AboutModal
          initialText={aboutText}
          onClose={() => setIsModalOpen(false)}
          onSave={(newText) => {
            setAboutText(newText);
            setIsModalOpen(false);
          }}
        />
      )}
    </section>
  );
};

export default AboutSection;