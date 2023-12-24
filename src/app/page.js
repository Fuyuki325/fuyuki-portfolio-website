import Navbar from '@/components/nav/Navbar'
import Image from '@/components/Image'
import king from '../../public/images/logos/King-Fuyuki-pfp.jpg'

export default function Home() {
  return (
    <div className="flex flex-row items-center justify-between p-0 m-0 box-border">
      
      <p>hello</p>
      <Image imgURL={king.src} />
      <p>dev branch</p>
    </div>
  );
}
