import React, { ReactElement, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../src/components/Layout";
import Home from "../index";
import { NextPageWithLayout } from "../_app";
import { Box } from "@mui/system";
import axios from "axios";
import { Avatar } from "@mui/material";

const PostDetail: NextPageWithLayout = () => {
  const router = useRouter();
  const { post_id } = router.query;

  const axios = require("axios");

  const [post, setPost] = useState(null);

  useEffect(() => {
    if (Number(post_id) > 0) {
      axios
        .get(`http://localhost:1337/api/articles/${Number(post_id)}`)
        .then((resp) => {
          setPost(resp.data.data.attributes);
        });
    }
  }, [post_id]);

  return (
    <Box
      sx={{
        marginTop: "20px",
        marginLeft: "200px",
        width: "60%",
        minHeight: "100vh",
        backgroundColor: "white",
        paddingTop: "10px",
        paddingLeft: "20px",
      }}
    >
      <h1>{post?.title}</h1>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Avatar
          src={
            "https://p3-passport.byteimg.com/img/user-avatar/1f62eb22d1e7014278c6cdfcbf010a13~100x100.awebp"
          }
        />
        <h3>程序员范某 - {post?.createdAt}</h3>
      </Box>
      <p>{post?.description}</p>
    </Box>
  );
};

PostDetail.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default PostDetail;
