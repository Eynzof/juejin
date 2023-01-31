import React from "react";
import { useRouter } from "next/router";

const PostDetail = () => {
  const router = useRouter();
  const { post_id } = router.query;
  return (
    <div>
      <h1>hi</h1>
      获取id为{post_id}的帖子
    </div>
  );
};

export default PostDetail;
