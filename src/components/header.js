import React, { useState } from "react"
import { Link } from "gatsby"
import icon from "/static/icon.svg"

const navItems = [
  {
    title: "Home",
    slug: "/",
  },
  {
    title: "Career",
    slug: "/career",
  },
  {
    title: "Works",
    slug: "/works",
  },
]

export function Header({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false)

  return (
    <header>
      <nav className="flex items-center justify-between flex-wrap bg-teal-500">
        <div className="flex items-center flex-shrink-0 mr-6">
          <Link to="/">
            <img src={icon} width="32" height="32" />
          </Link>
          <span className="font-semibold text-xl tracking-tight px-1">{siteTitle}</span>
        </div>

        <div className="block md:hidden">
          <button
            onClick={() => toggleExpansion(!isExpanded)}
            className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:border-black"
          >
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <div className={`${isExpanded ? `block` : `hidden`} w-full block flex-grow md:flex md:items-center md:w-auto`}>
          <div className="md:flex md:items-stretch md:flex-no-shrink md:flex-grow md:justify-end">
            {navItems.map((navItem, _) => (
              <Link
                to={navItem.slug}
                className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal no-underline flex items-center hover:bg-blue-50"
              >
                {navItem.title}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}
