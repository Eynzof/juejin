import React, { useState } from "react";
import styles from "./BottomHeader.module.css";
import { Box, styled, Tab, Tabs } from "@mui/material";
import { useQuery } from "react-query";
import { getMenus } from "../../api";

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

const BottomHeader = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const menus_result = useQuery(["menus"], () => getMenus());

  const menus =
    menus_result.data && menus_result.data.menuTagged.data.attributes.data;

  const handleTabSwitch = (event: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
  };

  return (
    <Box
      className={styles.header__bottom}
      sx={{ borderBottom: 1, borderColor: "divider" }}
    >
      <Tabs
        value={currentTab}
        onChange={handleTabSwitch}
        aria-label="tabs"
        className={styles.tabs__container}
        variant="scrollable"
        scrollButtons="auto"
      >
        {menus &&
          menus.map((menu, index) => (
            <AntTab
              label={menu.name}
              key={index}
              sx={{ fontSize: 14, paddingX: "12px", paddingY: 0 }}
            />
          ))}
      </Tabs>
      <Box color={"text.disabled"} className={styles.tag__management}>
        <p>标签管理</p>
      </Box>
    </Box>
  );
};

export default BottomHeader;
