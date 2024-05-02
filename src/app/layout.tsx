import "@/styles/globals.css"
import { Noto_Sans as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
import { LanguageProvider } from "@/context/language_provider"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: "400"
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <LanguageProvider >
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
