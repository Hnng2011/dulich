import React from "react"
import Header from "@/section/Header/header";
import Footer from "@/section/Footer/footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
