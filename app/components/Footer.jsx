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
                            <Image src={'/assets/images/mail.png'} priority alt="phone" width={20} height={20} />
                        </span>
                        help@uifry.com
                    </span>
                    <span className="flex gap-2 items-center">
                        <span>
                            <Image src={'/assets/images/phone.png'} priority alt="phone" width={20} height={20} />
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