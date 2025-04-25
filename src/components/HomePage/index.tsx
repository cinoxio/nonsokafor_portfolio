import Preloader from "./Preloader";
import ContactSection from './contact/ContactSection';
import HeroSection from "./hero-section/HeroSection";
import Section1 from "./section1/Section1";
import AboutMe from "./about/AboutMe";
import ServicesSection from "@/components/HomePage/ServicesSection";
import About from './about-section/About';
import AllText from '../AllGsapText';
import FeatureCards from './section1/Section1';
import SelectedWorks from '@/components/HomePage/selected-works/SelectedWorks';
import Description from './Description';
import ServSection from './ServicesSection/ServSection';



    // const [isLoading, setIsLoading] = useState(true);

    // useEffect( () => {
    //   (
    //     async () => {
    //         const LocomotiveScroll = (await import('locomotive-scroll')).default
    //         const locomotiveScroll = new LocomotiveScroll();

    //         setTimeout( () => {
    //           setIsLoading(false);
    //           document.body.style.cursor = 'default'
    //           window.scrollTo(0,0);
    //         }, 2000)
    //     }
    //   )()
    // }, [])

export {Preloader,ServSection, Description, ContactSection, HeroSection, Section1, AboutMe, SelectedWorks, About, ServicesSection, FeatureCards, AllText }
