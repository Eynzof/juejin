import { NextApiRequest, NextApiResponse } from "next";
import menu from "../../../resources/menu.json";

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    res.status(200).json(menu);
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
