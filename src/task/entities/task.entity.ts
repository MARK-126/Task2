import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export enum TaskStatus {
  DONE = 'DONE',
  PENDING = 'PENDING',
  IN_PROGRESS = 'IN_PROGRES',
}

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  descirption: string;

  @Column({ type: 'enum', enum: TaskStatus, default: 'PENDING' })
  status: TaskStatus;
}
