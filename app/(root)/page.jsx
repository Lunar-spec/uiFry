import Footer from '../components/Footer'
import data from '../../data'
import Image from 'next/image';
import Link from 'next/link';
const Home = async () => {
    const { hero, features, banner } = data;

    return (
        <div className='py-4 md:px-12 px-6'>
            <section id='hero' className='flex md:flex-row flex-col justify-between'>
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

            <section className='flex justify-between relative md:flex-row flex-col-reverse'>
                <span className="flex flex-1">
                    <Image src='/assets/images/specs1.png' alt='feature' width={1200} height={1200} className='w-full' />
                </span>
                <span className="flex flex-col flex-1 gap-4 px-4">
                    <span className='flex flex-col'>
                        <span className='uppercase text-2xl text-primary'>features</span>
                        <span className='text-6xl font-bold capitalize'>{features.headline}</span>
                    </span>
                    <span className="flex flex-col gap-8">
                        {features.data.map((item) => (
                            <span key={item.title} className='flex flex-col items-start'>
                                <span className='flex gap-2 items-center'>
                                    <span>
                                        <Image src={item.icon} alt='icon' width={24} height={24} />
                                    </span>
                                    <span className='text-2xl font-semibold capitalize'>
                                        {item.title}
                                    </span>
                                </span>
                                <span className='text-lg text-gray-400/60 px-8'>
                                    {item.description}
                                </span>
                            </span>
                        ))}
                    </span>
                </span>
                <Image src={'/assets/images/blur1.png'} priority alt='blur' width={600} height={600} className='w-96 z-[-1] right-0 absolute' />
            </section>

            <section id='banner' className='py-4 relative'>
                <Image src='/assets/images/banner.png' alt='banner' width={2400} height={2400} className='w-full' />
                <span className='absolute top-[75%] left-[25%] translate-x-[-25%] translate-y-[-100%] w-1/2'>
                    <span className='flex flex-col gap-4 text-white'>
                        <span className="md:text-7xl md:font-bold text-2xl font-semibold">
                            {banner.headline}
                        </span>
                        <span className="md:text-2xl md:block hidden">
                            {banner.subHead}
                        </span>
                    </span>
                    <button className="bg-white text-black mt-4 rounded-[4px] shadow-lg shadow-white/40 hover:text-white p-4 hover:bg-primary">
                        Download
                    </button>
                </span>
            </section>
            <Footer />
        </div>
    )
}

export default Home