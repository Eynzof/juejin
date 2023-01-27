import React from "react";
import styles from "./ArticleCard.module.css";
import { Box, Container, Link } from "@mui/material";

function ArticleCard() {
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
      <div className={styles.content__wrapper}>
        <div className={styles.content__main}>
          <Box className={styles.title__row}>
            <Link href="#" underline="none" color={"text.secondary"}>
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
          <div className={styles.action__list}></div>
        </div>
      </div>
      <div></div>
    </Container>
  );
}

export default ArticleCard;
