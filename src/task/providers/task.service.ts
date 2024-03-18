import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Task } from '../entities/task.entity';
import { CreateTaskDto } from '../dto/task.dto';

@Injectable()
export class TaskService implements OnModuleInit {
  async onModuleInit(): Promise<void> {
    await this.fetch();
  }
  constructor(
    @Inject('TASK_REPOSITORY')
    private taskRepository: Repository<Task>,
  ) {}

  async fetch(): Promise<void> {
    try {
      await this.taskRepository.query(
        `CREATE VIEW task_view2 AS 
          SELECT id, title, descirption, status 
          FROM task`,
      );
    } catch (error) {
      console.log('View: task_view2 is already exist');
    }
  }
  async createTask(createTask: CreateTaskDto): Promise<Task> {
    const newTask = new Task();
    newTask.title = createTask.title;
    newTask.descirption = createTask.description;
    newTask.status = createTask.status;
    return this.taskRepository.save(newTask);
  }

  async getAllTask(): Promise<Task[]> {
    return this.taskRepository.find();
  }

  async findOneTask(id: string): Promise<Task | null> {
    return this.taskRepository.findOneBy({ id: id });
  }

  async deleteTask(id: string): Promise<void> {
    await this.taskRepository.delete({ id: id });
  }
}
