import React, {useEffect, useState} from "react";
import {Box, Link, styled, Tab} from "@mui/material";
import styles from "./TopHeader.module.css";
import JueJinLogo from "./JueJinLogo";
import Operations from "./Operations";
import {dehydrate, useQuery} from "react-query";
import {getMenus, queryClient} from "../../src/api";
import {GetStaticProps} from "next";
import {sampleUserData} from "../../src/utils/sample-data";
import id from "../../pages/users/[id]";
import {sampleMenuData} from "../../src/data/Menus";
import {User} from "../../interfaces";
import {Menu} from "../../src/types/Menu";

interface StyledTabsProps {
  children?: React.ReactNode;
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

interface StyledTabProps {
  label: string;
}

export async function getServerSideProps() {
  await queryClient.prefetchQuery(["menus"], () => getMenus());
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const TopHeader = () => {
  const [menus, setMenus] = useState([]);
  const menus_result = useQuery(["menus"], () => getMenus());

  if (menus_result.error) {
    console.error(menus_result.error);
  }

  // 如果当前模式是 production 向GraphQL请求菜单数据，否则采用本地的StaticProps
  useEffect(() => {
    console.log("process.env.APP_ENV", process.env.APP_ENV);
    if (process.env.APP_ENV === "production") {
      console.log(menus_result)
      setMenus(
        menus_result.data && menus_result.data.menu.data.attributes.data
      );
    } else {
      setMenus(sampleMenuData);
    }
  }, []);

  return (
    <div className={styles.header__container}>
      <JueJinLogo/>
      <div className={styles.header__navigation}>
        <div className={styles.header__navlist}>
          {menus &&
            menus.map((menu, index) => (
              <Box sx={{color: "text.default"}} key={index}>
                <Link
                  href={menu.url}
                  className={styles.header__navlink}
                  sx={{color: "text.secondary"}}
                >
                  {menu.name}
                </Link>
              </Box>
            ))}
          <div className={styles.header__banner}>
            <img
              src="/header_banner.jpg"
              alt="Logo"
              style={{maxWidth: 115, maxHeight: 40}}
            />
          </div>
        </div>
        <div className={styles.header__rightside}>
          <Operations/>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
