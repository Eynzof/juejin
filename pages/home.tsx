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
import Brightness4Icon from "@mui/icons-material/Brightness4";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";

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

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
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
  currentTheme?: "light" | "dark";
};

const Home: React.FC<HomeProps> = (props: HomeProps) => {
  // const [articles, setArticles] = useState<Article[]>([]);
  const [headerCollapsed, setHeaderCollapsed] = useState(false);
  const [currentTab, setCurrentTab] = useState(0);

  console.log(props.currentTheme);

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
          <div className={styles.header__container}>
            <img
              src={
                props.currentTheme === "light"
                  ? "/juejin_logo.svg"
                  : "/juejin_logo_dark.svg"
              }
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
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="搜索..."
                    inputProps={{ "aria-label": "search" }}
                  />
                </Search>

                <IconButton
                  onClick={props.toggleTheme}
                  color="primary"
                  aria-label="toggle theme"
                >
                  <Brightness4Icon />
                </IconButton>

                <IconButton color="primary" aria-label="notifications">
                  <NotificationsIcon />
                </IconButton>
              </div>
            </div>
          </div>
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
