'use client';

import dynamic from 'next/dynamic';

import { ReactNode, ComponentType } from 'react';
import { cn } from '@/lib/utils';

const Arrow = dynamic(() => import('./arrow-buttons'), { ssr: false });

type Props = {
    children?: ReactNode;
    onClick?: () => void; // Changed from string to function
    className?: string; // Added className prop
    backgroundColor?: string;
    [key: string]: unknown; // Rest props
};

export default function RoundedButton1({
    children,
    className,
    backgroundColor,
    ...props
}: Props) {
    return (
        <button
            className={cn(backgroundColor ? `bg-${backgroundColor} hover:bg-none hover:border hover:text-white border-none transition-all duration-200` : 'border border-black btn',
                className,
                `rounded-full py-4 px-8 flex items-center justify-center cursor-pointer transition-all duration-200 hover:bg-black hover:text-white`
            )}
            {...props}
        >
            <div className="font-medium inline-block relative overflow-hidden group px-6 py-3 border border-white/60 rounded-full origin-bottom hover:border-none text-base xl:text-xl 2xl:text-2xl">
                <span className="flex items-center justify-center overflow-hidden border-solid border-white/60 group-hover:origin-bottom group-hover:-translate-y-5 group-hover:opacity-0 transition-all ease-in-out duration-500">
                    {children || 'Contact Me'}{' '}
                </span>
                <span className="absolute flex items-center justify-center group-hover:rounded-full group-hover:origin-bottom inset-0 border-solid border-white/60 origin-bottom overflow-hidden group-hover:translate-y-0 translate-y-5 xl:translate-y-8 transition-all h-0 group-hover:h-full bg-red-500 ease-in-out duration-500">
                    {children || 'Contact Me'}{' '}
                </span>
            </div>
            <Arrow className="relative z-10 aspect-square w-[10px] ml-4 md:ml-4 transition-transform duration-600 ease-[var(--ease-out-expo)] translate-x-[-50%] translate-y-[50%] group-hover:translate-x-0 group-hover:translate-y-0" />
        </button>
    );
}
