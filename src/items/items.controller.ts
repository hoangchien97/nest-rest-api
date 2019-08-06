import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ItemsService } from './items.service';
import { CreateItemDTO } from './dto/create-item.dto';
import { Item } from './interfaces/item.interface';

@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) {}
    @Get()
    getItems(): Item[] {
        return this.itemsService.getItems();
    }
    @Get(':id')
    getItem(@Param('id') id): Item {
        return this.itemsService.getItem(id);
    }
}
