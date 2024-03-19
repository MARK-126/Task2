import { Module } from '@nestjs/common';
import { TaskMOdule } from './task/task.module';
import {
  FilteredTaskByStatus,
  TasksController,
} from './task/controllers/task.controllers';
import { DatabaseModule } from './task/dataBase/dataBase.module';
import { TaskService } from './task/providers/task.service';
import { taskProviders } from './task/providers/task.providers';

@Module({
  imports: [TaskMOdule, DatabaseModule],
  controllers: [TasksController, FilteredTaskByStatus],
  providers: [TaskService, ...taskProviders],
})
export class AppModule {}
