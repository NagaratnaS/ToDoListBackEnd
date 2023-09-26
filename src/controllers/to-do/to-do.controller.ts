import { Controller , Post , Delete , Put , Body , Param , Get, Query } from '@nestjs/common';
import { ToDoDto } from '../../dto/toDo.dto';
import { ToDoEntity } from '../../entity/toDo.entity';
import { ToDoService } from '../../services/to-do/to-do.service';

@Controller('/to-do')
export class ToDoController {

    constructor(private readonly toDoService: ToDoService){}

    @Post() 
    async createToDoTask(@Body() createToDoDto: ToDoDto) : Promise<string> {
        return this.toDoService.create(createToDoDto);
    }


    @Delete(':id')
    async delete(@Param('id') id: number): Promise<string> {
        return this.toDoService.delete(id);
    }


    
    @Get('/getAllData')
    async getAllData(@Query() isDone: string): Promise<ToDoDto[]>{
        return this.toDoService.getAllData(isDone['isDone'] == 'true');

    }



    @Get(':id')
    async findOneById(@Param('id') id: number): Promise<ToDoDto>{
        return this.toDoService.findOneById(id);
    }



    @Put(':id')
    async update(
        @Param('id') id: number ,
        @Body() toDoDto: ToDoDto
    ): Promise<ToDoDto>{
        return this.toDoService.update(id,toDoDto);
    }



    @Get('/')
    async getAll(): Promise<ToDoDto[]>{
        return this.toDoService.getAll();
    }


}
