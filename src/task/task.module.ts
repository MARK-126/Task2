import { Module } from '@nestjs/common';
import { DatabaseModule } from './dataBase/dataBase.module';
import { TaskService } from './task.service';
import { taskProviders } from './task.providers';

@Module({
  imports: [DatabaseModule],
  providers: [...taskProviders, TaskService],
})
export class TaskMOdule {}
