'use client';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import data from '../../data';

const Navbar = () => {
    const router = useRouter();
    const pathname = usePathname();

    return (
        <nav className="md:px-32 py-2 sticky top-0 z-10 backdrop-blur-[8px] flex h-24 md:justify-between justify-center gap-4 items-center">
            <div className="flex gap-8 items-center">
                <div>
                    <Image src={'/assets/images/logo.png'} priority alt='logo' width={100} height={100} />
                </div>
                <div className='flex gap-4 items-center font-medium'>
                    {data.navbar.map((item) => (
                        <div key={item.title} className={`cursor-pointer ${pathname === item.to ? 'text-primary' : 'text-black'} hover:text-primary`} onClick={() => router.push(item.to)}>
                            {item.title}
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <button className="button-black px-4 py-2 font-medium hidden md:flex">
                    Download
                </button>
            </div>
        </nav>
    )
}

export default Navbar