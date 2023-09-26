
import { Expose } from 'class-transformer';
import { IsBoolean, IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class ToDoFilterDto {
  @Expose()
  @IsString()
  @IsOptional()
  public task: string;


  @Expose()
  @IsNumber()
  @IsOptional()
  public points: number;


  @Expose()
  @IsDate()
  @IsOptional()
  public time: Date;


  @Expose()
  @IsBoolean()
  @IsOptional()
  isDone : boolean;


}
