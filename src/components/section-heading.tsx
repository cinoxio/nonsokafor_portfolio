import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="w-fit text-5xl capitalize text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
      {children}
    </h2>
  );
}


type headingProps = {
  title: string,
}

export function Heading({ title }: headingProps) {
  return (
    <>
      <div className="section-heading select-none">
        <h2 className="w-fit text-5xl sm:text-heading-2 font-medium uppercase text-secondary-600">
          {title}
        </h2>
      </div>
    </>
  );
}
