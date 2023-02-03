import React, { useEffect, useState } from "react";
import styles from "./BottomHeader.module.css";
import { Box, styled, Tab, Tabs } from "@mui/material";
import { dehydrate, useQuery } from "react-query";
import { getMenus, queryClient } from "../../src/api";
import { sampleMenuData } from "../../src/data/Menus";
import { sampleTaggedMenuData } from "../../src/data/TaggedMenus";

interface StyledTabsProps {
  children?: React.ReactNode;
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

interface StyledTabProps {
  label: string;
}

const AntTabs = styled(Tabs)({
  "& .MuiTabs-indicator": {
    backgroundColor: "#1890ff",
  },
});

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

const BottomHeader = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const [menus, setMenus] = useState([]);
  const menus_result = useQuery(["menus"], () => getMenus());

  // 如果当前模式是 production 向 GraphQL 请求菜单数据，否则向本地的 pages/api/menus 请求数据
  useEffect(() => {
    console.log("process.env.APP_ENV", process.env.APP_ENV);
    if (process.env.APP_ENV === "production") {
      setMenus(
        menus_result.data && menus_result.data.menuTagged.data.attributes.data
      );
    } else {
      setMenus(sampleTaggedMenuData);
    }
  }, []);

  const handleTabSwitch = (event: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
  };

  return (
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
          {menus &&
            menus.map((menu, index) => (
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
  );
};

export default BottomHeader;
