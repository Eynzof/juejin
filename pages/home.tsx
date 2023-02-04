import React, { ReactElement, useEffect, useState } from "react";
import styles from "./home.module.css";
import { Box } from "@mui/material";
import { getMenus, queryClient } from "../src/api";
import CheckIn from "../src/components/Home/CheckIn/CheckIn";
import TopHeader from "../components/Header/TopHeader";
import BottomHeader from "../components/Header/BottomHeader";
import ArticleTab from "../components/Article/ArticleTab";
import { dehydrate } from "react-query";
import sampleMenuData from "../resources/MenuResponse.json";
import { NextPageWithLayout } from "./_app";
import Layout from "../src/components/Layout";
import { useDispatch, useSelector } from "react-redux";
import {
  selectHeaderCollapsed,
  setHeaderState,
} from "../src/store/headerSlice";
import AuthorRank from "../src/components/Home/AuthorRank/AuthorRank";

export async function getServerSideProps() {
  // await testApi();

  await queryClient.prefetchQuery(["menus"], async () => {
    try {
      return await getMenus();
    } catch (error) {
      console.log(
        "未能连接到GraphQL Endpoint。请检查后端是否启动，正在使用本地数据"
      );
      console.error(error);

      // 使用本地数据
      return sampleMenuData;
    }
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const Home: NextPageWithLayout = () => {
  const dispatch = useDispatch();
  const headerCollapsed = useSelector(selectHeaderCollapsed);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const top = headerCollapsed ? "0" : "0";
  const position = headerCollapsed ? "fixed" : "relative";

  const handleScroll = () => {
    if (window.pageYOffset > 50) {
      dispatch(setHeaderState(true));
    } else {
      dispatch(setHeaderState(false));
    }
  };

  return (
    <div className={styles.home__container}>
      <Box
        className={styles.header}
        sx={{
          backgroundColor: "background.paper",
          top: { top },
          position: { position },
        }}
      >
        <BottomHeader />
      </Box>
      <main className={styles.main}>
        <Box
          className={styles.main__left}
          sx={{ backgroundColor: "background.paper" }}
        >
          <ArticleTab />
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
          <AuthorRank />
        </div>
      </main>
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
