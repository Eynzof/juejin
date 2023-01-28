import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import { Box } from "@mui/material";
import { dehydrate } from "react-query";
import { getMenus, queryClient } from "../src/api";
import ArticleCard from "../components/Article/ArticleCard";
import CheckIn from "../components/Home/CheckIn";
import TopHeader from "../components/Header/TopHeader";
import ArticleNavigation from "../components/Article/ArticleNavigation";
import BottomHeader from "../components/Header/BottomHeader";
import ArticleTab from "../components/Article/ArticleTab";

export async function getServerSideProps() {
  await queryClient.prefetchQuery(["menus"], () => getMenus());
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const Home = () => {
  const [headerCollapsed, setHeaderCollapsed] = useState(false);

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
      <Box
        className={styles.header}
        sx={{ backgroundColor: "background.paper" }}
      >
        <Box
          sx={{ borderBottom: 1, borderColor: "divider" }}
          className={`${styles.header__top} ${
            headerCollapsed ? styles.collapsed : ""
          }`}
        >
          {/* =============== Top TopHeader =============== */}
          <TopHeader />
        </Box>
        {/* =============== Bottom TopHeader =============== */}
        <BottomHeader />
      </Box>
      <main className={styles.main}>
        <Box
          className={styles.main__left}
          sx={{ backgroundColor: "background.paper" }}
        >
          <ArticleTab />
          {/*<ArticleNavigation />*/}
          {/*<ArticleCard></ArticleCard>*/}

          {/*{articles.map((article) => (*/}
          {/*  <div key={article.id}>*/}
          {/*    <h2>{article.title}</h2>*/}
          {/*    <p>{article.content}</p>*/}
          {/*  </div>*/}
          {/*))}*/}
        </Box>
        <div className={styles.main__right}>
          {/* =============== 签到 =============== */}
          <CheckIn></CheckIn>
          <div className={styles.author__info}></div>
          <div className={styles.related__articles}>
            <Box sx={{ color: "text.secondary" }}>相关文章</Box>
          </div>
          <div className={styles.table__of__contents}>
            <Box sx={{ color: "text.secondary" }}>文章目录</Box>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
