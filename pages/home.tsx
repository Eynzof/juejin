import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Home.module.css";
import {Box, styled, Tab, Tabs} from "@mui/material";
import { TabList, TabContext, TabPanel } from '@mui/lab';

// import { Article } from './types';


const AntTabs = styled(Tabs)({
  borderBottom: '1px solid #e8e8e8',
  '& .MuiTabs-indicator': {
    backgroundColor: '#1890ff',
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

const AntTab = styled((props: StyledTabProps) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'none',
    minWidth: 0,
    [theme.breakpoints.up('sm')]: {
      minWidth: 0,
    },
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(1),
    color: 'rgba(0, 0, 0, 0.85)',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: '#40a9ff',
      opacity: 1,
    },
    '&.Mui-selected': {
      color: '#1890ff',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&.Mui-focusVisible': {
      backgroundColor: '#d1eaff',
    },
  }),
);


interface Props {}

const Home: React.FC<Props> = () => {
  // const [articles, setArticles] = useState<Article[]>([]);
  const [headerCollapsed, setHeaderCollapsed] = useState(false);

  const [currentTab, setCurrentTab] = useState("综合");

  const menu_top = [
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

  const menu_bottom = [
    "综合",
    "关注",
    "后端",
    "前端",
    "Android",
    "iOS",
    "人工智能",
    "开发工具",
    "代码人生",
    "阅读",
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

  const handleTabSwitch = (event: React.SyntheticEvent, newValue: string) => {
    setCurrentTab(newValue);
  }

  return (
    <div className={styles.home__container}>
      <header className={styles.header}>
        <div
          className={`${styles.header__top} ${
            headerCollapsed ? styles.collapsed : ""
          }`}
        >
          {/* =============== Top Header =============== */}
          <div className={styles.header__container}>
            <img
              src="/juejin_logo.svg"
              alt="Logo"
              className={styles.header__logo}
            />
            <div className={styles.header__navigation}>
              <div className={styles.header__navlist}>
                {menu_top.map((word, index) => (
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
              <div className={styles.header__rightside}>HEADER</div>
            </div>
          </div>
        </div>
        {/* =============== Bottom Header =============== */}
        <div className={styles.header__bottom}>
          <Box sx={{ bgcolor: '#fff' }}>
            <AntTabs value={currentTab} onChange={handleTabSwitch} aria-label="ant example">
              {menu_bottom.map((word, index) => (
                <AntTab label={word} key={index} sx={{fontSize: 14, paddingX: "12px", paddingY: 0}}/>
              ))}
            </AntTabs>
            <Box sx={{ p: 3 }} />
          </Box>
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
