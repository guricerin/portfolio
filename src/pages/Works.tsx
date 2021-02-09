import React from 'react';
import shishiroImg from '../assets/images/shishiro.png'
import bftImg from '../assets/images/bf-derivatives-tool.png'
import bffsharpImg from '../assets/images/bf-fsharp.png'
import bookImg from '../assets/images/book.jpg'
import fsharpLogo from '../assets/svg-porn/fsharp.svg'

interface Work {
    name: string,
    description: string,
    imgPath: string,
    repoPath: string
}

const works: Work[] = [
    {
        name: "shishiro-foods-site",
        description: "The joke site of Shishiro Botan, Hololive 5th generation.",
        imgPath: shishiroImg,
        repoPath: "https://github.com/guricerin/shishiro-foods-site",
    },
    {
        name: "nand2tetris",
        description: "\"The Elements of Computation Systems\" code, Chapter 6 - 11 are written by Rust.",
        imgPath: bookImg,
        repoPath: "https://github.com/guricerin/nand2tetris"
    },
    {
        name: "bf-derivatives-tool",
        description: "Creating your own Brainfuck derivatives tool, written by Rust.",
        imgPath: bftImg,
        repoPath: "https://github.com/guricerin/bf-derivatives-tool"
    },
    {
        name: "understanding-computation",
        description: "\"Understanding Computation\" code, written by F#.",
        imgPath: bookImg,
        repoPath: "https://github.com/guricerin/understanding-computation",
    },
    {
        name: "brainfuck",
        description: "Brainfuck interpreter, written by F#.",
        imgPath: bffsharpImg,
        repoPath: "https://github.com/guricerin/brainfuck"
    },
    {
        name: "FSharp.Scheme",
        description: "Tiny Scheme interpreter, written by F#.",
        imgPath: fsharpLogo,
        repoPath: "https://github.com/guricerin/FSharp.Scheme"
    },
];

interface OuterLinkProps {
    path: string,
    text: string
}

const OuterLink: React.FC<OuterLinkProps> = (props) => {
    return (
        <a href={props.path} target="_blank" rel="noopener noreferrer">
            {props.text}
        </a>
    )
}

const WorksPage: React.FC = () => {
    return (
        <div className="container">
            <section className="section">
                <h1 className="title">Works</h1>
                <hr></hr>
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
                                                <OuterLink path={work.repoPath} text="#souce code" />
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
    )
}

export default WorksPage;