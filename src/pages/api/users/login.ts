import {NextApiResponse , NextApiRequest} from 'next'
import { PrismaClient } from '@prisma/client'
import { exitCode } from 'process';
const bcrypt = require('bcryptjs');
const prisma = new PrismaClient()

export default async function login(req :NextApiRequest, res :NextApiResponse){
    const {email,password} = req.body

    const user = await prisma.user.findMany({
        where: {email},
    })

    console.log(user)


    if(user.length === 0){
    res.status(400).send('User not found')
    }
    else if(!bcrypt.compareSync(password, user[0].password)){
        res.status(400).send('Password is incorrect')
    }
    else 
        res.status(200).send(user[0])
    }

