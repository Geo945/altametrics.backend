import {Invoice, User} from "@prisma/client";

export const userSeed: User[] = [
    {
        id: '65509c02cbf4d8eeb887a5b5',
        email: "email1@yahoo.com",
        password: "password1",
        name: 'john doe'
    },
    {
        id: '65509c02cbf4d8eeb887a5b2',
        email: "email2@yahoo.com",
        password: "password2",
        name: 'emanuel dancila'
    },
    {
        id: '65509c02cbf4d8eeb887a5b3',
        email: "email3@yahoo.com",
        password: "password3",
        name: 'john wick'
    }
]

export const invoicesSeed: Invoice[] = [
    {
        id: '65509c02cbf4d8eeb887a523',
        due_date: new Date(),
        amount: 100,
        details: 'marketing invoice',
        userId: '65509c02cbf4d8eeb887a5b5'
    },
    {
        id: '65509c02cbf4d8eeb887a524',
        due_date: new Date(),
        amount: 150,
        details: 'invoice for microsoft office license',
        userId: '65509c02cbf4d8eeb887a5b2'
    },
    {
        id: '65509c02cbf4d8eeb887a525',
        due_date: new Date(),
        amount: 25,
        details: 'invoice for webstorm license',
        userId: '65509c02cbf4d8eeb887a5b3'
    }
]
