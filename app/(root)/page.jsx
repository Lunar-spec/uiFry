import Footer from '../components/Footer'
import data from '../../data'
import Image from 'next/image';
import Link from 'next/link';
const Home = async () => {
    const { hero } = data;
    return (
        <div className='py-4 md:px-12 px-6'>
            <section id='hero' className='flex md:flex-row flex-col'>
                <span className="flex flex-1 flex-col py-14 gap-4 relative">
                    <span className="md:text-8xl text-7xl capitalize font-bold">
                        {hero.headline}
                    </span>
                    <span className='text-2xl text-gray-400 font-light'>
                        {hero.subHead}
                    </span>
                    <span className='flex gap-4'>
                        {hero.ctaButtons.map((item) => (
                            <Link href={item.link} key={item.link} className='flex px-4 py-4 items-center gap-2 button-black even:bg-transparent even:text-black even:hover:bg-primary even:hover:text-white'>
                                {item.text}
                                <Image src={item.icon} alt='icon' width={20} height={20} />
                            </Link>
                        ))}
                    </span>
                    <Image src={'/assets/images/blur1.png'} priority alt='blur' width={600} height={600} className='w-96 z-[-1] md:left-52 -top-8 absolute ' />
                    <Image src={'/assets/images/vnag-strap.png'} priority alt='zag' width={600} height={600} className='right-52 -bottom-8' />
                </span>
                <span className="flex flex-1">
                    <Image src={'/assets/images/mobile-op.png'} priority alt='logo' width={1200} height={1200} className='w-full' />
                </span>
            </section>
            <Footer />
        </div>
    )
}

export default Home