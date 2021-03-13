import React from "react";

interface Project {
  description: string;
  usingTools: string[];
}

const ViewProjects: React.FC = () => {
  const projects: Project[] = [
    {
      description: "フィルター検査装置制御ソフトウェアの機能追加・不具合対応. ",
      usingTools: ["VC++", "MFC", "C#", "WinForms"],
    },
    {
      description: "産業用カメラを搭載したPLCと連携し, ウェハーを載せたテーブルの傾き補正を行う画像処理ソフトウェアの開発. ",
      usingTools: ["C#", "WinForms", "OpenCvSharp 4", "MX Component ver.4"],
    },
    {
      description: "某大学某研究室に山岳遭難者捜索用の画像処理ソフトウェアを提供. ",
      usingTools: ["C#", "WPF", "OpenCvSharp 4", "ZXing.Net"],
    },
    {
      description: "医療用の超音波画像編集iOSアプリの開発. ",
      usingTools: ["C#", "Xamarin.iOS", "SkiaSharp"],
    },
    {
      description: "Zend Frameworkで作成された業務用WebアプリをLaravelに移行. ",
      usingTools: ["PHP 7.4", "Laravel 6", "CentOS 7", "Vagrant", "Docker"],
    },
  ];

  return (
    <section className="section">
      <h1 className="title">Projects</h1>
      <hr />
      <div className="content">
        <p>仕事で関わったプロジェクト. </p>
        <br />
        <table className="table">
          <thead>
            <tr>
              <th>概要</th>
              <th>使用言語・ツール等</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project: Project) => (
              <tr>
                <td>{project.description}</td>
                <td>
                  {project.usingTools.map((tool: string) => (
                    <div>
                      {tool}
                      <br />
                    </div>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export const CareerPage: React.FC = () => {
  return (
    <div className="container">
      <ViewProjects />
    </div>
  );
};
