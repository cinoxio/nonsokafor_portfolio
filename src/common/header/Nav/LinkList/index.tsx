'use client';

import { Link } from '@/i18n/routing';
import { motion } from 'motion/react';
import { scale, slide, slideIn } from '../../animation';

type LinkData = {
  title: string;
  href: string;
  index: number;
};

type LinkListProps = {
  data: LinkData;
  isActive: boolean;
  setSelectedIndicator: React.Dispatch<React.SetStateAction<string>>;
};





const LinkList = ({ data, isActive, setSelectedIndicator }: LinkListProps) => {
  const { title, href, index } = data;

  return (
    <motion.div
      className="relative flex items-center"
      onMouseEnter={() => setSelectedIndicator(href)}
      custom={index}
      variants={slideIn}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale}
        animate={isActive ? 'open' : 'closed'}
        className="w-[10px] h-[10px] rounded-[50%] absolute left-[-30px]"
      ></motion.div>
      <Link
        href={href}
        className="font-medium inline-block relative overflow-hidden group h-fit"
      >
        {title}
      </Link>
    </motion.div>
  );
};

export default LinkList;




// import { Link } from '@/i18n/routing';
// import { motion } from 'motion/react';
// import { scale, slide } from '../../animation';

// type LinkData = {
//   title: string;
//   href: string;
//   index: number;
// };

// type LinkListProps = {
//   data: LinkData;
//   isActive: boolean;
//   setSelectedIndicator: React.Dispatch<React.SetStateAction<string>>;
// };





// const LinkList = ({ data, isActive, setSelectedIndicator }: LinkListProps) => {
//   const { title, href, index } = data;

//   return (
//     <motion.div
//       className="relative flex items-center"
//       onMouseEnter={() => setSelectedIndicator(href)}
//       custom={index}
//       variants={slide}
//       initial="initial"
//       animate="enter"
//       exit="exit"
//     >
//       <motion.div
//         variants={scale}
//         animate={isActive ? 'open' : 'closed'}
//         className="w-[10px] h-[10px] rounded-[50%] absolute left-[-30px]"
//       ></motion.div>
//       <Link
//         href={href}
//         className="font-medium inline-block relative overflow-hidden group h-fit"
//       >
//         {title}
//       </Link>
//     </motion.div>
//   );
// };

// export default LinkList;
