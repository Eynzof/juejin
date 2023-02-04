import React, { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import { Box } from "@mui/material";
import styles from "./Layout.module.css";
import TopHeader from "../../components/Header/TopHeader";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "稀土掘金" }: Props) => {
  const [headerCollapsed, setHeaderCollapsed] = useState(false);

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

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
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
            <TopHeader />
          </Box>
        </Box>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
