import Image from '../Image';
import king from '../../../public/images/logos/King-Fuyuki-pfp.jpg'
import Rounded from './Rounded'
import ButtonNav from './Button-Nav';

export default function Navbar() {
  return <nav className="flex transparent justify-between" >
    <a href="/" >
      <Rounded imgURL={king.src} />
    </a>
    <ul className="flex gap-x-20 items-center mr-8">
      <ButtonNav url='/projects' text='Projects' />
      <ButtonNav url='/blog' text='Blog' />
    </ul>
  </nav>
}