import Image from 'next/image';
import logo from '@/assets/imgs/GabrielsLogo.png';
import Link from 'next/link';
import { useRouter } from 'next/router';

const getRouteActive = (currentPathname: string, route: string) => {
  return currentPathname === route ? 'drop-shadow-[0px_4px_4px_rgba(250,250,250,1)] text-2xl' : '';
}

interface HeaderProps {
  caption: string;
  navigation: Array<Record<any, any>>;
  Switch: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = ({
  caption,
  navigation,
  Switch
}) => {
  const router = useRouter();
  const currentPathname = router.pathname;
  return (
    <div className='grid'>
      <div className="w-full text-center text-slate-800 text-xs font-normal">
        <i className='font-pacifico'>{caption}</i>
        <span className='flex justify-end pr-4'>
          {Switch}
        </span>
      </div>
      <Image className="w-[271px] h-[122px] place-self-center" src={logo} alt='logo' />
      <div className='flex gap-[135px] justify-center items-center py-[50px]'>
        {navigation.map((n) => (
          <Link key={n.label} href={n.to} passHref>
            <p className={`text-slate-800 text-xl font-normal font-pacifico text-blue-vintage ${getRouteActive(currentPathname, n.to)}`}>
              {n.label}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}