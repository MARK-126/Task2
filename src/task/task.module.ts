import { Module } from '@nestjs/common';
import { DatabaseModule } from '../dataBase/dataBase.module';
import { TaskService } from './providers/task.service';
import { taskProviders } from './providers/task.providers';
import { ApiTags } from '@nestjs/swagger';

@Module({
  imports: [DatabaseModule],
  providers: [...taskProviders, TaskService],
})
@ApiTags('task')
export class TaskMOdule {}
