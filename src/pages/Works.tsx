import React from "react";
import shishiroImg from "../assets/images/shishiro.png";
import bftImg from "../assets/images/bf-derivatives-tool.png";
import bffsharpImg from "../assets/images/bf-fsharp.png";
import bookImg from "../assets/images/book.jpg";
import fsharpLogo from "../assets/svg-porn/fsharp.svg";

interface Work {
  name: string;
  description: string;
  imgPath: string;
  repoUrl: string;
}

const works: Work[] = [
  {
    name: "shishiro-foods-site",
    description: "VTuber 獅白ぼたんの非公認ジョークサイト. ",
    imgPath: shishiroImg,
    repoUrl: "https://github.com/guricerin/shishiro-foods-site",
  },
  {
    name: "nand2tetris",
    description: "『コンピュータシステムの理論と実装』の演習問題回答（6～11章はRustで実装）. ",
    imgPath: bookImg,
    repoUrl: "https://github.com/guricerin/nand2tetris",
  },
  {
    name: "bf-derivatives-tool",
    description: "独自のBrainfuck方言を作成可能なツール. ",
    imgPath: bftImg,
    repoUrl: "https://github.com/guricerin/bf-derivatives-tool",
  },
  {
    name: "understanding-computation",
    description: "『アンダースタンディング コンピュテーション』のF#による実装. ",
    imgPath: bookImg,
    repoUrl: "https://github.com/guricerin/understanding-computation",
  },
  {
    name: "brainfuck",
    description: "BrainfuckインタプリタのF#による実装. ",
    imgPath: bffsharpImg,
    repoUrl: "https://github.com/guricerin/brainfuck",
  },
  {
    name: "FSharp.Scheme",
    description: "おもちゃレベルなSchemeインタプリタのF#による実装. ",
    imgPath: fsharpLogo,
    repoUrl: "https://github.com/guricerin/FSharp.Scheme",
  },
];

interface OuterLinkProps {
  url: string;
  text: string;
}

const OuterLink: React.FC<OuterLinkProps> = (props) => {
  return (
    <a href={props.url} target="_blank" rel="noopener noreferrer">
      {props.text}
    </a>
  );
};

export const WorksPage: React.FC = () => {
  return (
    <div className="container">
      <section className="section">
        <h1 className="title">Works</h1>
        <hr />
        <p>趣味で作成・学習したコード類. </p>
        <br />
        <div className="columns has-text-centered is-centered">
          <div className="">
            {works.map((work: Work) => (
              <div className="">
                <div className="column"></div>
                <div className="column is-three-fifth ">
                  <div className="card">
                    <div className="card-image">
                      <figure className="image is-4by3">
                        <img src={work.imgPath}></img>
                      </figure>
                    </div>

                    <div className="card-content">
                      <div className="media-content">
                        <p className="title is-4">
                          {work.name}
                          <hr />
                        </p>
                      </div>
                      <div className="content">
                        {work.description}
                        <br />
                        <OuterLink url={work.repoUrl} text="#source code" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
