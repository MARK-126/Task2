import { Module } from '@nestjs/common';
import { TaskMOdule } from './task/task.module';
import { TasksController } from './task/task.controllers';
import { DatabaseModule } from './task/dataBase/dataBase.module';
import { TaskService } from './task/task.service';

@Module({
  imports: [TaskMOdule, DatabaseModule],
  controllers: [TasksController],
  providers: [TaskService],
})
export class AppModule {}
