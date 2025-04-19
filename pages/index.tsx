import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const Index = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 bg-[url('/background.jpg')] bg-cover bg-center z-0" />
      <div className="absolute inset-0 bg-[#000614] opacity-[0.8] z-0" />
      <div className="relative z-10 flex flex-col justify-center items-center gap-y-[10px] h-full text-white text-center px-4">
        <Image src="/Avatar.svg" alt="user image" width={160} height={160} />
        <h1 className="text-[45px] font-bold leading-[54px] font-opensans">John Doe</h1>
        <p className="text-[25px] font-semibold leading-[30px] font-opensans">Programmer. Creative. Innovator</p>
        <p className="text-[14px] leading-[21px] max-w-[500px] font-opensans">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque.
        </p>
        <Link href={"/CvTemplate"}>
          <button className="font-opensans leading-[19.2px] px-[20px] py-[10px] bg-[#222935] rounded-[5px] cursor-pointer hover:bg-[#2c3645] transition duration-[.4s]">
            Know more
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Index
