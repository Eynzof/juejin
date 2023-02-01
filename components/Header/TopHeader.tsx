import React, { useEffect, useState } from "react";
import { Box, Link, styled, Tab } from "@mui/material";
import styles from "./TopHeader.module.css";
import JueJinLogo from "./JueJinLogo";
import Operations from "./Operations";
import { useQuery } from "react-query";
import { getMenus } from "../../src/api";

interface StyledTabsProps {
  children?: React.ReactNode;
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

interface StyledTabProps {
  label: string;
}

function TopHeader() {
  const [menus, setMenus] = useState([]);

  // 如果当前模式是 production 向GraphQL请求菜单数据，否则向本地的pages/api/menus请求数据
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      const menus_result = useQuery(["menus"], () => getMenus());
      setMenus(
        menus_result.data && menus_result.data.menu.data.attributes.data
      );
    } else {
      fetch("http://localhost:3000/api/menus")
        .then((response) => response.json())
        .then((data) => {
          // store the data in a variable
          console.log(data["menus"]);
          setMenus(data["menus"]);
        });
    }
  }, []);

  return (
    <div className={styles.header__container}>
      <JueJinLogo />
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
          <Operations />
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
