import { Controller , Post , Delete , Put , Body , Param , Get, Query } from '@nestjs/common';
import { ToDoFilterDto } from "../../dto/toDoFilter.dto";
import { ToDoFilterService } from "../../services/to-do/to-do-filter.service";
import { ToDoDto } from 'src/dto/toDo.dto';

@Controller('/to-do-filter')

export class ToDoFilterController {


    constructor(private readonly toDoFilterService: ToDoFilterService){}

    @Get('/')
    async getFilteredData(@Body() toDoFilterDto: ToDoFilterDto ): Promise<ToDoDto[]> {
        return this.toDoFilterService.getFilteredData(toDoFilterDto);
    }
}