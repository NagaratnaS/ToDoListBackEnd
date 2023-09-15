
import { Expose } from 'class-transformer';
import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class ToDoDto {
  @Expose()
  @IsString()
  @IsNotEmpty()
  public task: string;


  @Expose()
  @IsNumber()
  @IsNotEmpty()
  public points: number;


  @Expose()
  @IsString()
  @IsNotEmpty()
  public time: string;


  @Expose()
  @IsBoolean()
  @IsOptional()
  isDone : boolean;


}
