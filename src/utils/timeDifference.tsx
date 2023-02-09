import React from "react";

const getTimeDifference = (date: Date) => {
  const today = new Date();
  let articlesTime = new Date(date);
  const diffTime = Math.abs(today.getTime() - articlesTime.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) {
    return "今天";
  } else if (diffDays === 1) {
    return "昨天";
  } else {
    return `${diffDays}天前`;
  }
};

export default getTimeDifference;
