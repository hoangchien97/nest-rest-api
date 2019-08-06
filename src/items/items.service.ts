import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Item } from './interfaces/item.interface';
import { Model } from 'mongoose';
@Injectable()
export class ItemsService {
    private readonly items: Item[] = [
        {
            id: '3123123',
            name: 'Item One',
            quantity: 100,
            description: 'This is items one'
        },
        {
            id: '5464564',
            name: 'Item Two',
            quantity: 200,
            description: 'This is items two'
        }
    ];
    getItems(): Item[] {
        return this.items;
    }
    getItem(id: string): Item {
        return this.items.find(item => item.id === id);
    }
}
