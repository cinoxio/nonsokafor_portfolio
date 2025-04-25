
import { Metadata } from "next";
import { Author } from "next/dist/lib/metadata/types/metadata-types";

const title: string =
  "Chinonso Okafor - Fullstack Developer Specialized in Design and User Experience";
export const description: string =
  "Fullstack Developer with over 2 years of experience in building user-centered websites and applications for clients like Deutsche Bahn, R+V, Adidas, and WMF. Skilled in Next.js, TypeScript, and UX design, I enhances digital experiences through innovative, data-driven solutions and seamless functionality.";
export const keywords: string[] = [
  "next.js",
  "react.js",
  "gsap",
  "frontend developer",
  "fullstack developer",
  "ui/ux developer",
  "Abuja, Nigeria",
  "decibon"
];
const authors: Author[] = [
  { name: "Chinonso Okafor", url: "https://nonsokafor.vercel.com" },
];
const generator: string = "Next.js";
const applicationName: string = "Chinonso Okafor Portfolio";
const creator: string = "Chinonso Okafor";
const robots: string = "index, follow";
const category: string = "Technology & Computing";

export const homeMetadata: Metadata = {
  title,
  description,
  keywords,
  authors,
  generator,
  applicationName,
  creator,
  publisher: creator,
  robots,
  category,
  openGraph: {
    title,
    description,
    type: "website",
    siteName: "Chinonso Okafor",
    url: `https://nonsokafor.vercel.app`,
  },
  twitter: {
    title,
    description,
    card: "summary_large_image",
    creator: "@decibon",
    creatorId: "1303746727594405894",
  },
};



export const metadata: Metadata = {
    metadataBase: new URL("https://nonsokafor.vercel.app"),
    alternates: {
      canonical: "/",
      languages: {
        "en-US": "/en-US",
      },
    },
   
    title: "Chinonso Jame Okafor, Creative & Frontend Developer",
    description:
      "Chinonso James Okafor - A Creative Frontend Developer - 2 years of experience. Seeking the limit.",
    robots: {
      index: true,
      follow: true,
      nocache: true,
    },
  };