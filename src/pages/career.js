import React from "react"
import { Layout } from "../components/layout"

function ViewCareers() {
  const careers = [
    {
      period: "2018.3 - 2021.4",
      workPlace: "ソフトウェア開発会社",
      descs: [
        "主に制御系ソフトウェアの開発を担当. ",
        "バージョン管理ツール : Subversion + TortoiseSVN",
        "タスク管理ツール : Redmine",
      ],
      projects: [
        {
          desc: "フィルター検査装置制御ソフトウェアの機能追加・不具合対応. ",
          env: "VC++, MFC, C#, WinForms",
        },
        {
          desc:
            "産業用カメラを搭載したPLCと連携し, ウェハーを載せたテーブルの傾き補正を行う画像処理ソフトウェアの開発. ",
          env: "C#, WinForms, OpenCvSharp4, MX Component ver.4",
        },
        {
          desc: "某大学某研究室に山岳遭難者捜索用の画像処理ソフトウェアを提供. ",
          env: "C#, WPF, OpenCvSharp4, ZXing.Net",
        },
        {
          desc: "医療向け超音波画像編集用iOSアプリの開発. ",
          env: "C#, Xamarin.iOS",
        },
        {
          desc: "Zend Frameworkで作成された業務用WebアプリをLaravelに移行. ",
          env: "PHP 7.4, Laravel 6, CentOS 7, Vagrant, Docker",
        },
      ],
    },
    {
      period: "2017.10 - 2018.1",
      workPlace: "職業訓練校",
      descs: ["情報処理技術についての座学とアプリ作成"],
      projects: [
        {
          desc: "ボードゲーム・ドメモのWebアプリを他の訓練生とチーム制作（主にバックエンドを担当）. ",
          env: "Java Servlet, JSP, Apache Tomcat",
        },
      ],
    },
  ]

  return (
    <div className="">
      {careers.map((career, _) => (
        <section className="">
          <div className="py-4">
            <div className="flex justify-start pb-1.5">
              <h2 className="text-xl">{career.period}</h2>
              <h2 className="px-2 text-xl">{career.workPlace}</h2>
            </div>
            <hr />
            <ul className="list-none pt-3">
              {career.descs.map((desc, _) => (
                <li>{desc}</li>
              ))}
            </ul>
            <div className="list-none mt-3">
              <h3 className="py-2">担当プロジェクト :</h3>
              <table className="table-fixed border border-collapse">
                <thead>
                  <th className="w-1/2 border p-2">概要</th>
                  <th className="w-1/2 border p-2">開発環境</th>
                </thead>
                <tbody>
                  {career.projects.map((project, _) => (
                    <tr>
                      <td className="border p-2">{project.desc}</td>
                      <td className="border p-2">{project.env}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      ))}
    </div>
  )
}

export default () => (
  <Layout>
    <div>
      <h1 className="pb-4">ソフトウェアエンジニアとしての経歴</h1>
      <ViewCareers />
    </div>
  </Layout>
)
