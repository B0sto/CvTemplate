import React from 'react'

const SkillMeter = () => {
  const marks = [
    { value: 0, label: 'Beginner' },
    { value: 20, label: 'Proficient' },
    { value: 80, label: 'Expert' },
    { value: 100, label: 'Master' }
  ]

  return (
    <div className="relative w-full h-[60px]">
      <div className="absolute top-[20px] w-full h-[1px] bg-[#667081]" />

      {/* Tick marks */}
      {marks.map(({ value }, index) => (
        <div
          key={index}
          className="absolute top-[10px] h-[10px] w-[1px] bg-[#667081]"
          style={{ left: `${value}%`, transform: 'translateX(-50%)' }}
        />
      ))}

      {marks.map(({ value, label }, index) => {
        let transform = 'translateX(-50%)'

        if (value === 0) transform = 'translateX(0%)'
        if (value === 100) transform = 'translateX(-100%)'

        return (
          <div
            key={index}
            className="absolute text-[12px] text-[#667081] font-opensans"
            style={{
              left: `${value}%`,
              top: '25px',
              transform,
              whiteSpace: 'nowrap'
            }}
          >
            {label}
          </div>
        )
      })}
    </div>
  )
}

export default SkillMeter
