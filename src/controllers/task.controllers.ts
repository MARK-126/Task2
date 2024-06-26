import {
  Controller,
  Get,
  Delete,
  Post,
  Param,
  Body,
  Query,
} from '@nestjs/common';
import { Task, TaskStatus } from '../task/entities/task.entity';
import { TaskService } from '../task/providers/task.service';
import { CreateTaskDto } from '../task/dto/task.dto';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('task')
@Controller('task')
export class TasksController {
  constructor(private taskService: TaskService) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Return list of tasks',
  })
  @ApiBadRequestResponse({
    status: 404,
    description: 'Invalid data has been provided.',
  })
  getAllTask() {
    return this.taskService.getAllTask();
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'Return task from list of tasks',
  })
  @ApiNoContentResponse({ description: 'Task not found' })
  @ApiBadRequestResponse({
    status: 404,
    description: 'Invalid data has been provided.',
  })
  getOneTask(@Param('id') id: string): Promise<Task> {
    return this.taskService.findOneTask(id);
  }

  @Post()
  @ApiCreatedResponse({
    status: 201,
    description: 'Creat task',
  })
  @ApiBadRequestResponse({
    status: 404,
    description: 'Invalid data has been provided.',
  })
  createTask(@Body() newTask: CreateTaskDto): Promise<Task> {
    return this.taskService.createTask(newTask);
  }

  @Delete(':id')
  @ApiResponse({
    status: 200,
    description: 'Task has been removed from list of tasks',
  })
  @ApiBadRequestResponse({
    status: 404,
    description: 'Invalid data has been provided.',
  })
  removeTask(@Param('id') id: string) {
    this.taskService.deleteTask(id);
  }
}

@ApiTags('filter tasks')
@Controller('filtered-tasks')
export class FilteredTaskByStatus {
  constructor(private readonly taskService: TaskService) {}

  @ApiResponse({
    status: 200,
    description: 'Return list of tasks by status',
  })
  @ApiNoContentResponse({ description: 'Tasks not found' })
  @ApiBadRequestResponse({
    status: 404,
    description: 'Invalid data has been provided.',
  })
  @Get() //GET a /filterTask?status=PENDING
  filterTask(@Query('status') status: TaskStatus): Promise<Task[]> {
    return this.taskService.filterTask(status);
  }
}
