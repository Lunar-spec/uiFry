import Link from "next/link"

const About = () => {
    return (
        <div className="flex flex-col items-center text-primary text-4xl justify-center h-screen">
            <span className="flex items-center">Under construction <span className="animate-spin">⚙️</span></span>
            <Link href={'/'} className="px-4 text-xl font-semibold py-2 bg-primary text-white rounded-[4px]">Home</Link>
        </div>
    )
}

export default About