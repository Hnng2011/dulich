import "@/styles/globals.css"
import { Noto_Sans as FontSans, Roboto_Slab as spin } from "next/font/google"
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          Spin.variable
        )}
      >
        <LanguageProvider >
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
