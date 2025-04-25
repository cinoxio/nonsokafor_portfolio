import CustomCursor  from '@/common/cursor/custom-cursor';
import { About, ContactSection, Description, HeroSection, SelectedWorks,  ServicesSection } from '@/components/HomePage';
 import Preloader from '@/components/HomePage/preload/Preloader';

const Home = () => {
    return (
        <main>

        <Preloader/>
        <CustomCursor />
        <HeroSection />
        <SelectedWorks />
        <ServicesSection />
        <Description/>
            {/* <ServSection/> */}
        <About />
        <ContactSection/>
        </main>
    );
};

export default Home;
