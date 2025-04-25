import HeaderComponent from "@/common/headerComponent";
import { Toaster } from "@/components/ui/sonner";
import Footer from '@/components/HomePage/footer-component/Footer';
import { ThemeProvider } from '@/context/theme-provider';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import "../globals.css";
import Header from '@/common/header/Header';
import { neue_montreal, playfair } from '../fonts';

// export const metadata: Metadata = {
//   metadataBase: new URL(DATA.url),
//   title: {
//     default: DATA.name,
//     template: `%s | ${DATA.name}`,
//   },
//   description: DATA.description,
//   openGraph: {
//     title: `${DATA.name}`,
//     description: DATA.description,
//     url: DATA.url,
//     siteName: `${DATA.name}`,
//     locale: "en_US",
//     type: "website",
//   },
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       "max-video-preview": -1,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//     },
//   },
//   twitter: {
//     title: `${DATA.name}`,
//     card: "summary_large_image",
//   },
//   verification: {
//     google: "",
//     yandex: "",
//   },
// };



export const metadata: Metadata = {
  metadataBase: new URL("https://nonsokafor.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  title:  {
    default: "Chinonso Okafor | Portfolio",
    template: "%s | Chinonso Okafor",
  },
  description: 'A Full-Stack Developer Portfolio focusing on Reactjs, Nextjs, Mongodb, Superbase, RestApi, Javascript, Firebase etc',
  verification: {
    google: "google-site-verification=123123123",
    yandex: ""
  },

  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
};

// ({ children, params }: { children: React.ReactNode; params: Promise<{locale: string}>

export default async function RootLayout({children, params}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const messages = await getMessages();
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={cn(neue_montreal, playfair, `antialiased`)}>
        <NextIntlClientProvider messages={messages}>
        <ThemeProvider
        attribute="class"
         defaultTheme="system"
        enableSystem
        disableTransitionOnChange>
        <Header/>
        {/* <HeaderComponent /> */}
        {children}
         <Footer />
         <Toaster/>
        </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
