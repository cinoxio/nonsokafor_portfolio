import gsap from "gsap";
import {useGSAP} from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useImageReveal = (el, delay = 0) => {
  useGSAP(() => {
    gsap.fromTo(
      el.current,
      {
        y: "-100vh",
      },
      {
        y: 0,
        duration: 2,
        delay,
        ease: "power4.out",
      }
    );
  }, [el, delay]);
};
export const useHeadlineReveal = (items, delay = 0) => {
  useEffect(() => {
    const el = items.map((item) => item.current);
    gsap.fromTo(
      el,
      {
        y: 500,
      },
      {
        y: 0,
        duration: 1,
        delay,
        ease: "power4.out",
        stagger: 0.2,
      }
    );
  }, [items, delay]);
};
export const useLinkReveal = (items, delay = 0) => {
  useGSAP(() => {
    const el = items.map((item) => item.current);
    gsap.fromTo(
      el,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 2,
        delay,
        ease: "power4.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: el,
        },
      }
    );
  }, [items, delay]);
};
export const useBioReveal = (el, delay = 0) => {
  useGSAP(() => {
    gsap.fromTo(
      el.current,
      {
        y: 500,
      },
      {
        y: 0,
        duration: 1.5,
        delay,
        ease: "power4.out",
      }
    );
  }, [el, delay]);
};

export const useSocialReveal = (el, delay = 0) => {
  useGSAP(() => {
    gsap.fromTo(
      el.current,
      {
        x: -500,
      },
      {
        x: 0,
        duration: 1.5,
        delay,
        ease: "power4.out",
      }
    );
  }, [el, delay]);
};
export const useSectionReveal = (el, delay = 0) => {
  useGSAP(() => {
    gsap.fromTo(
      el.current,
      {
        y: 200,
      },
      {
        y: 0,
        duration: 1.5,
        delay,
        ease: "power4.out",
        scrollTrigger: {
          trigger: el.current,
        },
      }
    );
  }, [el, delay]);
};

export const useProjectLeftRightReveal = (items, delay = 0) => {
  useGSAP(() => {
    const el = items.map((item) => item.current);
    gsap.fromTo(
      el,
      {
        y: 500,
      },
      {
        y: 0,
        duration: 2,
        delay,
        ease: "power4.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: el,
        },
      }
    );
  }, [items, delay]);
};

export const useSkillLineReveal = (items) => {
  useGSAP(() => {
    items.forEach((el) =>
      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          onEnter() {
            el.classList.add("reveal");
          },
        },
      })
    );
  }, [items]);
};

export const useSkillTextReveal = (el) => {
  useGSAP(() => {
    gsap.fromTo(
      el,
      {
        y: 200,
      },
      {
        y: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: el,
        },
      }
    );
  }, [el]);
};
export const useFooterReveal = (el) => {
  useGSAP(() => {
    gsap.froSmTo(
      el.current,
      {
        y: -100,
      },
      {
        y: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: el.current,
        },
      }
    );
  }, [el]);
};

export const useInputRefReveal = (items, delay = 0) => {
  useGSAP(() => {
    const el = items.map((item) => item.current);
    gsap.fromTo(
      el,
      {
        y: 200,
      },
      {
        y: 0,
        duration: 1,
        delay,
        ease: "power4.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: el,
        },
      }
    );
  }, [items, delay]);
};
