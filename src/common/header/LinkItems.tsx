
import Link from 'next/link';
import { motion } from 'motion/react';
import { scale, slide } from './animation';
import { routes } from '@/constants/data'
import { SectionName } from '@/types';


type LinksProps = {
  data: SectionName,
  isActive: boolean,
  setSelectedIndicator: React.Dispatch<React.SetStateAction<SectionName>>
}

export default function LinkItems({ data, isActive, setSelectedIndicator }: LinksProps) {

  const { title, href, index } = data;
  return (
    <motion.div
      className="relative flex items-center"
      onMouseEnter={() => { setSelectedIndicator(title) }}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale}
        animate={isActive ? "open" : "closed"}
        className="w-[10px] h-[10px] rounded-[50%] absolute left-[-30px]">
      </motion.div>
      <Link href={href}>{title}</Link>
    </motion.div>
  )
}
