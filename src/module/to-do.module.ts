import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ToDoEntity } from '../entity/index';
import { ToDoController } from '../controllers/to-do/to-do.controller';
import { ToDoService } from 'src/services/to-do/to-do.service';
import { ToDoFilterController } from 'src/controllers/to-do/to-do-filter.controller';
import { ToDoFilterService } from 'src/services/to-do/to-do-filter.service';

@Module({
    imports: [TypeOrmModule.forFeature([ToDoEntity]),],
    controllers: [ToDoController,ToDoFilterController],
    providers: [ToDoService,ToDoFilterService],
})
export class ToDoModule {}
