import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import { Box, Button, Link, styled, Tab, Tabs } from "@mui/material";
import { gql } from "@apollo/client";
import client from "../api/apollo-client";
// import { Article } from './types';

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

type HomeProps = {
  menus: NavigationItems;
  toggleTheme?: React.MouseEventHandler<HTMLButtonElement>;
};

interface NavigationItem {
  name: string;
  url: string;
  isActive: boolean;
}

type NavigationItems = NavigationItem[];

const Home: React.FC<HomeProps> = (props: HomeProps) => {
  // const [articles, setArticles] = useState<Article[]>([]);
  const [headerCollapsed, setHeaderCollapsed] = useState(false);
  const [currentTab, setCurrentTab] = useState(0);

  const menus = props.menus;
  console.log(menus);

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

  const handleTabSwitch = (event: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
  };

  return (
    <div className={styles.home__container}>
      <div className={styles.header}>
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
                {menus.map((menu, index) => (
                  <Box sx={{ color: "text.default" }} key={index}>
                    <Link
                      href={menu.url}
                      className={styles.header__navlink}
                      sx={{ color: "text.secondary" }}
                    >
                      {menu.name}
                    </Link>
                  </Box>
                ))}
                <div className={styles.header__banner}>
                  <img
                    src="/header_banner.jpg"
                    alt="Logo"
                    style={{ maxWidth: 115, maxHeight: 40 }}
                  />
                </div>
              </div>
              <div className={styles.header__rightside}>
                <Button onClick={props.toggleTheme} color={"info"}>
                  Toggle Theme
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/* =============== Bottom Header =============== */}
        <div className={styles.header__bottom}>
          <Box width={720}>
            <Tabs
              value={currentTab}
              onChange={handleTabSwitch}
              aria-label="ant example"
              sx={{ backgroundColor: "background.default" }}
            >
              {menu_bottom.map((word, index) => (
                <AntTab
                  label={word}
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
        </div>
      </div>
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

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query Menu {
        menu(locale: "zh-CN") {
          data {
            attributes {
              data
            }
          }
        }
      }
    `,
  });

  // console.log(data.menu.data.attributes.data);
  return {
    props: {
      menus: data.menu.data.attributes.data,
    },
  };
}
