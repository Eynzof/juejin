import React from "react";
import styles from "./ArticleCard.module.css";
import { Box, Container, Link } from "@mui/material";

import VisibilityOutlinedIcon from "@mui/icons-material/Visibility";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUp";

import ForumOutlinedIcon from "@mui/icons-material/Forum";
import { useRouter } from "next/router";

function ArticleCard(article: any) {
  console.log(article.article);
  const a = article.article;

  const router = useRouter();
  return (
    <Container className={styles.article__card}>
      <Container
        className={styles.meta__container}
        sx={{ color: "text.secondary" }}
      >
        <Link href="/post_detail/123" underline="none" color={"text.secondary"}>
          {a.attributes.author.data.attributes.name}
        </Link>
        <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
        <div className={styles.meta__date}>26天前</div>
        <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
        {a && a.attributes.category.data.attributes.name}
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
            <Link
              href="/post_detail/123"
              underline="none"
              color={"text.primary"}
            >
              {a && a.attributes.title}
            </Link>
          </Box>
          <div className={styles.abstract}>
            <Link
              href="/post_detail/123"
              underline="none"
              color={"text.disabled"}
              fontSize={"13px"}
            >
              {a.attributes.description}
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
