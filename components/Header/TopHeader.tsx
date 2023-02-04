import React from "react";
import { Box, Link, useMediaQuery, useTheme } from "@mui/material";
import styles from "./TopHeader.module.css";
import JueJinLogo from "./JueJinLogo";
import Operations from "./Operations";
import { useQuery } from "react-query";
import { getMenus } from "../../src/api";
import menus from "../../pages/api/menus";

const TopHeader = () => {
  const menus_result = useQuery(["menus"], () => getMenus());
  const menus =
    menus_result.data && menus_result.data.menu.data.attributes.data;
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  console.log(matches);
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
};

export default TopHeader;
