import React from 'react'

interface BurgerIconProps {
    onClick: React.MouseEventHandler<HTMLDivElement>
}

const BurgerIcon: React.FC<BurgerIconProps> = ({onClick}) => { 

    return (
        <div className='bg-[#222935] px-[9px] py-[10px] rounded-r-[5px] cursor-pointer' onClick={onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
                <path d="M1 11H13M1 1H13H1ZM1 6H13H1Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </div>
    )
}

export default BurgerIcon