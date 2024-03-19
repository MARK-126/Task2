import { Inject, Injectable, Query } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Task, TaskStatus } from '../entities/task.entity';
import { CreateTaskDto } from '../dto/task.dto';
import { ApiOperation, ApiQuery } from '@nestjs/swagger';

@Injectable()
export class TaskService {
  //implements OnModuleInit {
  /* async onModuleInit(): Promise<void> {
    await this.fetch();
  }*/
  constructor(
    @Inject('TASK_REPOSITORY')
    private taskRepository: Repository<Task>,
  ) {}
  /*
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
  */
  @ApiOperation({
    summary: 'Create new task',
    description: 'Create a new task in Task respository',
  })
  async createTask(createTask: CreateTaskDto): Promise<Task> {
    const newTask = new Task();
    newTask.title = createTask.title;
    newTask.descirption = createTask.description;
    newTask.status = createTask.status;
    return this.taskRepository.save(newTask);
  }

  @ApiOperation({
    summary: 'Get all task',
    description: 'Retrieve a list of all tasks',
  })
  async getAllTask(): Promise<Task[]> {
    return this.taskRepository.find();
  }

  @ApiOperation({
    summary: 'Find task by ID ',
    description: 'Find task by ID in Task respository',
  })
  async findOneTask(id: string): Promise<Task | null> {
    return this.taskRepository.findOneBy({ id: id });
  }

  @ApiOperation({
    summary: 'Delete task',
    description: 'Delete task in Task respository',
  })
  async deleteTask(id: string): Promise<void> {
    await this.taskRepository.delete({ id: id });
  }

  @ApiQuery({ name: 'status', enum: TaskStatus })
  async filterTask(@Query('status') status: TaskStatus): Promise<Task[]> {
    const filterArray: Task[] = [];
    const taskBYStatus = await this.taskRepository.findBy({ status });

    filterArray.push(...taskBYStatus);
    return filterArray;
  }
}
