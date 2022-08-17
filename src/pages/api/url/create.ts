import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../db/client";

// create url

export default async function createUrl(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { link, slug,email } = req.body;
  const exists = prisma.link.findMany({
    where: {
      slug,
    },
  });
  
  // check if url is correct
  
  if(link.startsWith("http://") || link.startsWith("https://")){
    
    if ((await exists).length > 0) {
      res.status(400).send("Url already exists");
    } else {
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
      }) 
      if(user.length > 0){
          
      }
  }
}
else{
  res.status(400).send("Url is not correct");
}
}
