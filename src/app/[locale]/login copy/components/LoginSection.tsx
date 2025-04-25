'use client';

import LeftSection from "./LeftSection";
import RightCard from "./RightCard";

const LoginSection = () => {
    return (
        <section className="h-screen flex w-screen mx-auto overflow-hidden">
            <LeftSection/>
            <RightCard />
        </section>
    );
};

export default LoginSection;
