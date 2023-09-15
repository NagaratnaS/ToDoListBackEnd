import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ToDoEntity } from '../entity/index';
import { ToDoController } from '../controllers/to-do/to-do.controller';
import { ToDoService } from 'src/services/to-do/to-do.service';

@Module({
    imports: [TypeOrmModule.forFeature([ToDoEntity]),],
    controllers: [ToDoController],
    providers: [ToDoService],
})
export class ToDoModule {}
