import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { prisma } from './db/client'




export default async (request:NextRequest , res: NextResponse) => {

    if (request.nextUrl.pathname.startsWith('/redirect')){
        return NextResponse.rewrite(new URL(request.nextUrl.pathname, request.nextUrl.origin))
    }
    
}