import React, { useState } from "react";
import styles from "./ArticleCard.module.css";
import { Box, Container, Link } from "@mui/material";

import VisibilityOutlinedIcon from "@mui/icons-material/Visibility";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUp";

import ForumOutlinedIcon from "@mui/icons-material/Forum";
import { useRouter } from "next/router";
// import DateDisplay from "../../utils/timeDifference";
import timeDifference from "../../utils/timeDifference";
function ArticleCard(article: any) {
  console.log(article.article);
  const a = article.article;
  let dataLoaded = false;
  if (a) {
    dataLoaded = true;
  }

  const slug = dataLoaded ? `/post_detail/${a.attributes.slug}` : "";
  const title = dataLoaded ? a.attributes.title : "";
  const description = dataLoaded ? a.attributes.description : "";
  const author = dataLoaded ? a.attributes.author.data.attributes.name : "";
  const publishedAt = dataLoaded ? a.attributes.publishedAt : "";
  const category = dataLoaded ? a.attributes.category.data.attributes.name : "";
  const likes = dataLoaded ? a.attributes.category.data.attributes.name : "0";
  const views = dataLoaded ? a.attributes.category.data.attributes.name : "0";
  const comments = dataLoaded
    ? a.attributes.category.data.attributes.name
    : "0";

  const router = useRouter();
  return (
    a && (
      <Container className={styles.article__card}>
        <Container
          className={styles.meta__container}
          sx={{ color: "text.secondary" }}
        >
          <Link href={slug} underline="none" color={"text.secondary"}>
            {author}
          </Link>
          <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          <div className={styles.meta__date}>{timeDifference(publishedAt)}</div>
          {/*<div className={styles.meta__date}>{publishedAt}</div>*/}
          <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          {category}
        </Container>
        <Box
          className={styles.content__wrapper}
          sx={{ borderBottom: "1px solid", borderColor: "divider" }}
        >
          <div
            className={styles.content__main}
            onClick={() => {
              router.push(slug);
            }}
          >
            <Box className={styles.title__row}>
              <Link href={slug} underline="none" color={"text.primary"}>
                {title}
              </Link>
            </Box>
            <div className={styles.abstract}>
              <Link
                href={slug}
                underline="none"
                color={"text.disabled"}
                fontSize={"13px"}
              >
                {description}
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
                  {views}
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
                  {likes}
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
                  {comments}
                </Box>
              </Box>
            </div>
          </div>
        </Box>
        <div></div>
      </Container>
    )
  );
}

export default ArticleCard;
