import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Layout } from "../components/layout"

const imgWidth = 350

function ViewWorks() {
  const works = [
    {
      name: "shishiro-foods-site",
      desc: "VTuber 獅白ぼたんの非公認ジョークサイト. ",
      /*
        StaticImageのsrc属性にはstaticな値しか設定できないので、回りくどいやりかたをしている
        https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-plugin-image/#restrictions-on-using-staticimage
      **/
      img: function () {
        return <StaticImage src="../images/shishiro.png" alt="img" width={imgWidth} layout="constrained" />
      },
      repoUrl: "https://github.com/guricerin/shishiro-foods-site",
    },
    {
      name: "nand2tetris",
      desc: "『コンピュータシステムの理論と実装』の演習問題回答（6～11章はRustで実装）. ",
      img: function () {
        return <StaticImage src="../images/book.jpg" alt="img" width={imgWidth} layout="constrained" />
      },
      repoUrl: "https://github.com/guricerin/nand2tetris",
    },
    {
      name: "bf-derivatives-tool",
      desc: "独自のBrainfuck方言を作成可能なツール. ",
      img: function () {
        return <StaticImage src="../images/bf-derivatives-tool.png" alt="img" width={imgWidth} layout="constrained" />
      },
      repoUrl: "https://github.com/guricerin/bf-derivatives-tool",
    },
    {
      name: "understanding-computation",
      desc: "『アンダースタンディング コンピュテーション』のF#による実装. ",
      img: function () {
        return <StaticImage src="../images/book.jpg" alt="img" width={imgWidth} layout="constrained" />
      },
      repoUrl: "https://github.com/guricerin/understanding-computation",
    },
    {
      name: "brainfuck",
      desc: "BrainfuckインタプリタのF#による実装. ",
      img: function () {
        return <StaticImage src="../images/bf-fsharp.png" alt="img" width={imgWidth} layout="constrained" />
      },
      repoUrl: "https://github.com/guricerin/brainfuck",
    },
    {
      name: "FSharp.Scheme",
      desc: "おもちゃレベルなSchemeインタプリタのF#による実装. ",
      img: function () {
        return <StaticImage src="../images/svg-porn/fsharp.svg" alt="img" width={imgWidth} layout="constrained" />
      },
      repoUrl: "https://github.com/guricerin/FSharp.Scheme",
    },
  ]

  return (
    <div>
      {works.map((work, _) => (
        <div className="py-4">
          <div className="pb-1.5">
            <h2 className="text-xl">{work.name}</h2>
          </div>
          <hr />
          <div className="flex justify-between pt-3">
            <div>
              <p>{work.desc}</p>
              <a href={work.repoUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                #source code
              </a>
            </div>
            {work.img()}
          </div>
        </div>
      ))}
    </div>
  )
}

export default () => (
  <Layout>
    <div>
      <h1 className="mb-6">趣味で作成・学習したコード類</h1>
      <ViewWorks />
    </div>
  </Layout>
)
