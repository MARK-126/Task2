import { Controller, Get, Delete, Post, Param, Body } from '@nestjs/common';
import { Task } from './entities/task.entity';
import { TaskService } from './task.service';
import { CreateTaskDto } from './entities/task.dto';

@Controller('task')
export class TasksController {
  constructor(private taskService: TaskService) {}

  @Get()
  getAllTask() {
    return this.taskService.getAllTask();
  }

  @Get(':id')
  getOneTask(@Param('id') id: string): Promise<Task> {
    return this.taskService.findOneTask(id);
  }
  @Post()
  createTask(@Body() newTask: CreateTaskDto): Promise<Task> {
    return this.taskService.createTask(newTask);
  }

  @Delete(':id')
  removeTask(@Param('id') id: string) {
    this.taskService.deleteTask(id);
  }
}
