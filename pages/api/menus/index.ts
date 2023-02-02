import { NextApiRequest, NextApiResponse } from "next";
const menu = {
  menus: [
    {
      name: "综合",
      url: "http://example.com/home",
      isActive: false,
    },
    {
      name: "关注",
      url: "http://example.com/hot",
      isActive: false,
    },
    {
      name: "前端",
      url: "http://example.com/live",
      isActive: false,
    },
    {
      name: "后端",
      url: "http://example.com/events",
      isActive: false,
    },
    {
      name: "iOS",
      url: "http://example.com/courses/new",
      isActive: false,
    },
    {
      name: "Android",
      url: "http://example.com/competitions",
      isActive: false,
    },
    {
      name: "人工智能",
      url: "http://example.com/store",
      isActive: false,
    },
    {
      name: "开发工具",
      url: "http://example.com/app",
      isActive: false,
    },
    {
      name: "代码人生",
      url: "http://example.com/plugins",
      isActive: false,
    },
    {
      name: "阅读",
      url: "http://example.com/plugins",
      isActive: false,
    },
  ],
  tagged_menus: [
    {
      name: "综合",
      url: "http://example.com/home",
      isActive: false,
    },
    {
      name: "关注",
      url: "http://example.com/hot",
      isActive: false,
    },
    {
      name: "前端",
      url: "http://example.com/live",
      isActive: false,
    },
    {
      name: "后端",
      url: "http://example.com/events",
      isActive: false,
    },
    {
      name: "iOS",
      url: "http://example.com/courses/new",
      isActive: false,
    },
    {
      name: "Android",
      url: "http://example.com/competitions",
      isActive: false,
    },
    {
      name: "人工智能",
      url: "http://example.com/store",
      isActive: false,
    },
    {
      name: "开发工具",
      url: "http://example.com/app",
      isActive: false,
    },
    {
      name: "代码人生",
      url: "http://example.com/plugins",
      isActive: false,
    },
    {
      name: "阅读",
      url: "http://example.com/plugins",
      isActive: false,
    },
  ],
};

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    res.status(200).json(menu);
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
