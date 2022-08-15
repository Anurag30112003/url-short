import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../db/client";

// create url

export default async function createUrl(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { link, slug } = req.body;
  const exists = prisma.url.findMany({
    where: {
      slug,
    },
  });
  if ((await exists).length > 0) {
    res.status(400).send("Url already exists");
  } else {
    const Url = await prisma.url.create({
      data: {
        url: link,
        slug,
      },
    });
    res.status(201).json(Url);
  }
}
