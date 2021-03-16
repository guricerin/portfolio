import React from "react";

interface Career {
  period: [Date, Date | null];
  workPlace: string;
  descriptions: string[];
}

const RenderCareerTitle: React.FC<Career> = (career: Career) => {
  const start = `${career.period[0].getFullYear()}.${career.period[0].getMonth()}`;
  const end = ((end) => {
    if (end == null) {
      return "現在";
    }
    return `${end.getFullYear()}.${end.getMonth()}`;
  })(career.period[1]);
  const title = `${start} - ${end} : ${career.workPlace}`;

  return <h3>{title}</h3>;
};

const ViewCareer: React.FC = () => {
  const careers: Career[] = [
    {
      period: [new Date(2017, 10), new Date(2018, 1)],
      workPlace: "職業訓練校",
      descriptions: [
        "情報処理技術についての座学",
        "トランプゲームのWebアプリを他の訓練生とチーム制作",
        "使用言語・ツール等 : Java Servlet, JSP, Apache Tomcat",
      ],
    },
    {
      period: [new Date(2018, 3), null],
      workPlace: "システム開発会社",
      descriptions: [
        "主に制御系ソフトウェアの開発を担当",
        "バージョン管理ツール : Subversion + TortoiseSVN",
        "タスク管理ツール : Redmine",
      ],
    },
  ];

  return (
    <section className="section">
      <h1 className="title">Career</h1>
      <hr />
      <div className="content">
        {careers.map((career: Career) => (
          <section className="section">
            <RenderCareerTitle period={career.period} workPlace={career.workPlace} descriptions={career.descriptions} />
            <ul>
              {career.descriptions.map((desc: string) => (
                <li>{desc}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  );
};

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
      description:
        "産業用カメラを搭載したPLCと連携し, ウェハーを載せたテーブルの傾き補正を行う画像処理ソフトウェアの開発. ",
      usingTools: ["C#", "WinForms", "OpenCvSharp 4", "MX Component ver.4"],
    },
    {
      description: "某大学某研究室に山岳遭難者捜索用の画像処理ソフトウェアを提供. ",
      usingTools: ["C#", "WPF", "OpenCvSharp 4", "ZXing.Net"],
    },
    {
      description: "医療向け超音波画像編集用iOSアプリの開発. ",
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
        <p>業務で担当したプロジェクト. </p>
        <section className="section">
          <table className="table page-body">
            <thead>
              <tr>
                <th>概要</th>
                <th>使用言語・ツール等</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project: Project) => (
                <tr>
                  <td width="70%">{project.description}</td>
                  <td width="30%">
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
        </section>
      </div>
    </section>
  );
};

export const CareerPage: React.FC = () => {
  return (
    <div className="container">
      <ViewCareer />
      <ViewProjects />
    </div>
  );
};
