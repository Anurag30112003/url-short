import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../db/client";
import makeid from "../../../createId";

// create url

export default async function createUrl(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { link, email } = req.body;
  const slug = makeid(5);
  // const data = prisma.link.findMany({
  //   where: {
  //     slug,
  //   },
  // });

  if (link.startsWith("http://") || link.startsWith("https://")) {
    const Url = await prisma.link.create({
      data: {
        url: link,
        slug,
      },
    });

    res.status(201).json(Url);
    // add link to user model
    const user = await prisma.user.findMany({
      where: {
        email,
      },
    });
    if (user.length > 0) {
    }
  } else {
    res.status(400).send("Url is not correct");
  }
}
