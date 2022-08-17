import { prisma } from "../../db/client";
import { NextApiRequest, NextApiResponse } from "next";


export default async (req: NextApiRequest, res: NextApiResponse) => {

  // const query = req.query;
  // console.log(query);

  const slug = req.query["slug"];

  if(!slug || typeof slug !== "string" ){
    res.statusCode = 404;
    res.send(JSON.stringify({message:"please use slug"}))
    return;
  }

  const data = await prisma.link.findFirst({
    where: {
      slug:{
        equals:slug,
      }
    },
  })

  if(!data){
    res.statusCode = 404;
    res.send(JSON.stringify({message:"slug not found"}))
    return;
  }
  // console.log(data)
  return res.redirect(data.url);

}