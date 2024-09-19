import { ApiProperty } from '@nestjs/swagger';

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TaskRunDocument = HydratedDocument<TaskRun>;

@Schema()

/**
 Task definition. Task describes and gives a schedule to its TaskRun instances.
 */
export class TaskRun {
  id: string;

  @ApiProperty({ description: 'Task.id' })
  @Prop()
  taskId: string;

  /**
   * Short task label.
   */
  @ApiProperty({ description: 'Short task label.' })
  @Prop()
  caption: string;

  @ApiProperty({ description: 'A more detailed task description.' })
  @Prop()
  description: string;

  @ApiProperty({
    description: `Time this TaskRun shows at the user's device`,
    example: '2024-09-11T09:30:00.000Z',
  })
  @Prop()
  eventTime: Date;

  @ApiProperty({
    description:
      'A notification event times (a reminder) for a client app to inform the user about the task.',
    example:
      '[30, 45] means two reminders: 30 mins before and 45 mins before the actual task event',
    type: 'number[]',
    isArray: true,
    default: [],
  })
  notificationMinutes: number[];

  @ApiProperty({
    description: `Shows that user has fulfilled this taskRun.`,
  })
  @Prop()
  fulfilled: boolean;
}

export const TaskRunSchema = SchemaFactory.createForClass(TaskRun);
