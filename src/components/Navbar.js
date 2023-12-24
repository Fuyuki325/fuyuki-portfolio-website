import Image from '../components/Image';
import king from '../../public/images/logos/King-Fuyuki-pfp.jpg'
import Rounded from '../components/Rounded'

export default function Navbar() {
  return <nav className="flex transparent justify-between" >
    <a href="/" >
      <Rounded imgURL={king.src} />
    </a>
    <ul className="flex gap-x-20 items-center mr-8">
      <li className='flex w-24 border-solid shadow-2xl drop-shadow-4xl px-5 py-2 rounded-3xl bg-green-500 items-center justify-center'>
        <a href="/projects">Projects</a>
      </li>
      <li className='flex w-24 border-solid shadow-2xl drop-shadow-4xl px-5 py-2 rounded-3xl bg-green-500 items-center justify-center'>
        <a href="/blog">Blog</a>
      </li>
    </ul>
  </nav>
}