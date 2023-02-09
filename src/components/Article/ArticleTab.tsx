import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ArticleCard from "./ArticleCard";
import { useQuery } from "react-query";
import { getArticles, getMenus } from "../../api";
import { varOfArticles } from "../../graphql/variables";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 0 }}>{children}</Box>}
    </div>
  );
}

export default function ArticleTab() {
  const [selected, setSelected] = React.useState(0);
  const r = useQuery(["articles"], () => getArticles(varOfArticles));

  const articles = r.data.articles.data;

  const handleTabChange = (
    event: React.SyntheticEvent,
    selectedTab: number
  ) => {
    setSelected(selectedTab);
    console.log("Tab switched to", selectedTab);
  };

  // 如果想要在Tab页面里面直接嵌入文章，可能会比较麻烦
  // 也可以分离开二者，Tab页面只负责Tab的切换，文章的内容由ArticleCard组件负责
  // 需要注意的是，如果<p>的子元素是<div>，也会报hydration不匹配的错误。

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={selected}
          onChange={handleTabChange}
          aria-label="basic tabs example"
        >
          <Tab label="推荐" key={1} />
          <Tab label="最新" key={2} />
          <Tab label="热榜" key={3} />
        </Tabs>
      </Box>
      <TabPanel value={selected} index={0}>
        <p>推荐</p>
        {articles &&
          articles.map((article) => {
            return <ArticleCard article={article} key={article.id} />;
          })}
      </TabPanel>
      <TabPanel value={selected} index={1}>
        <p>最新</p>
        <ArticleCard />
      </TabPanel>
      <TabPanel value={selected} index={2}>
        <p>热榜</p>
        <ArticleCard />
      </TabPanel>
    </Box>
  );
}
