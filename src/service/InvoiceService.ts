import { Injectable } from '@nestjs/common';
import {Invoice} from "@prisma/client";
import {retrievePrismaClient} from "../utils";

@Injectable()
export class InvoiceService {
    async getInvoices(): Promise<InvoiceDto[]> {
        const prismaClient = retrievePrismaClient()

        const invoices = await prismaClient.invoice.findMany()

        const userIds  = invoices.map((invoice) => invoice.userId)

        const users = await prismaClient.user.findMany({where: {id: {in: userIds}}})

        return invoices.map((invoice) => {
            const user = users.find((user) => user.id === invoice.userId)

            return {...invoice, name: user.name}
        })
    }

    getInvoiceById(id: string): Invoice {
        const prismaClient = retrievePrismaClient()

        return prismaClient.invoice.findUnique({
            where: {
                id
            },
        })
    }
}
