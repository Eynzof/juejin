import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import { Box, Button, Link, styled, Tab, Tabs } from "@mui/material";
// import { Article } from './types';

import { dehydrate, useQuery } from "react-query";
import { queryClient, getMenus } from "../src/api";

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

type HomeProps = {
  toggleTheme?: React.MouseEventHandler<HTMLButtonElement>;
};

const Home: React.FC<HomeProps> = (props: HomeProps) => {
  // const [articles, setArticles] = useState<Article[]>([]);
  const [headerCollapsed, setHeaderCollapsed] = useState(false);
  const [currentTab, setCurrentTab] = useState(0);

  const menus_result = useQuery(["menus"], () => getMenus());

  const menus =
    menus_result.data && menus_result.data.menu.data.attributes.data;
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
                {menus &&
                  menus.map((menu, index) => (
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
        </div>
      </div>
      <main className={styles.main}>
        <div className={styles.main__left}>
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
