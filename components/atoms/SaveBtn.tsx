import React from 'react'

interface SaveBtnProps {
    onClick: () => void
}

const SaveBtn = ({onClick}: SaveBtnProps) => {
  return (
    <button onClick={onClick} className='px-[20px] py-[10px] bg-[#222935] rounded-[5px] text-[#FFF] font-opensans cursor-pointer'>
        Save
    </button>
  )
}

export default SaveBtn