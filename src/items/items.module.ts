import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsSchema } from './schemas/items.schema';
import { Module } from '@nestjs/common';

@Module({
  imports: [MongooseModule.forFeature([{name: 'items', schema: ItemsSchema}])],
  controllers: [ItemsController],
  providers: [ItemsService],
})
export class AppModule {}
