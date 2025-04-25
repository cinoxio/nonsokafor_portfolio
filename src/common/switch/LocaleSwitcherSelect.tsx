"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Locale, routing, usePathname, useRouter } from "@/i18n/routing";
import { useParams } from "next/navigation";
import { ReactNode, useTransition } from "react";

type Props = {
  children?: ReactNode;
  defaultValue: string;
  label: string;
};

export default function LocaleSwitcherSelect({ defaultValue, label }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const [isPending, startTransition] = useTransition();

  function onSelectChange(nextLocale: string) {
    startTransition(() => {
      router.push(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`
        { pathname, params },
        { 
          locale: nextLocale as Locale,
          scroll: false 
        }
      );
    });
  }

  return (
    <Select 
      defaultValue={defaultValue} 
      onValueChange={onSelectChange}
      disabled={isPending}
    >
      <SelectTrigger
        className={`w-[80px] h-8 border-none bg-transparent focus:ring-0 focus:ring-offset-0 ${
          isPending ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        aria-label={label}
      >
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {routing.locales.map((locale) => (
          <SelectItem key={locale} value={locale}>
            {locale.toUpperCase()}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}



// "use client";

// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Locale, routing, usePathname, useRouter } from "@/i18n/routing";
// import { useParams } from "next/navigation";
// import { ReactNode } from "react";

// type Props = {
//   children: ReactNode;
//   defaultValue: string;
//   label: string;
// };

// export default function LocaleSwitcherSelect({ defaultValue, label }: Props) {
//   const router = useRouter();

//   const pathname = usePathname();
//   const params = useParams();

//   function onSelectChange(nextLocale: string) {
//     router.push(
//       // @ts-expect-error -- TypeScript will validate that only known `params`
//       // are used in combination with a given `pathname`. Since the two will
//       // always match for the current route, we can skip runtime checks.
//       { pathname, params },
//       { locale: nextLocale as Locale }
//     );
//   }

//   return (
//     <Select defaultValue={defaultValue} onValueChange={onSelectChange}>
//       <SelectTrigger
//         className='w-[80px] h-8 border-none bg-transparent focus:ring-0 focus:ring-offset-0'
//         aria-label={label}
//       >
//         <SelectValue />
//       </SelectTrigger>
//       <SelectContent>
//         {routing.locales.map((locale) => (
//           <SelectItem key={locale} value={locale}>
//             {locale.toUpperCase()}
//           </SelectItem>
//         ))}
//       </SelectContent>
//     </Select>
//   );
// }


// "use client"

// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { routing } from "@/i18n/routing"
// import { usePathname, useRouter } from "next/navigation"
// import { useParams } from "next/navigation"
// import { useTransition, type ReactNode } from "react"
// import { useLocale } from "next-intl"

// type Props = {
//   children?: ReactNode
//   defaultValue: string
//   label: string
// }

// export default function LocaleSwitcherSelect({ defaultValue, label }: Props) {
//   const router = useRouter()
//   const pathname = usePathname()
//   const params = useParams()
//   const locale = useLocale()
//   const [isPending, startTransition] = useTransition()

//   function onSelectChange(nextLocale: string) {
//     // Get the current path without the locale prefix
//     const currentPathname = pathname

//     // Extract the path after the locale segment
//     const pathWithoutLocale = currentPathname.replace(`/${locale}`, "")

//     // Construct the new path with the new locale
//     const newPath = `/${nextLocale}${pathWithoutLocale || ""}`

//     // Use startTransition to indicate to React this is a non-urgent update
//     startTransition(() => {
//       // Use router.push with { scroll: false } to prevent scrolling to top
//       // and shallow: true to prevent a full page reload
//       router.push(newPath, { scroll: false })
//     })

//     // Update HTML lang attribute for accessibility
//     document.documentElement.lang = nextLocale
//   }

//   return (
//     <Select defaultValue={defaultValue} onValueChange={onSelectChange} disabled={isPending}>
//       <SelectTrigger
//         className="w-[80px] h-8 border-none bg-transparent focus:ring-0 focus:ring-offset-0"
//         aria-label={label}
//       >
//         <SelectValue />
//       </SelectTrigger>
//       <SelectContent>
//         {routing.locales.map((locale) => (
//           <SelectItem key={locale} value={locale}>
//             {locale.toUpperCase()}
//           </SelectItem>
//         ))}
//       </SelectContent>
//     </Select>
//   )
// }

