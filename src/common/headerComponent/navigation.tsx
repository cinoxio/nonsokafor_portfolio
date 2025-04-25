'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

// Define the LinkType interface
interface LinkType {
    href: string;
    title: string;
}

const Navigation = () => {
    const t = useTranslations('navigation');

    // Get the navigation links array
    const links = t.raw('links');

    return (
        <div className="flex flex-col pt-8 lg:pt-0 lg:flex-row lg:static items-start font-normal text-sm  lg:text-base lg:pr-0 pr-4 absolute right-3 top-2 gap-0.5 justify-center lg:justify-start">
            {links.map((link: LinkType, index: number) => (
                <Link
                    key={index}
                    className="font-medium inline-block relative overflow-hidden group h-fit"
                    href={link.href}
                >
                    <span className="flex group-hover:-translate-y-5 group-hover:opacity-0 transition-all ease-in-out-circ duration-500">
                        {link.title}
                    </span>
                    <span className="absolute inset-0 origin-bottom group-hover:translate-y-0 translate-y-5 xl:translate-y-8 transition-all h-0 group-hover:h-full bg-red-500 ease-in-out-circ duration-500">
                        {link.title}
                    </span>
                    {/* <span className="absolute bottom-0 left-0 h-[0.055em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span> */}
                </Link>
            ))}
        </div>
    );
};

export default Navigation;

// <Link  className="font-medium hidden md:inline-block relative overflow-hidden group h-fit text-base xl:text-4xl 2xl:text-3xl" href={`/${locale}#${t("services")}`}>
//   <span className="flex group-hover:-translate-y-5 group-hover:opacity-0 transition-all ease-in-out-circ duration-500">
//   {t("services")}
//   </span>
//   <span className="absolute inset-0 origin-bottom group-hover:translate-y-0 translate-y-5 xl:translate-y-8 transition-all ease-in-out-circ duration-500">
//   {t("services")}
//   </span>
// </Link>
