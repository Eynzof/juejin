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
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <Box sx={{ backgroundColor: "background.paper" }}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              display: "flex",
              alignItems: "center",
              width: "100%",
            }}
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
