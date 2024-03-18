import { ApiProperty } from '@nestjs/swagger';
import { TaskStatus } from '../task.entity';

export class CreateTaskDto {
  @ApiProperty({ type: 'string', description: 'It must have a title' })
  title: string;

  @ApiProperty({ type: 'string', description: 'It must have a description' })
  description: string;

  @ApiProperty({ type: 'enum', enum: TaskStatus })
  status: TaskStatus;
}
