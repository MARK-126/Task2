import { Module } from '@nestjs/common';
import { DatabaseModule } from './dataBase/dataBase.module';
import { TaskService } from './providers/task.service';
import { taskProviders } from './providers/task.providers';

@Module({
  imports: [DatabaseModule],
  providers: [...taskProviders, TaskService],
})
export class TaskMOdule {}
