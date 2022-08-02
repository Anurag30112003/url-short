import { NextApiRequest,NextApiResponse } from "next";
// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();


// // create url
// export default async function createUrl(req: NextApiRequest, res: NextApiResponse) {
//     const { address } = req.body;
//     const exists = await prisma.url.findMany({ where: { address } });
//     if (!address) {
//         res.status(400).send('Please provide a url');
//     }
//     else if ((await exists).length > 0) {
//         res.status(400).send('Url already exists');
//     }
//     else {
//         const url  = await prisma.url.create({
//             data: {
//                 address,
//             }
//         });
//         res.status(201).json(url);
//     }
// }
