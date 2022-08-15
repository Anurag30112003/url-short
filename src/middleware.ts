import { NextRequest,NextResponse } from 'next/server'
import { prisma } from './db/client'


export default async (req:NextRequest , res: NextResponse) => {

    const {pathname} = req.nextUrl

    const exists = await prisma.url.findMany({
        where: {
            slug: pathname.slice(1),
        },
        select: {
            url: true,
          },
    })
    if (exists.length > 0) {
        const url = exists[0].url
        NextResponse.redirect (url)
    }

    return NextResponse.next()

    

}