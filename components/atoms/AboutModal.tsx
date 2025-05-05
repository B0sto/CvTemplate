import React, { useState } from 'react'
import SectionHeader from './SectionHeader';
import SaveBtn from './SaveBtn';
import CancelBtn from './CancelBtn';

interface AboutModalProps {
    initialText: string;
    onClose: () => void;
    onSave: (newText: string) => void;
}

const AboutModal = ({ initialText, onClose, onSave }: AboutModalProps) => {
    const [text, setText] = useState(initialText);
  
    const handleSave = () => {
      onSave(text);
    };
  
    return (
      <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-[10px] w-full max-w-[600px] h-auto">
          <SectionHeader header="About me" />
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full h-[200px] border p-[10px] text-sm resize-none border-[#26C17E] mt-[5px] font-opensans focus:outline-none focus:ring-2 focus:ring-[#26C17E]"
          />
          <div className="flex gap-x-[7px] mt-4 justify-end">
            <SaveBtn onClick={handleSave}/>
            <CancelBtn onClick={onClose}/>
          </div>
        </div>
      </div>
    );
  };
  
  export default AboutModal;