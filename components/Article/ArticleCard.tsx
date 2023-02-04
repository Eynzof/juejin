import React from "react";
import styles from "./ArticleCard.module.css";
import { Box, Container, Link } from "@mui/material";

import VisibilityOutlinedIcon from "@mui/icons-material/Visibility";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUp";

import ForumOutlinedIcon from "@mui/icons-material/Forum";
import { useRouter } from "next/router";

function ArticleCard() {
  const router = useRouter();
  return (
    <Container className={styles.article__card}>
      <Container
        className={styles.meta__container}
        sx={{ color: "text.secondary" }}
      >
        <Link href="#" underline="none" color={"text.secondary"}>
          Enzo
        </Link>
        <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
        <div className={styles.meta__date}>26天前</div>
        <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
        <div>年终总结</div>
      </Container>
      <Box
        className={styles.content__wrapper}
        sx={{ borderBottom: "1px solid", borderColor: "divider" }}
      >
        <div
          className={styles.content__main}
          onClick={() => {
            router.push("/post_detail/123");
          }}
        >
          <Box className={styles.title__row}>
            <Link href="#" underline="none" color={"text.primary"}>
              我的 2022 年，写书，房子，车子，晋升
            </Link>
          </Box>
          <div className={styles.abstract}>
            <Link
              href="#"
              underline="none"
              color={"text.disabled"}
              fontSize={"13px"}
            >
              用 4 个关键词总结 2022
              年——我的技术书和我的晋升，所以这篇年终总结以我的 2022 年为题。
            </Link>
          </div>
          <div className={styles.action__list}>
            <Box
              sx={{ display: "flex", color: "text.disabled", width: "68px" }}
            >
              <VisibilityOutlinedIcon fontSize="small" />
              <Box
                sx={{
                  marginLeft: "6px",
                  fontSize: "13px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                12w
              </Box>
            </Box>
            <Box
              sx={{ display: "flex", color: "text.disabled", width: "68px" }}
            >
              <ThumbUpOutlinedIcon fontSize="small" />
              <Box
                sx={{
                  marginLeft: "6px",
                  fontSize: "13px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                2w
              </Box>
            </Box>
            <Box
              sx={{ display: "flex", color: "text.disabled", width: "68px" }}
            >
              <ForumOutlinedIcon fontSize="small" />
              <Box
                sx={{
                  marginLeft: "6px",
                  fontSize: "13px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                4.9w
              </Box>
            </Box>
          </div>
        </div>
      </Box>
      <div></div>
    </Container>
  );
}

export default ArticleCard;
