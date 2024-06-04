import Image from "next/image"
import data from "../../data"
import Link from "next/link";
import Newsletter from "./Newsletter";
const Footer = () => {
    const { footer } = data;

    const renderSection = (sectionName) => (
        <div key={sectionName} className="flex flex-col gap-2">
            <span className="text-3xl font-medium">{footer[sectionName].headline}</span>
            {footer[sectionName].data.map((item) => (
                <Link href={item.to} key={item.title} className="capitalize">{item.title}</Link>
            ))}
        </div>
    );

    return (
        <div className="flex flex-col gap-2">
            <div className="flex justify-center flex-col md:flex-row items-center md:items-start md:px-8 md:justify-between">
                <div className="flex flex-col gap-4">
                    <Image src='/assets/images/logo.png' priority alt="logo" height={100} width={100} />
                    <span className="flex gap-2 items-center">
                        <span>
                            <svg viewBox="0 0 24 24" width="24" height="24" stroke="#FF5555" stroke-width="2" fill="none"
                                stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                        </span>
                        help@uifry.com
                    </span>
                    <span className="flex gap-2 items-center">
                        <span>
                            <svg viewBox="0 0 24 24" width="24" height="24" stroke="#FF5555" stroke-width="2" fill="none"
                                stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1">
                                <path
                                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                            </svg>
                        </span>
                        +123456789
                    </span>
                </div>
                {renderSection('links')}
                {renderSection('legal')}
                {renderSection('product')}

                <div className="flex flex-col gap-2 items-center md:items-start">
                    <span className="text-3xl font-medium">{footer.newsletter.headline}</span>
                    <span>{footer.newsletter.subHead}</span>
                    <Newsletter />
                </div>
            </div>
            <div className="flex justify-center items-center">
                <span className="font-medium md:text-lg">{footer.copyright}</span>
            </div>
        </div>
    )
}

export default Footer