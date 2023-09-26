import { Injectable , NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LessThanOrEqual, Repository } from 'typeorm';
import { ToDoEntity } from '../../entity/toDo.entity';
import { ToDoDto } from '../../dto/toDo.dto';
import { ToDoFilterDto } from 'src/dto/toDoFilter.dto';
import { plainToClass } from 'class-transformer';

export class ToDoFilterService {


    constructor(
        @InjectRepository(ToDoEntity)
        private readonly toDoRepository: Repository<ToDoEntity>,
    ) {}


    async getFilteredData(toDoFilterDto: ToDoFilterDto): Promise<ToDoDto[]> {
        let filterCriterias : any = {};

        if(toDoFilterDto && toDoFilterDto.points){
            filterCriterias["points"] = LessThanOrEqual(toDoFilterDto.points);
        }

        if(toDoFilterDto && toDoFilterDto.time){
            filterCriterias["time"] = LessThanOrEqual(toDoFilterDto.time);
        }

        if(toDoFilterDto && toDoFilterDto.isDone){
            filterCriterias["isDone"] = toDoFilterDto.isDone;
        }

        const filteredData: ToDoEntity[] = await this.toDoRepository.find( { 
            where: filterCriterias,
        } )
        let resultDto: ToDoDto[] = [];
        filteredData.forEach( (ele) => (
            resultDto.push( plainToClass(ToDoDto,ele) )
        ) )

        return resultDto;
        
    }
}