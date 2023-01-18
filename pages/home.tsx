import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Home.module.css";
// import { Article } from './types';

interface Props {}

const Home: React.FC<Props> = () => {
  // const [articles, setArticles] = useState<Article[]>([]);
  const [headerCollapsed, setHeaderCollapsed] = useState(false);

  const words = [
    "首页",
    "沸点",
    "课程上新",
    "直播",
    "活动",
    "竞赛",
    "商城",
    "APP",
    "插件",
  ];

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 50) {
      setHeaderCollapsed(true);
    } else {
      setHeaderCollapsed(false);
    }
  };

  return (
    <div className={styles.home__container}>
      <header className={styles.header}>
        <div
          className={`${styles.header__top} ${
            headerCollapsed ? styles.collapsed : ""
          }`}
        >
          {/* header top content */}
          <div className={styles.header__container}>
            <img
              src="/juejin_logo.svg"
              alt="Logo"
              className={styles.header__logo}
            />
            <div className={styles.header__navigation}>
              <div className={styles.header__navlist}>
                {words.map((word, index) => (
                  <div key={index} className={styles.header__navkey}>
                    <a href="" className={styles.header__navlink}>
                      {word}
                    </a>
                  </div>
                ))}
                <div className={styles.header__banner}>
                  <img
                    src="/header_banner.jpg"
                    alt="Logo"
                    style={{ maxWidth: 115, maxHeight: 40 }}
                  />
                </div>
              </div>
              <div className={styles.header__rightside}>aaa</div>
            </div>
          </div>
        </div>
        <div className={styles.header__bottom}>
          Header Bottom
          {/* header bottom content */}
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.main__left}>
          <div>
            <h1>Articles</h1>
            <p>Article lore</p>
          </div>

          <div>
            <h1>Articles</h1>
            <p>Article lore</p>
          </div>

          <div>
            <h1>Articles</h1>
            <p>Article lore</p>
          </div>
          <div>
            <h1>Articles</h1>
            <p>Article lore</p>
          </div>
          <div>
            <h1>Articles</h1>
            <p>Article lore</p>
          </div>
          <div>
            <h1>Articles</h1>
            <p>Article lore</p>
          </div>

          <div>
            <h1>Articles</h1>
            <p>Article lore</p>
          </div>

          <div>
            <h1>Articles</h1>
            <p>Article lore</p>
          </div>

          <div>
            <h1>Articles</h1>
            <p>Article lore</p>
          </div>
          {/*{articles.map((article) => (*/}
          {/*  <div key={article.id}>*/}
          {/*    <h2>{article.title}</h2>*/}
          {/*    <p>{article.content}</p>*/}
          {/*  </div>*/}
          {/*))}*/}
        </div>
        <div className={styles.main__right}>
          <div className={styles.author__info}></div>
          <div className={styles.related__articles}>
            <h4>Related Articles</h4>
          </div>
          <div className={styles.table__of__contents}>
            <h4>Table of Contents</h4>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
