import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import {
  alpha,
  Box,
  Button,
  IconButton,
  InputBase,
  Link,
  styled,
  Tab,
  Tabs,
} from "@mui/material";
// import { Article } from './types';

import { dehydrate, useQuery } from "react-query";
import { queryClient, getMenus } from "../src/api";
import ArticleCard from "../components/Article/ArticleCard";
import CheckIn from "../components/Home/CheckIn";
import Operations from "../components/Header/Operations";
import JueJinLogo from "../components/Header/JueJinLogo";
import Header from "../components/Header/Header";

const AntTabs = styled(Tabs)({
  "& .MuiTabs-indicator": {
    backgroundColor: "#1890ff",
  },
});

interface StyledTabsProps {
  children?: React.ReactNode;
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

interface StyledTabProps {
  label: string;
}

const AntTab = styled((props: StyledTabProps) => (
  <Tab disableRipple {...props} />
))(({ theme }) => ({
  textTransform: "none",
  minWidth: 0,
  [theme.breakpoints.up("sm")]: {
    minWidth: 0,
  },
  fontWeight: theme.typography.fontWeightRegular,
  marginRight: theme.spacing(1),
  color: theme.palette.text.disabled,
  fontFamily: theme.typography.fontFamily,
  "&:hover": {
    color: "#40a9ff",
    opacity: 1,
  },
  "&.Mui-selected": {
    color: "#1890ff",
    fontWeight: theme.typography.fontWeightMedium,
  },
  "&.Mui-focusVisible": {
    backgroundColor: "#d1eaff",
  },
}));

export async function getServerSideProps() {
  await queryClient.prefetchQuery(["menus"], () => getMenus());
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const Home: React.FC = () => {
  // const [articles, setArticles] = useState<Article[]>([]);
  const [headerCollapsed, setHeaderCollapsed] = useState(false);
  const [currentTab, setCurrentTab] = useState(0);

  const menus_result = useQuery(["menus"], () => getMenus());

  const tagged_menus =
    menus_result.data && menus_result.data.menuTagged.data.attributes.data;

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

  const handleTabSwitch = (event: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
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
          {/* =============== Top Header =============== */}
          <Header />
        </Box>
        {/* =============== Bottom Header =============== */}
        <Box
          className={styles.header__bottom}
          sx={{ borderBottom: 1, borderColor: "divider" }}
        >
          <Box width={720}>
            <Tabs
              value={currentTab}
              onChange={handleTabSwitch}
              aria-label="ant example"
            >
              {tagged_menus &&
                tagged_menus.map((menu, index) => (
                  <AntTab
                    label={menu.name}
                    key={index}
                    sx={{ fontSize: 14, paddingX: "12px", paddingY: 0 }}
                  />
                ))}
            </Tabs>
          </Box>
          <Box
            width={240}
            sx={{
              fontSize: 14,
              paddingY: 0,
              color: "text.disabled",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <p>标签管理</p>
          </Box>
        </Box>
      </Box>
      <main className={styles.main}>
        <Box
          className={styles.main__left}
          sx={{ backgroundColor: "background.paper" }}
        >
          <ArticleCard></ArticleCard>
          <ArticleCard></ArticleCard>
          <ArticleCard></ArticleCard>
          <ArticleCard></ArticleCard>
          <ArticleCard></ArticleCard>
          <ArticleCard></ArticleCard>
          <ArticleCard></ArticleCard>
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
