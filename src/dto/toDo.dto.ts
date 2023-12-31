
import { Expose } from 'class-transformer';
import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString , IsDate} from 'class-validator';

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
  @IsDate()
  @IsNotEmpty()
  public time: Date;


  @Expose()
  @IsBoolean()
  @IsOptional()
  isDone : boolean;


}
