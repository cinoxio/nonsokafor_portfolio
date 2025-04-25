import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import dynamic from 'next/dynamic';

// Dynamically import the arrow SVG
const Arrow = dynamic(() => import('./arrow-buttons'), { ssr: false });

type Props = {
    children?: React.ReactNode;
    href?: string;
    onClick?: () => void; // Changed from string to function
    className?: string; // Added className prop
    backgroundColor?: string;
    [key: string]: unknown; // Rest props
};

export default function MainButton({
    children,
    href,
    onClick,
    className,
    backgroundColor,
    ...rest
}: Props) {
    // Fixed the conditional rendering with proper return statements
    if (href) {
        return (
            <Link
                href={href || '#contact'}
                className={cn(className, backgroundColor, 'btn')}
                {...rest}
            >
                <div className="font-medium inline-block relative overflow-hidden group px-6 py-3 border border-white/60 rounded-full origin-bottom hover:border-none text-base xl:text-xl 2xl:text-2xl">
                    <span className="flex items-center justify-center overflow-hidden border-solid border-white/60 group-hover:origin-bottom group-hover:-translate-y-5 group-hover:opacity-0 transition-all ease-in-out duration-500">
                        {children || 'Contact Me'}{' '}
                        <Arrow className="relative z-10 aspect-square w-[10px] ml-4 md:ml-4 transition-transform duration-600 ease-[var(--ease-out-expo)] translate-x-[-50%] translate-y-[50%] group-hover:translate-x-0 group-hover:translate-y-0" />
                    </span>
                    <span className="absolute flex items-center justify-center group-hover:rounded-full group-hover:origin-bottom inset-0 border-solid border-white/60 origin-bottom overflow-hidden group-hover:translate-y-0 translate-y-5 xl:translate-y-8 transition-all h-0 group-hover:h-full bg-red-500 ease-in-out duration-500">
                        {children || 'Contact Me'}{' '}
                        <Arrow className="relative z-10 aspect-square w-[10px] ml-4 md:ml-4 transition-transform duration-600 ease-[var(--ease-out-expo)] translate-x-[-50%] translate-y-[50%] group-hover:translate-x-0 group-hover:translate-y-0" />
                    </span>
                </div>
                <span className="items-center justify-center flex">
                    {children}
                </span>
            </Link>
        );
    } else {
        return (
             <button
               onClick={onClick}
                className={cn(className, backgroundColor, 'btn')}
                {...rest}
            >
                <div className="font-medium inline-block relative overflow-hidden group px-6 py-3 border border-white/60 rounded-full origin-bottom hover:border-none text-base xl:text-xl 2xl:text-2xl">
                    <span className="flex items-center justify-center overflow-hidden border-solid border-white/60 group-hover:origin-bottom group-hover:-translate-y-5 group-hover:opacity-0 transition-all ease-in-out duration-500">
                        {children || 'Contact Me'}{' '}
                        <Arrow className="relative z-10 aspect-square w-[10px] ml-4 md:ml-4 transition-transform duration-600 ease-[var(--ease-out-expo)] translate-x-[-50%] translate-y-[50%] group-hover:translate-x-0 group-hover:translate-y-0" />
                    </span>
                    <span className="absolute flex items-center justify-center group-hover:rounded-full group-hover:origin-bottom inset-0 border-solid border-white/60 origin-bottom overflow-hidden group-hover:translate-y-0 translate-y-5 xl:translate-y-8 transition-all h-0 group-hover:h-full bg-red-500 ease-in-out duration-500">
                        {children || 'Contact Me'}{' '}
                        <Arrow className="relative z-10 aspect-square w-[10px] ml-4 md:ml-4 transition-transform duration-600 ease-[var(--ease-out-expo)] translate-x-[-50%] translate-y-[50%] group-hover:translate-x-0 group-hover:translate-y-0" />
                    </span>
                </div>
                <span className="items-center justify-center flex">
                    {children}
                </span>
            </button>
        );
    }
}

// export default function MainButton (){
//     return (
//     <Link href="#contact" className="btn">
//        <div className="font-medium inline-block relative overflow-hidden group px-6 py-3 border border-white/60 origin-bottom hover:border-none text-base xl:text-xl 2xl:text-2xl">
//         <span className="flex items-center justify-center overflow-hidden border-solid border-white/60 group-hover:origin-bottom group-hover:-translate-y-5 group-hover:opacity-0 transition-all ease-in-out duration-500">Contact Me<span className="text-lg ml-1">↗</span></span>
//         <span className="absolute flex items-center justify-center group-hover:rounded-full group-hover:origin-bottom inset-0 border-solid border-white/60 origin-bottom overflow-hidden group-hover:translate-y-0 translate-y-5 xl:translate-y-8 transition-all h-0 group-hover:h-full bg-red-500 ease-in-out duration-500">Contact Me<span className="text-lg ml-1">↗</span></span>
//        </div>
//     </Link>
//     )
// }
// const RoundedButton=()=> {
//     return

//  <Rounded>
//       <p className="relative z-[1]
//         transition-[color] duration-[0.4s] linear hover:text-white">More work</p>
//     </Rounded>
// }
