import { Module } from '@nestjs/common';
import { TaskMOdule } from './task/task.module';
import {
  FilteredTaskByStatus,
  TasksController,
} from './controllers/task.controllers';
import { DatabaseModule } from './dataBase/dataBase.module';
import { TaskService } from './task/providers/task.service';
import { taskProviders } from './task/providers/task.providers';
import { ConfigModule } from '@nestjs/config';
/*import { config } from 'dotenv';

config();
*/
@Module({
  imports: [
    TaskMOdule,
    DatabaseModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [TasksController, FilteredTaskByStatus],
  providers: [TaskService, ...taskProviders],
})
export class AppModule {}
