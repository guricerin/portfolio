import React from "react"
import "../css/tailwind.css"
import { Header } from "../components/header"
import { Footer } from "../components/Footer"

export const Layout = ({ children }) => (
  <div className="md:container mx-auto py-6 px-8">
    <Header siteTitle={"guricerin"} />
    <div className="py-4">
      <hr />
    </div>
    <div className="font-nomal">{children}</div>
    <div className="py-4"></div>
    <Footer />
  </div>
)
