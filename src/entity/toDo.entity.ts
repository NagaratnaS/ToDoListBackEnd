import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('ToDo')
export class ToDoEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    task: string;

    @Column()
    points: number;

    @Column()
    time: string;

    @Column( { default: false } )
    isDone: boolean;
}