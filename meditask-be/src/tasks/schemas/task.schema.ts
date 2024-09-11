import { ApiProperty } from '@nestjs/swagger';

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TaskDocument = HydratedDocument<Task>;

@Schema()

/**
 Task definition. Task describes and gives a schedule to its TaskRun instances.
 */
export class Task {
  id: string;

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
    description: 'A Date the Task can begin (via its TaskRun).',
    example: '2024-09-11T00:00:00.000Z',
  })
  @Prop()
  startDate: Date;

  @ApiProperty({
    description: `A Date the Task should end entirely. 
    No more TaskRun instances should be created for this Task after this date)`,
    example: '2024-09-11T00:00:00.000Z',
  })
  @Prop()
  endDate: Date;

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

  /**
   * string in cron time syntax
   * see https://github.com/kelektiv/node-cron/tree/main
   */
  @ApiProperty({
    description: `Task schedule string in a Cron format. Defines date and time TaskRun instances are executed. 
    For every Cron event, a new taskRun instance is created.`,
    example: '"0 30 11 * * 1-5" Monday to Friday at 11:30am',
  })
  @Prop()
  schedule: string;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
