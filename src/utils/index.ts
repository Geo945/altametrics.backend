import {Invoice, PrismaClient, User} from '@prisma/client'
import {invoicesSeed, userSeed} from "../constants";
const bcrypt = require('bcrypt')

let prismaClient = null

export const retrievePrismaClient = () => {
    if(prismaClient !== null) {
        return prismaClient
    }

    prismaClient = new PrismaClient();

    return prismaClient
}

export const cleanUpDatabase = async() => {
    const prismaClient = retrievePrismaClient()

    await Promise.all([
        prismaClient.invoice.deleteMany(),
        prismaClient.bill.deleteMany(),
    ])

    await prismaClient.user.deleteMany()
}

export const createUsers = (): void => {
    //normal for loop is 3x faster then .forEach
    for (let i =0;i< userSeed.length; i++){
        createUser(userSeed[i])
    }
}

export const createInvoices = (): void => {
    for(let i=0; i<invoicesSeed.length ; i++){
        createInvoice(invoicesSeed[i])
    }
}

export const createInvoice = async (invoice:Invoice) => {
    const prismaClient = retrievePrismaClient()

    await prismaClient.invoice.create({
        data: invoice
    })
}

export const createUser = (body: User) => {
        const prismaClient= retrievePrismaClient()
        const {password, email, name} = body

        bcrypt.hash(password, 10, async (err, hash) => {
            if(err){
                return
            }

            await prismaClient.user.create({
                data: {
                    id: body.id,
                    email,
                    password: hash,
                    name,
                }
            })
        })


}
