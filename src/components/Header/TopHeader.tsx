import React from "react";
import {
  Box,
  Button,
  Link,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import styles from "./TopHeader.module.css";
import JueJinLogo from "./JueJinLogo";
import Operations from "./Operations";
import { useQuery } from "react-query";
import { getMenus } from "../../api";
import menus from "../../../pages/api/menus";

const TopHeader = () => {
  const menus_result = useQuery(["menus"], () => getMenus());
  const menus =
    menus_result.data && menus_result.data.menu.data.attributes.data;
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={styles.header__container}>
      <JueJinLogo />
      <div className={styles.header__navigation}>
        <div className={styles.header_navcol}>
          <Button
            id="demo-positioned-button"
            aria-controls={open ? "demo-positioned-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            首页
          </Button>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
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
          </Menu>
        </div>
        <div className={styles.header__navlist}>
          <div className={styles.header__nav}>
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
          </div>

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
