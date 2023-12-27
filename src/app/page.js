'use client';
import Navbar from '@/components/nav/Navbar'
import Image from '@/components/Image'
import king from '../../public/images/logos/King-Fuyuki-pfp.jpg'
import LinkedIn from '../../public/images/logos/LinkedIn_logo.png'
import GitHub from '../../public/images/logos/GitHub_logo.png'
import Link from 'next/link'

export default function Home() {

  const handlePress = () => {
    window.location.href = "mailto:fuyuki325@gmail.com";
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 justify-between justify-items-center p-0 m-0 box-border gap-20 px-20">
      
      <Image imgURL={king.src} />
      <div className="h-full rounded-xl shadow-amber-950 shadow-2xl col-span-2 lg:col-span-1">
        <div className="flex flex-col items-center h-full bg-red-500 ">
          <p className='flex flex-1 text-2xl items-center lg:text-6xl text-center font-mono'>Fuyuki Malahom</p>
          <p className='flex flex-1 text-2xl items-center lg:text-6xl text-center font-mono'>Software Engineer</p>
          <div className='flex flex-2 w-full justify-around items-center mb-2'>
            <button className='flex-1 h-full bg-purple-500 shadow-2xl rounded-full py-2 ml-2 text-lg md:text-2xl font-mono' onClick={handlePress}>
              Get in touch
            </button>
            <div className='flex flex-1 justify-around items-center'>
              <Link className='w-1/4' href="https://www.linkedin.com/in/fuyuki-malahom/" target="_blank">
                <img src={LinkedIn.src} className='w-full' />
              </Link>
              <Link className='w-1/4' href="https://github.com/Fuyuki325" target='_blank'>
                <img src={GitHub.src} className='w-full' />
              </Link>
            </div>

          </div>
        </div>
      </div>
      <div className='flex justify-center col-span-2 lg:col-span-1'>
        <Image imgURL={LinkedIn.src} />
      </div>
      <div className='flex justify-center col-span-2 lg:col-span-1 bg-blue-600'>
        <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survive</p>
      </div>
    </div>
  );
}
