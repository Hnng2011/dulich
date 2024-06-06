import "@/styles/globals.css"
import { Noto_Sans as FontSans, Roboto_Slab as spin, Bitter as bitter } from "next/font/google"
import { cn } from "@/lib/utils"
import { LanguageProvider } from "@/context/language_provider"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: "400"
})

const Spin = spin({
  subsets: ["latin"],
  variable: "--font-spin",
  weight: "400"
})

const Bitter = bitter({
  subsets: ["latin"],
  variable: "--font-bitter",
  weight: "900"
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-mainbackground font-sans antialiased",
          fontSans.variable,
          Spin.variable,
          Bitter.variable
        )}
      >
        <LanguageProvider >
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
