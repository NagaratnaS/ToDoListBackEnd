import { Injectable , NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ToDoEntity } from '../../entity/toDo.entity';
import { ToDoDto } from '../../dto/toDo.dto';
import { plainToClass } from 'class-transformer';

@Injectable()
export class ToDoService {

    constructor(
        @InjectRepository(ToDoEntity)
        private readonly toDoRepository: Repository<ToDoEntity>,
    ) {}


    async create(toDoDto: ToDoDto): Promise<string> {
        const newToDoTask: ToDoEntity = plainToClass(ToDoEntity,toDoDto);
        const toDoElementCreated : ToDoEntity = await this.toDoRepository.save(newToDoTask);
        // const resultToDoElement : ToDoDto = plainToClass(ToDoDto,toDoElementCreated,{ excludeExtraneousValues: true });
        return "Successfully Created!!!";
    }


    async delete(id: number): Promise<string> {
        const elementToBeDeleted : ToDoEntity = await this.toDoRepository.findOne({where: { id: id } });
        if (!elementToBeDeleted) {
            throw new NotFoundException('User does not exist!');
        }
        // const elementDeleted : ToDoEntity = await this.toDoRepository.delete(id);
        const elementDeleted : ToDoEntity = await this.toDoRepository.remove(elementToBeDeleted);
        return `Task ${elementDeleted.task} Deleted Successfully!!`;
    }



    async getAllData(isDone: boolean): Promise<ToDoDto[]>{
        const allDataEntities : ToDoEntity[] = await this.toDoRepository.find( {
            where: {
                isDone: isDone,
            },
        } )
        let allDataDto : ToDoDto[] = [];
        allDataEntities.forEach( (element) => {
            allDataDto.push(plainToClass(ToDoDto,element));
        } )
        return allDataDto;
    }


    async findOneById(id: number): Promise<ToDoDto> {
        const elementToBeFound : ToDoEntity = await this.toDoRepository.findOne({where: { id: id } });
        if (!elementToBeFound) {
            throw new NotFoundException('User does not exist!');
        }
        const actualElementToBeFound: ToDoDto = plainToClass(ToDoDto,elementToBeFound);
        return actualElementToBeFound;
        
    }



    async update(id: number , toDoDto: ToDoDto): Promise<ToDoDto> {
        const elementToBeUpdated : ToDoEntity = await this.toDoRepository.findOne({where: { id: id } });
        if (!elementToBeUpdated) {
            throw new NotFoundException('User does not exist!');
        }
        const updateEle: ToDoEntity = plainToClass(ToDoEntity,toDoDto);
        await this.toDoRepository.update(id,updateEle);
        const updatedEle: ToDoEntity = await this.toDoRepository.findOne({where: {id: id} })
        const convertUpdatedEleToDto : ToDoDto = plainToClass(ToDoDto,updatedEle);
        return convertUpdatedEleToDto;
    }


    async getAll() : Promise<ToDoDto[]> {
        return this.toDoRepository.find();
    }
    

}
