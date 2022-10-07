import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

export enum TaskStatus {
    Created = 0,
    InProgress = 1,
    Done = 2
}

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: false, length: 64 })
    title: string

    @Column({ nullable: true, length: 1024 })
    description: string;

    @Column({nullable:false, default: TaskStatus.Created})
    status: TaskStatus;

    @Column({})
    @CreateDateColumn()
    createdAt: Date;

    @Column()
    @UpdateDateColumn()
    updatedAt: Date;
    
}