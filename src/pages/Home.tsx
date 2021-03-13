import React from "react";

const ViewAbout: React.FC = () => {
  return (
    <section className="section">
      <h1 className="title">About</h1>
      <hr />
      ソフトウェアエンジニア guricerin のポートフォリオサイトです.
    </section>
  );
};

const ViewFavorites: React.FC = () => {
  return (
    <section className="section">
      <h1 className="title">Favorites</h1>
      <hr />
      <div className="content">
        <ul>
          <li>
            ミュージシャン: B'z, THE YELLOW MONKEY, 凋叶棕, 魂音泉, DEMONDICE ...... and more
          </li>
          <li>
            作家: 神林長平, 時雨沢恵一 ...... and more
          </li>
        </ul>
      </div>
    </section>
  );
};

const HomePage: React.FC = () => {
  return (
    <div className="container">
      <ViewAbout />
      <ViewFavorites />
    </div>
  );
};

export default HomePage;
