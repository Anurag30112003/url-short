import { prisma } from "../../../db/client";
import { useRouter } from "next/router";
import { NextApiRequest, NextApiResponse } from "next";
// import { NextRequest, NextResponse } from "next/server";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const router = useRouter();

  const { slug } = router.query as { slug: string };

  if (!slug) {
    return res.status(400).send("No slug provided");
  }

  const exists = prisma.url.findMany({
    where: {
      slug,
    },
    select: {
      url: true,
    },
  });


  if ((await exists).length > 0) {
   const url = (await exists)[0].url; 
    res.writeHead(302, { Location: url });
    res.end();

  }
};
