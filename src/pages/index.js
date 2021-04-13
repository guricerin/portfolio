import React from "react"
import { Layout } from "../components/layout"
import "../css/hero.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faGithub, IconDefinition, faGit } from "@fortawesome/free-brands-svg-icons"
import { faBlog } from "@fortawesome/free-solid-svg-icons"

const ViewHero = () => (
  <div className="hero">
    <div className="p-10">
      <div className="text-2xl py-10 px-10 mt-10">
        <a>guricerin's portfolio site</a>
      </div>
    </div>
  </div>
)

const snsLinks = [
  {
    name: "GitHub",
    icon: faGithub,
    url: "https://github.com/guricerin",
  },
  {
    name: "Twitter",
    icon: faTwitter,
    url: "https://twitter.com/guricerin",
  },
  {
    name: "Hatena Blog",
    icon: faBlog,
    url: "https://guri6cerin.hatenablog.com/",
  },
]

const iconStyle = {
  padding: 5,
  fontSize: 50,
  maxWidth: "50px",
}

const ViewLinkBlock = ({ snsLink }) => (
  // <div className="border container mx-auto justify-center items-center">
  <div className="container mx-auto" style={{ padding: 10 }}>
    <a href={snsLink.url} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={snsLink.icon} style={iconStyle} fixedWidth />
      <p>{snsLink.name}</p>
    </a>
  </div>
)

const ViewLinks = () => (
  <div className="my-4">
    <div className="pb-1.5">
      <h2 className="text-xl">Links</h2>
    </div>
    <hr />
    <div className="pt-4 grid grid-cols-3 gap-4">
      {snsLinks.map((snsLink, _) => (
        <ViewLinkBlock snsLink={snsLink} />
      ))}
    </div>
    {/* <div className="flex container mx-auto" style={{ textAlign: "center" }}>
      {snsLinks.map((snsLink, _) => (
        <a href={snsLink.url} target="_blank" rel="noopener noreferrer">
          <div style={{ maxWidth: "50px" }}>
            <FontAwesomeIcon icon={snsLink.icon} style={iconStyle} fixedWidth />
          </div>
          <p className="">{snsLink.name}</p>
        </a>
      ))}
    </div> */}
  </div>
)

export default () => (
  <Layout>
    <ViewHero />
    <ViewLinks />
  </Layout>
)
