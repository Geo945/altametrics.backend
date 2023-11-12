import {Controller, Get, Param} from '@nestjs/common';
import { InvoiceService } from '../service/InvoiceService';
import {Invoice} from "@prisma/client";

@Controller()
export class InvoiceController {
    constructor(private readonly invoiceService: InvoiceService) {}

    @Get('/invoices')
    async getInvoices(): Promise<InvoiceDto[]> {
        return this.invoiceService.getInvoices();
    }

    @Get('/invoices/:id')
    getInvoiceById(@Param('id') id: string): Invoice {
        return this.invoiceService.getInvoiceById(id);
    }
}
