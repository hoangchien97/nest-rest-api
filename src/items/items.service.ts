import { Injectable } from '@nestjs/common';

@Injectable()
export class ItemsService {
    getProduct() {
        return `this actions get all product`;
    }
}
