import { Playfair_Display } from 'next/font/google';
import localFont from 'next/font/local';



const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-playfair',
});

const neue_montreal = localFont({
    src: [
        {
            path: '../../../public/fonts/PPNeueMontreal-Bold.otf',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../../../public/fonts/ppneuemontreal-medium.otf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../../public/fonts/Montreal-Regular.woff',
            weight: '300',
            style: 'normal',
        },
    ],
    variable: '--font-neue-montreal',
})
// const helvetica_neue = localFont({
//   src: [
//     {
//       path: '../../public/fonts/HelveticaNeue-Black.otf',
//       weight: '900',
//       style: 'black',
//     },
//     {
//       path: '../../public/fonts/HelveticaNeue-Light.otf',
//       weight: '400',
//       style: 'normal',
//     },
//     {
//       path: '../../public/fonts/HelveticaNeue-Medium.otf',
//       weight: '700',
//       style: 'normal',
//     },
//     {
//       path: '../../public/fonts/HelveticaNeue-Condensed.otf',
//       weight: '800',
//       style: 'italic',
//     },
//   ],
//   variable: '--helvetica-neue',
// });


export { neue_montreal, playfair}
