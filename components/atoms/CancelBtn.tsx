import React from 'react'

interface CancelBtnProps {
    onClick: () => void;
}

const CancelBtn = ({onClick}: CancelBtnProps) => {
  return (
    <button onClick={onClick} className='px-[20px] py-[10px] bg-[#be1a1a] rounded-[5px] text-[#FFF] font-opensans cursor-pointer'>
        Cancel
    </button>
  )
}

export default CancelBtn